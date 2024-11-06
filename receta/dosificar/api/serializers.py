from rest_framework import serializers
from dosificar.models import Dosificar
from ingredientes.models import Ingrediente
from recetas.models import Receta
from users.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']
        ref_name = 'DosificarUser'
        
class RecetaSerializers(serializers.ModelSerializer):
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

class IngredienteSerializers(serializers.ModelSerializer):
    id_receta = RecetaSerializers(read_only=True)

    class Meta:
        model = Ingrediente
        fields = [
            'id_ingredientes',
            'nombre',
            'id_receta'
        ]



class DosificarSerializers(serializers.ModelSerializer):
    id_ingrediente = IngredienteSerializers(read_only=True)
    id_receta = RecetaSerializers(read_only=True) 

    class Meta:
        model = Dosificar
        fields = [
            'id_dosificar',
            'cantidad',
            'numero_comensales',
            'id_ingrediente',
            'id_receta',
        ]
