from core.models import Empleado
from rest_framework import viewsets, permissions
from .serializers import EmpleadoSerializer

class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = EmpleadoSerializer

    