from rest_framework.viewsets import ModelViewSet
from recetas.models import Receta
from recetas.api.serializers import RecetasSerializers
from recetas.api.permissions import IsAuthenticatedAndOwnerOrReadOnly

class RecetasApiViewSet(ModelViewSet):
    serializer_class = RecetasSerializers
    queryset = Receta.objects.all()
    permission_classes = [IsAuthenticatedAndOwnerOrReadOnly]
