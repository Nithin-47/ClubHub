from django.db import models
from django.contrib.auth.models import AbstractUser

from .managers import CustomUserManager

class User(AbstractUser):
    username = None
    first_name = None
    last_name = None

    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    is_email_verified = models.BooleanField(default=True)
    usn = models.CharField(max_length=255, null=True)
    access_level = models.IntegerField(default=100)

    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = ["name"]

    objects = CustomUserManager() 

    def __str__(self):
        return self.email.split('@')[0]

class Club(models.Model):
    name = models.CharField(max_length=255, unique=True)
    logo = models.ImageField(null=True)
    details = models.TextField(null=True)
    longDetails = models.TextField(null=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    name = models.CharField(max_length=255, unique=True)
    # club = models.ManyToOneField(Club, on_delete=models.DO_NOTHING)
    poster = models.ImageField()
    details = models.TextField(null=True)
    longDetails = models.TextField(null=True)
    eventType = models.CharField(max_length=255, default="upcoming")

    def __str__(self):
        return self.name