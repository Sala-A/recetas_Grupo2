from rest_framework import status
from rest_framework.response import Response
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
        
        # Verificar si el ingrediente ya existe para esa receta
        if Ingrediente.objects.filter(nombre=nombre, id_receta=receta_id).exists():
            return Response(
                {"error": "El ingrediente ya existe en esta receta."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        return super().create(request, *args, **kwargs)

    def list(self, request, *args, **kwargs):
        id_receta = self.request.query_params.get('id_receta')
        if id_receta:
            ingredientes = Ingrediente.objects.filter(id_receta=id_receta)
        else:
            ingredientes = Ingrediente.objects.all()
        
        serializer = self.get_serializer(ingredientes, many=True)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        
        receta_id = request.data.get('id_receta', instance.id_receta)
        nombre = request.data.get('nombre', instance.nombre)
        
        # Validación para verificar si el ingrediente ya existe en la receta
        if Ingrediente.objects.filter(nombre=nombre, id_receta=receta_id).exclude(pk=instance.pk).exists():
            return Response(
                {"error": "Ya existe un ingrediente con este nombre en la receta."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        # Realiza la actualización
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)
