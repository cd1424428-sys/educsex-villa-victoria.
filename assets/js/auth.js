const SUPABASE_URL = 'https://yyxpkfwbdzyhzluapgr.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_09TKqJdRwJAo4eut_oIn7A_ifiLwtT-';

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
        window.location.href = 'dashboard_usuario.html';
    }
});
