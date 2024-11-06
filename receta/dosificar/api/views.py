from rest_framework.viewsets import ModelViewSet
from dosificar.models import Dosificar
from dosificar.api.serializers import DosificarSerializers
from dosificar.api.permissions import IsAuthenticatedToCreate

class DosificarApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticatedToCreate]
    serializer_class = DosificarSerializers
    queryset = Dosificar.objects.all()
    