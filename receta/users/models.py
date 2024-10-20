from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    
    # Conectar en caso de necesidad para crear un superusuario
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []