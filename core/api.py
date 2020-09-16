from core.models import Empleado, Acompanante, CheckIn, CheckOut
from rest_framework import viewsets, permissions
from .serializers import EmpleadoSerializer, AcompananteSerializer, CheckInSerializer, CheckOutSerializer

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

    