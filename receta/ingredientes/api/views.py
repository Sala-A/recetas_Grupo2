from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from ingredientes.models import Ingrediente
from ingredientes.api.serializers import IngredientesSerializers
from ingredientes.api.permissions import IsAuthenticatedIngredientes

class IngredientesApiViewSet(ModelViewSet):
    serializer_class = IngredientesSerializers
    queryset = Ingrediente.objects.all()
    permission_classes = [IsAuthenticatedIngredientes]

    def create(self, request, *args, **kwargs):
        receta_id = request.data.get('id_receta')
        nombre = request.data.get('nombre')
        if Ingrediente.objects.filter(nombre=nombre, id_receta=receta_id).exists():
            return Response(
                {"error": "El ingrediente ya existe en esta receta."},
                status=status.HTTP_400_BAD_REQUEST
            )
        return super().create(request, *args, **kwargs)
