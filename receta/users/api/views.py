from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from users.models import User
#from users.api.serializers import UserRegisterSerializer

class RegisterView(APIView):
    def post(selft, request):
        print('Registro De Usuario')
        return Response('Registro De Usuario', status=status.HTTP_400_BAD_REQUEST)