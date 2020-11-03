from rest_framework import routers, permissions, status
from .api import  UserViewSet,VehiculoViewSet, TourViewSet, ServicioViewSet, ReservaViewSet, RegionViewSet, PagoViewSet, MultasViewSet, EmpleadoViewSet, AcompananteViewSet, CheckInViewSet, CheckOutViewSet, ClienteViewSet, ChoferViewSet, ComunaViewSet, DepartamentoViewSet, InventarioViewSet, LoginViewSet, MantencionViewSet
from .views import current_user, UserList
router = routers.DefaultRouter()
from django.urls import include, path
from rest_framework.decorators import api_view
from rest_framework.views import APIView

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
router.register('users',UserViewSet,'users')

@api_view(['GET'])
def current_user(request):
    """
    Determine the current user by their token, and return their data
    """
    
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    """
    Create a new user. It's called 'UserList' because normally we'd have a get
    method here too, for retrieving a list of all User objects.
    """

    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


urlpatterns = router.urls