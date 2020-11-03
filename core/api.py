from core.models import Vehiculo, Tour, Servicio, Reserva, Region, Pago, Empleado, Acompanante, CheckIn, CheckOut, Cliente, Chofer, Comuna, Departamento, Inventario, Login, Mantencion, Multas 
from rest_framework import viewsets, permissions
from .serializers import UserSerializer,VehiculoSerializer, TourSerializer, ServicioSerializer, ReservaSerializer, RegionSerializer, PagoSerializer, EmpleadoSerializer, AcompananteSerializer, CheckInSerializer, CheckOutSerializer, ClienteSerializer, ChoferSerializer,MultasSerializer, ComunaSerializer, DepartamentoSerializer, InventarioSerializer, LoginSerializer, MantencionSerializer
from django.contrib.auth.models import User

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmpleadoSerializer


class AcompananteViewSet(viewsets.ModelViewSet):
    queryset = Acompanante.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = AcompananteSerializer

class CheckInViewSet(viewsets.ModelViewSet):
    queryset = CheckIn.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CheckInSerializer

class CheckOutViewSet(viewsets.ModelViewSet):
    queryset = CheckOut.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = CheckOutSerializer

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ClienteSerializer

class ChoferViewSet(viewsets.ModelViewSet):
    queryset = Chofer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ChoferSerializer

class ComunaViewSet(viewsets.ModelViewSet):
    queryset = Comuna.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ComunaSerializer

class DepartamentoViewSet(viewsets.ModelViewSet):
    queryset = Departamento.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = DepartamentoSerializer

class InventarioViewSet(viewsets.ModelViewSet):
    queryset = Inventario.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = InventarioSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LoginSerializer

class MantencionViewSet(viewsets.ModelViewSet):
    queryset = Mantencion.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MantencionSerializer

class MultasViewSet(viewsets.ModelViewSet):
    queryset = Multas.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MultasSerializer

class PagoViewSet(viewsets.ModelViewSet):
    queryset = Pago.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = PagoSerializer

class RegionViewSet(viewsets.ModelViewSet):
    queryset = Region.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RegionSerializer

class ReservaViewSet(viewsets.ModelViewSet):
    queryset = Reserva.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ReservaSerializer

class ServicioViewSet(viewsets.ModelViewSet):
    queryset = Servicio.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ServicioSerializer

class TourViewSet(viewsets.ModelViewSet):
    queryset = Tour.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TourSerializer

class VehiculoViewSet(viewsets.ModelViewSet):
    queryset = Vehiculo.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = VehiculoSerializer