from django.urls import path
from . import views

from .views import MyTokenObtainPairView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('club/<int:id>', views.getClubById),
    path('club/<str:name>', views.getClubByName),
    path('clubs/', views.getAllClubs),
    path('clubs/add/', views.addClub),

    path('event/<int:id>', views.getEventsById),

    path('events/', views.getAllEvents),

    path('register/', views.registerHandler, name="register"),

    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]