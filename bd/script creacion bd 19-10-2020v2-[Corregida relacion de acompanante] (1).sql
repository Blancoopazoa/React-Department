
-- Generado por Oracle SQL Developer Data Modeler 20.2.0.167.1538
--   en:        2020-10-19 19:58:27 CLST
--   sitio:      Oracle Database 11g
--   tipo:      Oracle Database 11g



DROP TABLE acompanante CASCADE CONSTRAINTS;

DROP TABLE check_in CASCADE CONSTRAINTS;

DROP TABLE check_out CASCADE CONSTRAINTS;

DROP TABLE chofer CASCADE CONSTRAINTS;

DROP TABLE cliente CASCADE CONSTRAINTS;

DROP TABLE comuna CASCADE CONSTRAINTS;

DROP TABLE departamento CASCADE CONSTRAINTS;

DROP TABLE empleado CASCADE CONSTRAINTS;

DROP TABLE inventario CASCADE CONSTRAINTS;

DROP TABLE login CASCADE CONSTRAINTS;

DROP TABLE mantencion CASCADE CONSTRAINTS;

DROP TABLE multas CASCADE CONSTRAINTS;

DROP TABLE pago CASCADE CONSTRAINTS;

DROP TABLE region CASCADE CONSTRAINTS;

DROP TABLE reserva CASCADE CONSTRAINTS;

DROP TABLE servicio CASCADE CONSTRAINTS;

DROP TABLE tour CASCADE CONSTRAINTS;

DROP TABLE vehiculo CASCADE CONSTRAINTS;

-------------------------------------------------------
DROP SEQUENCE SEQ_PAGO;

DROP SEQUENCE SEQ_RESERVA;

DROP SEQUENCE SEQ_PAGO_ID_PAGO;

--create sequence
  CREATE SEQUENCE  "SEQ_PAGO"  MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 50 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;

  CREATE SEQUENCE  "SEQ_RESERVA"  MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 50 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;
  
  CREATE SEQUENCE  "SEQ_PAGO_ID_PAGO"  MINVALUE 1 MAXVALUE 999999999999999999999999999 INCREMENT BY 1 START WITH 50 CACHE 20 ORDER  NOCYCLE  NOKEEP  NOSCALE  GLOBAL ;

-------------------------------------------------------

-- predefined type, no DDL - MDSYS.SDO_GEOMETRY

-- predefined type, no DDL - XMLTYPE

CREATE TABLE acompanante (
    rut_pasaporte       NVARCHAR2(15) NOT NULL,
    nombre              NVARCHAR2(30) NOT NULL,
    apellido_m          NVARCHAR2(30) NOT NULL,
    appelido_p          NVARCHAR2(30) NOT NULL,
    fecha_nacimiento    DATE NOT NULL,
    reserva_id_reserva  NUMBER(10)
);

COMMENT ON COLUMN acompanante.rut_pasaporte IS
    'numero identificador único del acompañante';

COMMENT ON COLUMN acompanante.nombre IS
    'Nombre del acompañante';

COMMENT ON COLUMN acompanante.apellido_m IS
    'apellido materno del acompañante';

COMMENT ON COLUMN acompanante.appelido_p IS
    'apellido paterno del acompañante';

COMMENT ON COLUMN acompanante.fecha_nacimiento IS
    'fecha de nacimiento del acompañante';

COMMENT ON COLUMN acompanante.reserva_id_reserva IS
    'id de la reserva';

ALTER TABLE acompanante ADD CONSTRAINT acompanante_pk PRIMARY KEY ( rut_pasaporte );

CREATE TABLE check_in (
    id_chek_in          NUMBER(10) NOT NULL,
    fecha_llegada       DATE NOT NULL,
    estado_hbitacion    NVARCHAR2(20) NOT NULL,
    departamento_n_rol  NVARCHAR2(11) NOT NULL,
    empleado_rut        NVARCHAR2(12) NOT NULL
);

COMMENT ON COLUMN check_in.id_chek_in IS
    'identificador único del chek-in';

COMMENT ON COLUMN check_in.fecha_llegada IS
    'fecha de llegada ';

COMMENT ON COLUMN check_in.estado_hbitacion IS
    'estado de la habitación ';

COMMENT ON COLUMN check_in.departamento_n_rol IS
    'rol del departamento ';

COMMENT ON COLUMN check_in.empleado_rut IS
    'rut del empelado';

ALTER TABLE check_in ADD CONSTRAINT check_in_pk PRIMARY KEY ( id_chek_in );

CREATE TABLE check_out (
    id_chek_out         NUMBER(10) NOT NULL,
    estado_entrega      NVARCHAR2(1) NOT NULL,
    empleado_rut        NVARCHAR2(12) NOT NULL,
    pago_id_pago        NUMBER(10) NOT NULL,
    departamento_n_rol  NVARCHAR2(11) NOT NULL
);

COMMENT ON COLUMN check_out.id_chek_out IS
    'numero único identificador';

COMMENT ON COLUMN check_out.estado_entrega IS
    'e=entregado, 0=NO entregado';

COMMENT ON COLUMN check_out.empleado_rut IS
    'rut del empleado que resibio el chek-out';

COMMENT ON COLUMN check_out.pago_id_pago IS
    'id de pago en caso de multa';

COMMENT ON COLUMN check_out.departamento_n_rol IS
    'numero del departamento';

CREATE UNIQUE INDEX check_out__idx ON
    check_out (
        pago_id_pago
    ASC );

ALTER TABLE check_out ADD CONSTRAINT check_out_pk PRIMARY KEY ( id_chek_out );

CREATE TABLE chofer (
    rut         NVARCHAR2(12) NOT NULL,
    nombre      NVARCHAR2(15) NOT NULL,
    apellido_m  NVARCHAR2(15) NOT NULL,
    apellido_p  NVARCHAR2(15) NOT NULL
);

COMMENT ON COLUMN chofer.rut IS
    'numero identificador único';

COMMENT ON COLUMN chofer.nombre IS
    'nombre del chofer';

COMMENT ON COLUMN chofer.apellido_m IS
    'apllido materno del chofer';

COMMENT ON COLUMN chofer.apellido_p IS
    'apellido paterno  del chofer
';

ALTER TABLE chofer ADD CONSTRAINT chofer_pk PRIMARY KEY ( rut );

CREATE TABLE cliente (
    rut_pasaporte  NVARCHAR2(20) NOT NULL,
    cel            NUMBER(15) NOT NULL,
    correo         NVARCHAR2(30) NOT NULL,
    nacimineto     DATE NOT NULL,
    nombre         NVARCHAR2(30) NOT NULL,
    apellido_m     NVARCHAR2(30) NOT NULL,
    apellido_p     NVARCHAR2(30) NOT NULL
);

COMMENT ON COLUMN cliente.rut_pasaporte IS
    'numero único identificador del cliente';

COMMENT ON COLUMN cliente.cel IS
    'numero celular del lciente';

COMMENT ON COLUMN cliente.correo IS
    'correo del cliente maximo 30 caracteres';

COMMENT ON COLUMN cliente.nacimineto IS
    'fecha de nacimiento del cliente';

COMMENT ON COLUMN cliente.nombre IS
    'nombre del cliente';

COMMENT ON COLUMN cliente.apellido_m IS
    'apellido materno del cliente';

COMMENT ON COLUMN cliente.apellido_p IS
    'apellido paterno del cliente';

ALTER TABLE cliente ADD CONSTRAINT cliente_pk PRIMARY KEY ( rut_pasaporte );

CREATE TABLE comuna (
    id_comuna        NUMBER(20) NOT NULL,
    nombre_comuna    NVARCHAR2(30) NOT NULL,
    region_n_region  NUMBER(10) NOT NULL
);

COMMENT ON COLUMN comuna.id_comuna IS
    'numero único identificador';

COMMENT ON COLUMN comuna.nombre_comuna IS
    'nombre  de la comuna';

ALTER TABLE comuna ADD CONSTRAINT comuna_pk PRIMARY KEY ( id_comuna );

CREATE TABLE departamento (
    n_rol             NVARCHAR2(11) NOT NULL,
    n_banos           NUMBER(2) NOT NULL,
    n_habitaciones    NUMBER(2) NOT NULL,
    desc_habitacion   NVARCHAR2(20) NOT NULL,
    precio_dia        NUMBER(15) NOT NULL,
    n_departameto     NUMBER(3) NOT NULL,
    comuna_id_comuna  NUMBER(20) NOT NULL
);

COMMENT ON COLUMN departamento.n_rol IS
    'numero de rol del departamento';

COMMENT ON COLUMN departamento.n_banos IS
    'numero de baños';

COMMENT ON COLUMN departamento.n_habitaciones IS
    'numero de habitaciones';

COMMENT ON COLUMN departamento.desc_habitacion IS
    'descripcion de habitaciones';

COMMENT ON COLUMN departamento.precio_dia IS
    'Precio por día del departamento';

COMMENT ON COLUMN departamento.n_departameto IS
    'numero de departamento.';

COMMENT ON COLUMN departamento.comuna_id_comuna IS
    'id de la comuna del departamento
';

ALTER TABLE departamento ADD CONSTRAINT departamento_pk PRIMARY KEY ( n_rol );

CREATE TABLE empleado (
    rut         NVARCHAR2(12) NOT NULL,
    nombre      NVARCHAR2(30) NOT NULL,
    apellido_p  NVARCHAR2(30) NOT NULL,
    correo      NVARCHAR2(30) NOT NULL
);

COMMENT ON COLUMN empleado.rut IS
    'numero único identificador';

COMMENT ON COLUMN empleado.nombre IS
    'nombre del empleado';

COMMENT ON COLUMN empleado.apellido_p IS
    'apellido paterno del empleado';

COMMENT ON COLUMN empleado.correo IS
    'correo de los empleados';

ALTER TABLE empleado ADD CONSTRAINT empleado_pk PRIMARY KEY ( rut );

CREATE TABLE inventario (
    id_inventario       NUMBER(10) NOT NULL,
    producto            NVARCHAR2(30) NOT NULL,
    valor               NUMBER(9) NOT NULL,
    estado              NUMBER(1) NOT NULL,
    departamento_n_rol  NVARCHAR2(11) NOT NULL,
    cantidad            NUMBER(2) NOT NULL
);

COMMENT ON COLUMN inventario.id_inventario IS
    'id del producto';

COMMENT ON COLUMN inventario.producto IS
    'nombre del producto';

COMMENT ON COLUMN inventario.valor IS
    'valor del producto';

COMMENT ON COLUMN inventario.estado IS
    '1: buen estado 0:mal estado remplasar ';

COMMENT ON COLUMN inventario.departamento_n_rol IS
    'rol del departamento';

COMMENT ON COLUMN inventario.cantidad IS
    'cantidad del producto';

ALTER TABLE inventario ADD CONSTRAINT inventario_pk PRIMARY KEY ( id_inventario );

CREATE TABLE login (
    usuario   NVARCHAR2(20) NOT NULL,
    password  NVARCHAR2(20) NOT NULL,
    rol       NVARCHAR2(20) NOT NULL
);

COMMENT ON COLUMN login.usuario IS
    'nombre de usuario único';

COMMENT ON COLUMN login.password IS
    'contraseña del usuario';

COMMENT ON COLUMN login.rol IS
    'cargo o rol del usuario';

ALTER TABLE login ADD CONSTRAINT login_pk PRIMARY KEY ( usuario );

CREATE TABLE mantencion (
    id_mantencion       NUMBER(10) NOT NULL,
    fecha_inicio        DATE NOT NULL,
    fecha_termino       DATE NOT NULL,
    observaciones       NVARCHAR2(40) NOT NULL,
    departamento_n_rol  NVARCHAR2(11)
);

COMMENT ON COLUMN mantencion.id_mantencion IS
    'numero único identificador';

COMMENT ON COLUMN mantencion.fecha_inicio IS
    'fecha inicio de la mantencion';

COMMENT ON COLUMN mantencion.fecha_termino IS
    'fecha de termino de la mantencion';

COMMENT ON COLUMN mantencion.observaciones IS
    'observaciones de la mantencion';

COMMENT ON COLUMN mantencion.departamento_n_rol IS
    'rol del departamento';

ALTER TABLE mantencion ADD CONSTRAINT mantencion_pk PRIMARY KEY ( id_mantencion );

CREATE TABLE multas (
    id_multas           NUMBER(10) NOT NULL,
    n_mutas_cobras      NUMBER(2) NOT NULL,
    valor_multa         NUMBER(7) NOT NULL,
    departamento_n_rol  NVARCHAR2(11),
    descripcion         NVARCHAR2(10) NOT NULL
);

COMMENT ON COLUMN multas.id_multas IS
    'id de la multa';

COMMENT ON COLUMN multas.n_mutas_cobras IS
    'numero de multas';

COMMENT ON COLUMN multas.valor_multa IS
    'valor de la multa';

COMMENT ON COLUMN multas.departamento_n_rol IS
    'rol de departamento';

COMMENT ON COLUMN multas.descripcion IS
    'descripcion de la multa';

ALTER TABLE multas ADD CONSTRAINT multas_pk PRIMARY KEY ( id_multas );

CREATE TABLE pago (
    fecha_pago          DATE NOT NULL,
    monto               NUMBER(15) NOT NULL,
    tipo_operacion      NVARCHAR2(30) NOT NULL,
    descripcion_pago    NVARCHAR2(30) NOT NULL,
    departamento_n_rol  NVARCHAR2(11),
    id_pago             NUMBER(10) DEFAULT SEQ_PAGO.NEXTVAL NOT NULL
);

COMMENT ON COLUMN pago.fecha_pago IS
    'fecha del pago';

COMMENT ON COLUMN pago.monto IS
    'monto del pago';

COMMENT ON COLUMN pago.tipo_operacion IS
    'tipo de operacion del pago para el pago (credito,devito,efectivo)';

COMMENT ON COLUMN pago.descripcion_pago IS
    'describe el pago';

COMMENT ON COLUMN pago.departamento_n_rol IS
    'rol del departamento';

COMMENT ON COLUMN pago.id_pago IS
    'numero identificador único para el pago';

-- Error - Index PAGO__IDX has no columns

ALTER TABLE pago ADD CONSTRAINT pago_pk PRIMARY KEY ( id_pago );

CREATE TABLE region (
    n_region  NUMBER(10) NOT NULL,
    nombre    NVARCHAR2(30) NOT NULL
);

COMMENT ON COLUMN region.n_region IS
    'numero de la region';

COMMENT ON COLUMN region.nombre IS
    'nombre de la region';

ALTER TABLE region ADD CONSTRAINT region_pk PRIMARY KEY ( n_region );

CREATE TABLE reserva (
    id_reserva             NUMBER(10) DEFAULT SEQ_RESERVA.NEXTVAL NOT NULL,
    fecha_llegada          DATE NOT NULL,
    departamento_n_rol     NVARCHAR2(11),
    pago_id_pago           NUMBER(10) DEFAULT SEQ_PAGO_ID_PAGO.NEXTVAL NOT NULL,
    cliente_rut_pasaporte  NVARCHAR2(20)
);

COMMENT ON COLUMN reserva.id_reserva IS
    'numero único identificador de la reserva';

COMMENT ON COLUMN reserva.fecha_llegada IS
    'Fecha inicio de la reserva';

COMMENT ON COLUMN reserva.departamento_n_rol IS
    'rol del departamento';

COMMENT ON COLUMN reserva.pago_id_pago IS
    'id del pago';

COMMENT ON COLUMN reserva.cliente_rut_pasaporte IS
    'rut  o psaporte del cliente
';

CREATE UNIQUE INDEX reserva__idx ON
    reserva (
        pago_id_pago
    ASC );

ALTER TABLE reserva ADD CONSTRAINT reserva_pk PRIMARY KEY ( id_reserva );

CREATE TABLE servicio (
    id_servicio         NUMBER(10) NOT NULL,
    nom_servicio        NVARCHAR2(30) NOT NULL,
    valor               NUMBER(7) NOT NULL,
    vehiculo_patente    NVARCHAR2(6) NOT NULL,
    contrado            NUMBER(1) NOT NULL,
    departamento_n_rol  NVARCHAR2(11)
);

COMMENT ON COLUMN servicio.id_servicio IS
    'numero único identificador';

COMMENT ON COLUMN servicio.nom_servicio IS
    'nombre del servicio';

COMMENT ON COLUMN servicio.valor IS
    'valor del servicio';

COMMENT ON COLUMN servicio.vehiculo_patente IS
    'patente asocioado al servicio si es que esta tiene asociado un vehiculo';

COMMENT ON COLUMN servicio.contrado IS
    '1= si contrato servicio 0= no contrato servicio';

COMMENT ON COLUMN servicio.departamento_n_rol IS
    'rol del departamento';

ALTER TABLE servicio ADD CONSTRAINT servicio_pk PRIMARY KEY ( id_servicio );

CREATE TABLE tour (
    id_tour             NUMBER(10) NOT NULL,
    nombre              NVARCHAR2(10) NOT NULL,
    valor               NUMBER(5) NOT NULL,
    comuna_id_comuna    NUMBER(20) NOT NULL,
    reserva_id_reserva  NUMBER(10)
);

COMMENT ON COLUMN tour.id_tour IS
    'numero identificador del tour';

COMMENT ON COLUMN tour.nombre IS
    'nombre del tour';

COMMENT ON COLUMN tour.valor IS
    'valor del tour';

ALTER TABLE tour ADD CONSTRAINT tour_pk PRIMARY KEY ( id_tour );

CREATE TABLE vehiculo (
    patente         NVARCHAR2(6) NOT NULL,
    capacidad       NUMBER(3) NOT NULL,
    disponibilidad  NUMBER(1) NOT NULL,
    tour_id_tour    NUMBER(10),
    chofer_rut      NVARCHAR2(12)
);

COMMENT ON COLUMN vehiculo.patente IS
    'Patente única del vehiculo';

COMMENT ON COLUMN vehiculo.capacidad IS
    'capacidad del vehiculo';

COMMENT ON COLUMN vehiculo.disponibilidad IS
    'disponibilidad del vehiculo 1= disoponible, 0 = NO disponible.';

COMMENT ON COLUMN vehiculo.tour_id_tour IS
    'id del tour ';

COMMENT ON COLUMN vehiculo.chofer_rut IS
    'rut del conductor';

ALTER TABLE vehiculo ADD CONSTRAINT vehiculo_pk PRIMARY KEY ( patente );

ALTER TABLE acompanante
    ADD CONSTRAINT acompanante_reserva_fk FOREIGN KEY ( reserva_id_reserva )
        REFERENCES reserva ( id_reserva );

ALTER TABLE check_in
    ADD CONSTRAINT check_in_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE check_in
    ADD CONSTRAINT check_in_empleado_fk FOREIGN KEY ( empleado_rut )
        REFERENCES empleado ( rut );

ALTER TABLE check_out
    ADD CONSTRAINT check_out_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE check_out
    ADD CONSTRAINT check_out_empleado_fk FOREIGN KEY ( empleado_rut )
        REFERENCES empleado ( rut );

ALTER TABLE check_out
    ADD CONSTRAINT check_out_pago_fk FOREIGN KEY ( pago_id_pago )
        REFERENCES pago ( id_pago );

ALTER TABLE comuna
    ADD CONSTRAINT comuna_region_fk FOREIGN KEY ( region_n_region )
        REFERENCES region ( n_region );

ALTER TABLE departamento
    ADD CONSTRAINT departamento_comuna_fk FOREIGN KEY ( comuna_id_comuna )
        REFERENCES comuna ( id_comuna );

ALTER TABLE inventario
    ADD CONSTRAINT inventario_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE mantencion
    ADD CONSTRAINT mantencion_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE multas
    ADD CONSTRAINT multas_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE pago
    ADD CONSTRAINT pago_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_cliente_fk FOREIGN KEY ( cliente_rut_pasaporte )
        REFERENCES cliente ( rut_pasaporte );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE reserva
    ADD CONSTRAINT reserva_pago_fk FOREIGN KEY ( pago_id_pago )
        REFERENCES pago ( id_pago );

ALTER TABLE servicio
    ADD CONSTRAINT servicio_departamento_fk FOREIGN KEY ( departamento_n_rol )
        REFERENCES departamento ( n_rol );

ALTER TABLE servicio
    ADD CONSTRAINT servicio_vehiculo_fk FOREIGN KEY ( vehiculo_patente )
        REFERENCES vehiculo ( patente );

ALTER TABLE tour
    ADD CONSTRAINT tour_comuna_fk FOREIGN KEY ( comuna_id_comuna )
        REFERENCES comuna ( id_comuna );

ALTER TABLE tour
    ADD CONSTRAINT tour_reserva_fk FOREIGN KEY ( reserva_id_reserva )
        REFERENCES reserva ( id_reserva );

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_chofer_fk FOREIGN KEY ( chofer_rut )
        REFERENCES chofer ( rut );

ALTER TABLE vehiculo
    ADD CONSTRAINT vehiculo_tour_fk FOREIGN KEY ( tour_id_tour )
        REFERENCES tour ( id_tour );



-- Informe de Resumen de Oracle SQL Developer Data Modeler: 
-- 
-- CREATE TABLE                            18
-- CREATE INDEX                             2
-- ALTER TABLE                             39
-- CREATE VIEW                              0
-- ALTER VIEW                               0
-- CREATE PACKAGE                           0
-- CREATE PACKAGE BODY                      0
-- CREATE PROCEDURE                         0
-- CREATE FUNCTION                          0
-- CREATE TRIGGER                           0
-- ALTER TRIGGER                            0
-- CREATE COLLECTION TYPE                   0
-- CREATE STRUCTURED TYPE                   0
-- CREATE STRUCTURED TYPE BODY              0
-- CREATE CLUSTER                           0
-- CREATE CONTEXT                           0
-- CREATE DATABASE                          0
-- CREATE DIMENSION                         0
-- CREATE DIRECTORY                         0
-- CREATE DISK GROUP                        0
-- CREATE ROLE                              0
-- CREATE ROLLBACK SEGMENT                  0
-- CREATE SEQUENCE                          0
-- CREATE MATERIALIZED VIEW                 0
-- CREATE MATERIALIZED VIEW LOG             0
-- CREATE SYNONYM                           0
-- CREATE TABLESPACE                        0
-- CREATE USER                              0
-- 
-- DROP TABLESPACE                          0
-- DROP DATABASE                            0
-- 
-- REDACTION POLICY                         0
-- 
-- ORDS DROP SCHEMA                         0
-- ORDS ENABLE SCHEMA                       0
-- ORDS ENABLE OBJECT                       0
-- 
-- ERRORS                                   1
-- WARNINGS                                 0
