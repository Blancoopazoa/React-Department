# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Acompanante(models.Model):
    rut_pasaporte = models.CharField(primary_key=True, max_length=1)
    nombre = models.CharField(max_length=15)
    apellido_m = models.CharField(max_length=15)
    appelido_p = models.CharField(max_length=15)
    fecha_nacimiento = models.DateField()
    cliente_rut_pasaporte = models.ForeignKey('Cliente', models.DO_NOTHING, db_column='cliente_rut_pasaporte')

    class Meta:
        managed = False
        db_table = 'acompanante'


class Checkin(models.Model):
    id_chek_in = models.IntegerField(primary_key=True)
    fecha_llegada = models.DateField()
    estado_hbitacion = models.CharField(max_length=20)
    departamento_n_rol = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='departamento_n_rol')
    cliente_rut_pasaporte = models.ForeignKey('Cliente', models.DO_NOTHING, db_column='cliente_rut_pasaporte')
    empleado_rut = models.ForeignKey('Empleado', models.DO_NOTHING, db_column='empleado_rut')

    class Meta:
        managed = False
        db_table = 'checkin'


class Checkout(models.Model):
    id_chek_out = models.IntegerField(primary_key=True)
    estado_entrega = models.CharField(max_length=20)
    empleado_rut = models.ForeignKey('Empleado', models.DO_NOTHING, db_column='empleado_rut')
    id_pago = models.IntegerField()
    departamento_n_rol = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='departamento_n_rol')

    class Meta:
        managed = False
        db_table = 'checkout'


class Chofer(models.Model):
    rut = models.CharField(primary_key=True, max_length=12)
    nombre = models.CharField(max_length=15)
    apellido_m = models.CharField(max_length=15)
    apellido_p = models.CharField(max_length=15)
    vehiculo_patente = models.CharField(max_length=6, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'chofer'


class Cliente(models.Model):
    rut_pasaporte = models.CharField(primary_key=True, max_length=20)
    cel = models.BigIntegerField()
    correo = models.CharField(max_length=30)
    nacimineto = models.DateField()
    nombre = models.CharField(max_length=15)
    apellido_m = models.CharField(max_length=15)
    apellido_p = models.CharField(max_length=15)
    chek_out_id_chek_out = models.ForeignKey(Checkout, models.DO_NOTHING, db_column='chek-out_id_chek_out', blank=True, null=True)  # Field renamed to remove unsuitable characters.
    reserva_id_reserva = models.ForeignKey('Reserva', models.DO_NOTHING, db_column='reserva_id_reserva')
    id_pago = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'cliente'


class Comuna(models.Model):
    id_comuna = models.BigIntegerField(primary_key=True)
    desc_comuna = models.CharField(max_length=15)
    region_n_region = models.ForeignKey('Region', models.DO_NOTHING, db_column='region_n_region')

    class Meta:
        managed = False
        db_table = 'comuna'


class Departamento(models.Model):
    n_rol = models.CharField(primary_key=True, max_length=11)
    n_baños = models.IntegerField()
    n_habitaciones = models.IntegerField()
    desc_habitacion = models.CharField(max_length=20)
    precio_dia = models.BigIntegerField()
    nombre_edificio = models.CharField(max_length=15)
    n_departameto = models.IntegerField()
    comuna_id_comuna = models.ForeignKey(Comuna, models.DO_NOTHING, db_column='comuna_id_comuna')
    mantencion_id_mantencion = models.ForeignKey('Mantencion', models.DO_NOTHING, db_column='mantencion_id_mantencion', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'departamento'


class Empleado(models.Model):
    rut = models.CharField(primary_key=True, max_length=12)
    nombre = models.CharField(max_length=15)
    pellido_m = models.CharField(max_length=15)
    correo = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'empleado'


class Inventario(models.Model):
    id_inventario = models.IntegerField(primary_key=True)
    producto = models.CharField(max_length=15)
    valor = models.IntegerField()
    estado = models.BooleanField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol')
    cantidad = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'inventario'


class Login(models.Model):
    usuario = models.CharField(primary_key=True, max_length=20)
    password = models.CharField(max_length=20, blank=True, null=True)
    cliente_rut_pasaporte = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='cliente_rut_pasaporte')

    class Meta:
        managed = False
        db_table = 'login'


class Mantencion(models.Model):
    id_mantencion = models.IntegerField(primary_key=True)
    fecha_inicio = models.DateField()
    fecha_termino = models.DateField()
    observaciones = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'mantencion'


class Multas(models.Model):
    id_multas = models.IntegerField(primary_key=True)
    n_mutas_cobras = models.IntegerField()
    valor_multa = models.IntegerField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'multas'


class Pago(models.Model):
    fecha_pago = models.DateField()
    monto = models.BigIntegerField()
    tipo_operacion = models.CharField(max_length=10)
    descripcion_pago = models.CharField(max_length=10)
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol')
    reserva_id_reserva = models.IntegerField()
    id_pago = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'pago'


class Region(models.Model):
    n_region = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'region'


class Reserva(models.Model):
    id_reserva = models.IntegerField(primary_key=True)
    fecha_lelgada = models.DateField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol', blank=True, null=True)
    id_pago = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reserva'


class Servicio(models.Model):
    id_servicio = models.IntegerField(primary_key=True)
    nom_servicio = models.CharField(max_length=10)
    valor = models.IntegerField()
    vehiculo_patente = models.ForeignKey('Vehiculo', models.DO_NOTHING, db_column='vehiculo_patente', blank=True, null=True)
    contrado = models.BooleanField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'servicio'


class Tour(models.Model):
    id_tour = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=10)
    valor = models.IntegerField()
    comuna_id_comuna = models.ForeignKey(Comuna, models.DO_NOTHING, db_column='comuna_id_comuna')
    reserva_id_reserva = models.ForeignKey(Reserva, models.DO_NOTHING, db_column='reserva_id_reserva', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tour'


class Vehiculo(models.Model):
    patente = models.CharField(primary_key=True, max_length=6)
    capacidad = models.IntegerField()
    disponibilidad = models.IntegerField()
    chofer_rut = models.CharField(max_length=1)
    tour_id_tour = models.ForeignKey(Tour, models.DO_NOTHING, db_column='tour_id_tour', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vehiculo'
