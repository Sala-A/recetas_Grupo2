from rest_framework.routers import DefaultRouter
from dosificar.api.views import DosificarApiViewSet

router_dosificar = DefaultRouter()
router_dosificar.register(prefix='dosificar', basename='dosificar', viewset=DosificarApiViewSet)    