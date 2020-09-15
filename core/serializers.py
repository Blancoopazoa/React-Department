from core.models import Empleado, Acompanante, CheckIn, CheckOut, Chofer, Cliente, Comuna, Departamento, Inventario, Login, Mantencion, Multas, Pago, Region, Reserva, Servicio, Tour, Vehiculo 
from rest_framework import serializers


class EmpleadoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empleado
        fields = '__all__'

class AcompananteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acompanante
        fields = '__all__'

class CheckInSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckIn 
        fields = '__all__'

class CheckOutSerializer(serializers.ModelSerializer):
    class Meta:
        model = CheckOut 
        fields = '__all__'

class ChoferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chofer 
        fields = '__all__'

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chofer 
        fields = '__all__'

class ComunaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comuna
        fields = '__all__'

class DepartamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departamento 
        fields = '__all__'

class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventario 
        fields = '__all__'

class LoginSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Login 
        fields = '__all__'

class MantencionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mantencion 
        fields = '__all__'

class MultasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Multas 
        fields = '__all__'

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago 
        fields = '__all__'

class RegionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Region 
        fields = '__all__'

class ReservaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reserva 
        fields = '__all__'

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio 
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour 
        fields = '__all__'

class VehiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehiculo 
        fields = '_all__'




 #fin tablas        
