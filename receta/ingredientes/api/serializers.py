from rest_framework import serializers
from recetas.models import Receta
from ingredientes.models import Ingrediente

class RecetasSerializers(serializers.ModelSerializer):
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

class IngredientesSerializers(serializers.ModelSerializer):
    id_receta = serializers.PrimaryKeyRelatedField(queryset=Receta.objects.all())
    
    class Meta:
        model = Ingrediente
        fields = [
            'id_ingredientes', 
            'cantidad',
            'unidad',  
            'id_receta'
        ]