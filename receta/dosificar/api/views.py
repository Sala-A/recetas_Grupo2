from rest_framework.viewsets import ModelViewSet
from dosificar.models import Dosificar
from dosificar.api.serializers import DosificarSerializers

class DosificarApiViewSet(ModelViewSet):
    serializer_class = DosificarSerializers
    queryset = Dosificar.objects.all()
    