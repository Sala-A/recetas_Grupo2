from rest_framework import serializers
from calificacion.models import Calificacione  # Asegúrate de que el modelo se llama así

class CalificacionSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Calificacione  # Asegúrate de que este es el nombre correcto del modelo
        fields = [
            'id_receta', 
            'puntuacion', 
            'comentario', 
            'fecha', 
            'id_user', 
        ]
 