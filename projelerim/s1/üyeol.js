document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        localStorage.setItem('user', JSON.stringify({ username, email, password }));

        if (username && email && password) {
            localStorage.setItem('user', JSON.stringify({ username, email, password }));
            messageDiv.textContent = 'Kayıt başarılı! Yönlendiriliyorsunuz...';
            messageDiv.className = 'success';
            messageDiv.classList.remove('hidden');

            setTimeout(() => {
                window.location.href = 'girişyap.html'; 
            }, 2000);
        } else {
            messageDiv.textContent = 'Lütfen tüm alanları doldurduğunuzdan emin olun.';
            messageDiv.className = 'error';
            messageDiv.classList.remove('hidden');
        }
    });
});
