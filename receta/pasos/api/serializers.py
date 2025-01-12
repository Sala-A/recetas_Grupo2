from rest_framework import serializers
from pasos.models import Paso
from recetas.models import Receta

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
        

class PasosSerializers(serializers.ModelSerializer):
    id_receta = serializers.PrimaryKeyRelatedField(queryset=Receta.objects.all())
    
    class Meta:
        model = Paso
        fields = [
            'id_pasos', 
            'descripcion',
            'id_receta'
        ]
        
