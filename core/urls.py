from rest_framework import routers
from .api import EmpleadoViewSet

router = routers.DefaultRouter()

router.register('api/empleados',EmpleadoViewSet, 'empleados')

urlpatterns = router.urls