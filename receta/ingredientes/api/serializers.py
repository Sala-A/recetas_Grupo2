from rest_framework import serializers
from ingredientes.models import Ingrediente
from recetas.models import Receta

class IngredientesSerializers(serializers.ModelSerializer):
    id_receta = serializers.PrimaryKeyRelatedField(queryset=Receta.objects.all())
    
    class Meta:
        model = Ingrediente
        fields = [
            'id_ingredientes',
            'nombre',
            'cantidad', 
            'unidad', 
            'id_receta'
        ]
    
    def validate(self, data):
        if Ingrediente.objects.filter(nombre=data['nombre'], id_receta=data['id_receta']).exists():
            raise serializers.ValidationError("El ingrediente ya existe en esta receta.")
        return data
