// Configuracion de Supabase (Sustituye con tus credenciales de tu cuenta de Supabase)
const SUPABASE_URL = 'TUS_DATOS_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'TUS_DATOS_SUPABASE_ANON_KEY';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const { data, error } = await _supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        alert('Error al iniciar sesión: ' + error.message);
    } else {
        alert('¡Bienvenido a EducSex!');
        window.location.href = 'dashboard-usuario.html';
    }
});