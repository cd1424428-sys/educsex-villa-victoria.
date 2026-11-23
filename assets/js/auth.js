const SUPABASE_URL = 'https://yyxpkfwbdzyhzluapgr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl5eHBrdHdiZHp5cmxhenVhcGdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0Njg5NDEsImV4cCI6MjExMTA0NDk0MX0.cncetRwzI9gmqbwVh9UI8YvQII9Wj3OtYl4cz216jD8';

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