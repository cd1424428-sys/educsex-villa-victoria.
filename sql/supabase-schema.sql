-- Habilitar extensión para UUIDs
create extension if not exists "uuid-ossp";

-- Tabla de Roles
create table roles (
    id serial primary key,
    nombre_rol varchar(50) not null 
);

-- Insertar roles base
insert into roles (nombre_rol) values ('Administrador'), ('Usuario');

-- Tabla de Usuarios
create table usuarios (
    id uuid default uuid_generate_v4() primary key,
    nombre varchar(100) not null,
    correo varchar(100) unique not null,
    rol_id int references roles(id) default 2,
    creado_en timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Tabla de Centros de Salud (Geolocalización Villa Victoria)
create table centros_salud (
    id serial primary key,
    nombre varchar(150) not null,
    municipio varchar(100) default 'Villa Victoria',
    direccion text not null,
    telefono varchar(20)
);

-- Tabla de Resultados de Cuestionarios
create table resultados_evaluacion (
    id serial primary key,
    usuario_id uuid references usuarios(id),
    puntaje int not null,
    total_preguntas int not null,
    fecha timestamp with time zone default timezone('utc'::text, now()) not null
);