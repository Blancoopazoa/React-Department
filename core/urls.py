from rest_framework import routers
from .api import VehiculoViewSet, TourViewSet, ServicioViewSet, ReservaViewSet, RegionViewSet, PagoViewSet, MultasViewSet, EmpleadoViewSet, AcompananteViewSet, CheckInViewSet, CheckOutViewSet, ClienteViewSet, ChoferViewSet, ComunaViewSet, DepartamentoViewSet, InventarioViewSet, LoginViewSet, MantencionViewSet

router = routers.DefaultRouter()

router.register('empleados',EmpleadoViewSet, 'empleados')
router.register('acompanantes',AcompananteViewSet,'acompanantes')
router.register('checkins',CheckInViewSet,'checkins')
router.register('checkouts',CheckOutViewSet,'checkouts')
router.register('clientes',ClienteViewSet,'clientes')
router.register('chofer',ChoferViewSet,'chofer')
router.register('comuna',ComunaViewSet,'comuna')
router.register('departamento',DepartamentoViewSet,'departamento')
router.register('inventario',InventarioViewSet,'inventario')
router.register('login',LoginViewSet,'login')
router.register('mantencion',MantencionViewSet,'mantencion')
router.register('multas',MultasViewSet,'multas')
router.register('pago',PagoViewSet,'pago')
router.register('region',RegionViewSet,'region')
router.register('reserva',ReservaViewSet,'reserva')
router.register('servicio',ServicioViewSet,'servicio')
router.register('tour',TourViewSet,'tour')
router.register('vehiculo',VehiculoViewSet,'vehiculo')

urlpatterns = router.urls