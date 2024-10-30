from rest_framework import serializers
from dosificar.models import Dosificar
from ingredientes.models import Ingrediente
from recetas.models import Receta
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']
        ref_name = 'DosificarUser'  # Nombre único para evitar conflictos

class IngredienteSerializer(serializers.ModelSerializer):
    id_usuario = UserSerializer(read_only=True)  # Relación con User

    class Meta:
        model = Ingrediente
        fields = [
            'id_ingrediente',
            'nombre',
            'descripcion',
            'cantidad',
            'unidad_medida',
            'id_usuario'
        ]

class RecetaSerializer(serializers.ModelSerializer):
    id_usuario = UserSerializer(read_only=True)  # Relación con User

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

class DosificarSerializer(serializers.ModelSerializer):
    id_ingrediente = IngredienteSerializer(read_only=True)  # Relación con Ingrediente
    id_receta = RecetaSerializer(read_only=True)  # Relación con Receta

    class Meta:
        model = Dosificar
        fields = [
            'id_dosificar',
            'cantidad',
            'numero_comensales',
            'id_ingrediente',
            'id_receta',
        ]
