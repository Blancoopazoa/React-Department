from rest_framework import routers
from .api import EmpleadoViewSet, AcompananteViewSet, CheckInViewSet, CheckOutViewSet

router = routers.DefaultRouter()

router.register('empleados',EmpleadoViewSet, 'empleados')
router.register('acompanantes',AcompananteViewSet,'acompanantes')
router.register('checkins',CheckInViewSet,'checkins')
router.register('checkouts',CheckOutViewSet,'checkouts')



urlpatterns = router.urls