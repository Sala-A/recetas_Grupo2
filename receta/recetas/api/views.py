from rest_framework.viewsets import ModelViewSet
from recetas.models import Receta
from recetas.api.serializers import RecetasSerializers

class RecetasApiViewSet(ModelViewSet):
    serializer_class = RecetasSerializers
    queryset = Receta.objects.all()
    