from rest_framework.routers import DefaultRouter
from recetas.api.views import RecetasApiViewSet

router_recetas = DefaultRouter()
router_recetas.register(prefix='recetas', basename='recetas', viewset=RecetasApiViewSet)