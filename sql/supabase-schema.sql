-- Creación de la tabla de usuarios para EducSex
CREATE TABLE IF NOT EXISTS usuarios (
    id SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL UNIQUE,
    rol VARCHAR(50) DEFAULT 'usuario', -- 'admin' o 'usuario'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Inserción de datos de prueba iniciales
INSERT INTO usuarios (nombre_usuario, rol) 
VALUES 
('admin', 'admin'),
('usuario', 'usuario')
ON CONFLICT (nombre_usuario) DO NOTHING;

-- Tabla para almacenar registros de interacción o resultados de tests
CREATE TABLE IF NOT EXISTS resultados_tests (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    puntaje INT NOT NULL,
    fecha TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);