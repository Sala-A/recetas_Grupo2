from rest_framework.viewsets import ModelViewSet
from calificacion.models import Calificacione  # Asegúrate de que este es el nombre correcto
from calificacion.api.serializers import CalificacionSerializers  # Corrige el nombre del serializador

class CalificacionApiViewSet(ModelViewSet):
    serializer_class = CalificacionSerializers  # Asegúrate de usar el nombre correcto del serializador
    queryset = Calificacione.objects.all()  # Asegúrate de que este es el nombre correcto del modelo