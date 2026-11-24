// Función para simular el inicio de sesión
function login() {
    const inputVal = document.getElementById('userInput').value.trim().toLowerCase();
    
    if (inputVal === "") {
        alert("Por favor ingresa un usuario (admin o usuario).");
        return;
    }

    // Ocultar la pantalla de login y mostrar la app
    document.getElementById('loginSection').classList.add('hidden');
    document.getElementById('appSection').classList.remove('hidden');

    // Si escribieron 'admin', mostramos el panel de administración
    if (inputVal === 'admin') {
        document.getElementById('adminPanel').classList.remove('hidden');
    }
}

// Función para cerrar sesión y recargar
function logout() {
    location.reload();
}