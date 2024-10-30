from rest_framework import serializers
from recetas.models import Receta
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']

class RecetasSerializers(serializers.ModelSerializer):
    id_usuario = UserSerializer(read_only=True)

    class Meta:
        model = Receta
        fields = [
            'id_receta', 
            'nombre', 
            'descripcion', 
            'tiempo_preparacion', 
            'categoria', 
            'imagen', 
            'numero_comensales', 
            'id_usuario'
        ]
