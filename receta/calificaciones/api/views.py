from rest_framework.viewsets import ModelViewSet
from calificaciones.models import Calificacion  # Asegúrate de que este es el nombre correcto
from calificaciones.api.serializers import CalificacionSerializers  # Corrige el nombre del serializador

class CalificacionApiViewSet(ModelViewSet):
    serializer_class = CalificacionSerializers  # Asegúrate de usar el nombre correcto del serializador
    queryset = Calificacion.objects.all()  # Asegúrate de que este es el nombre correcto del modelo