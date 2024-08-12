from rest_framework.response import Response
from rest_framework.decorators import api_view

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from base.models import User, Club, Event
from base.serializers import UserSerializer, ClubSerializer, EventSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['name'] = user.name
        token['email'] = user.email
        token['access_level'] = user.access_level
        # ...

        return token
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getAllClubs(req):
    clubs = Club.objects.all()
    serializer = ClubSerializer(clubs, many=True)

    return Response(serializer.data)

@api_view(["GET"])
def getClubById(req, id):
    club = Club.objects.get(id=id)
    serializer = ClubSerializer(club, many=False)

    return Response(serializer.data)

@api_view(["GET"])
def getClubByName(req, name):
    club = Club.objects.get(id=name)
    serializer = ClubSerializer(club, many=False)

    return Response(serializer.data)

# Events Specific
@api_view(["GET"])
def getEventsById(req, id):
    events = Event.objects.get(id=id)
    serializer = EventSerializer(events, many=False)

    return Response(serializer.data)

@api_view(['GET'])
def getAllEvents(req):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)

    return Response(serializer.data)

@api_view(["POST"])
def addClub(req):
    serializer = ClubSerializer(data=req.data)
    
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(["POST"])
def registerHandler(req):
    email = req.data.get("email")
    password = req.data.get("password")
    name = req.data.get("name")
    usn = req.data.get("usn")

    user = None

    try:
        user = User.objects.create_user(
            email=email, 
            password=password,
            name=name,
            usn=usn
        )
        user.save()
    except Exception as e:
        print(e)
        return Response({
            "error": {
                "message": "User already exists"
            }
        })

    serializer = UserSerializer(user)
    return Response(serializer.data)