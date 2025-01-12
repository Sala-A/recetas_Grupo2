from rest_framework.viewsets import ModelViewSet
from calificaciones.models import Calificacion
from calificaciones.api.serializers import CalificacionSerializers
from calificaciones.api.permissions import IsAuthenticatedToCreate

class CalificacionApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedToCreate]
    serializer_class = CalificacionSerializers
    queryset = Calificacion.objects.all()
