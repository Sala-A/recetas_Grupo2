from rest_framework.routers import DefaultRouter
from pasos.api.views import PasosApiViewSet

router_pasos = DefaultRouter()
router_pasos.register(prefix='pasos', basename='pasos', viewset=PasosApiViewSet)