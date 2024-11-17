from rest_framework.viewsets import ModelViewSet
from ingredientes.models import Ingrediente
from ingredientes.api.serializers import IngredientesSerializers
from ingredientes.api.permissions import IsAuthenticatedIngredientes

class IngredientesApiViewSet(ModelViewSet):
    serializer_class = IngredientesSerializers
    queryset = Ingrediente.objects.all()
    permission_classes = [IsAuthenticatedIngredientes]