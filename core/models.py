# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Acompanante(models.Model):
    rut_pasaporte = models.CharField(primary_key=True, max_length=15)
    nombre = models.CharField(max_length=15)
    apellido_m = models.CharField(max_length=15)
    appelido_p = models.CharField(max_length=15)
    fecha_nacimiento = models.DateField()
    ##cliente_rut_pasaporte = models.ForeignKey('Cliente', models.DO_NOTHING, db_column='cliente_rut_pasaporte', blank=True, null=True)
    reserva_id_reserva = models.ForeignKey('Reserva', models.DO_NOTHING, db_column='reserva_id_reserva', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'acompanante'


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128, blank=True, null=True)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.BooleanField()
    username = models.CharField(unique=True, max_length=150, blank=True, null=True)
    first_name = models.CharField(max_length=150, blank=True, null=True)
    last_name = models.CharField(max_length=150, blank=True, null=True)
    email = models.CharField(max_length=254, blank=True, null=True)
    is_staff = models.BooleanField()
    is_active = models.BooleanField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class CheckIn(models.Model):
    id_chek_in = models.IntegerField(primary_key=True)
    fecha_llegada = models.DateField()
    estado_hbitacion = models.CharField(max_length=20)
    departamento_n_rol = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='departamento_n_rol')
    empleado_rut = models.ForeignKey('Empleado', models.DO_NOTHING, db_column='empleado_rut')

    class Meta:
        managed = False
        db_table = 'check_in'


class CheckOut(models.Model):
    id_chek_out = models.IntegerField(primary_key=True)
    estado_entrega = models.CharField(max_length=1)
    empleado_rut = models.ForeignKey('Empleado', models.DO_NOTHING, db_column='empleado_rut')
    pago_id_pago = models.ForeignKey('Pago', models.DO_NOTHING, db_column='pago_id_pago', blank=True, null=True)
    departamento_n_rol = models.ForeignKey('Departamento', models.DO_NOTHING, db_column='departamento_n_rol')

    class Meta:
        managed = False
        db_table = 'check_out'


class Chofer(models.Model):
    rut = models.CharField(primary_key=True, max_length=12)
    nombre = models.CharField(max_length=15)
    apellido_m = models.CharField(max_length=15)
    apellido_p = models.CharField(max_length=15)

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

    class Meta:
        managed = False
        db_table = 'cliente'


class Comuna(models.Model):
    id_comuna = models.BigIntegerField(primary_key=True)
    nombre_comuna = models.CharField(max_length=15)
    region_n_region = models.ForeignKey('Region', models.DO_NOTHING, db_column='region_n_region')

    class Meta:
        managed = False
        db_table = 'comuna'


class Departamento(models.Model):
    n_rol = models.CharField(primary_key=True, max_length=11)
    n_banos = models.IntegerField()
    n_habitaciones = models.IntegerField()
    desc_habitacion = models.CharField(max_length=20)
    precio_dia = models.BigIntegerField()
    n_departameto = models.IntegerField()
    comuna_id_comuna = models.ForeignKey(Comuna, models.DO_NOTHING, db_column='comuna_id_comuna')

    class Meta:
        managed = False
        db_table = 'departamento'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200, blank=True, null=True)
    action_flag = models.IntegerField()
    change_message = models.TextField(blank=True, null=True)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100, blank=True, null=True)
    model = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255, blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField(blank=True, null=True)
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Empleado(models.Model):
    #id = models.IntegerField(primary_key=True, max_length=12)
    rut = models.CharField (primary_key=True, max_length=12)
    nombre = models.CharField(max_length=15)
    apellido_p = models.CharField(max_length=15)
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
    password = models.CharField(max_length=20)
    rol = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'login'


class Mantencion(models.Model):
    id_mantencion = models.IntegerField(primary_key=True)
    fecha_inicio = models.DateField()
    fecha_termino = models.DateField()
    observaciones = models.CharField(max_length=100)
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'mantencion'


class Multas(models.Model):
    id_multas = models.IntegerField(primary_key=True)
    n_mutas_cobras = models.IntegerField()
    valor_multa = models.IntegerField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol', blank=True, null=True)
    descripcion = models.CharField(max_length=30)

    class Meta:
        managed = False
        db_table = 'multas'


class Pago(models.Model):
    fecha_pago = models.DateField(auto_now_add=True)
    monto = models.BigIntegerField()
    tipo_operacion = models.CharField(max_length=10)
    descripcion_pago = models.CharField(max_length=10)
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol')
    id_pago = models.AutoField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'pago'


class Region(models.Model):
    n_region = models.IntegerField(primary_key=True)
    nombre = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'region'


class Reserva(models.Model):
    id_reserva = models.AutoField(primary_key=True)
    fecha_llegada = models.DateField()
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol')
    ##pago_id_pago = models.ForeignKey(Pago, models.DO_NOTHING, db_column='pago_id_pago')
    pago_id_pago = Pago.id_pago
    cliente_rut_pasaporte = models.ForeignKey(Cliente, models.DO_NOTHING, db_column='cliente_rut_pasaporte', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'reserva'


class Servicio(models.Model):
    id_servicio = models.IntegerField(primary_key=True)
    nom_servicio = models.CharField(max_length=30)
    valor = models.IntegerField()
    vehiculo_patente = models.ForeignKey('Vehiculo', models.DO_NOTHING, db_column='vehiculo_patente', blank=True, null=True)
    departamento_n_rol = models.ForeignKey(Departamento, models.DO_NOTHING, db_column='departamento_n_rol')

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
    disponibilidad = models.BooleanField()
    tour_id_tour = models.ForeignKey(Tour, models.DO_NOTHING, db_column='tour_id_tour', blank=True, null=True)
    chofer_rut = models.ForeignKey(Chofer, models.DO_NOTHING, db_column='chofer_rut', blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'vehiculo'
