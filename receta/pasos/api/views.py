from rest_framework.viewsets import ModelViewSet
from pasos.models import Paso
from pasos.api.serializers import PasosSerializers
from pasos.api.permissions import IsAuthenticatedAndOwnerOrReadOnly

class PasosApiViewSet(ModelViewSet):
    serializer_class = PasosSerializers
    queryset = Paso.objects.all()
    permission_classes = [IsAuthenticatedAndOwnerOrReadOnly]