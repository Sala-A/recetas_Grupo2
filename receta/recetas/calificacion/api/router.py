from rest_framework.routers import DefaultRouter
from calificacion.api.views import CalificacionApiViewSet  # Asegúrate de que el nombre es correcto

router_calificacion = DefaultRouter()
router_calificacion.register(prefix='calificacion', basename='calificacion', viewset=CalificacionApiViewSet)

