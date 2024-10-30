from rest_framework.routers import DefaultRouter
from calificaciones.api.views import CalificacionApiViewSet  # Asegúrate de que el nombre es correcto

router_calificaciones = DefaultRouter()
router_calificaciones.register(prefix='calificaciones', basename='calificaciones', viewset=CalificacionApiViewSet)

