document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const username = form.username.value;
        const password = form.password.value;
     
        const storedUser = JSON.parse(localStorage.getItem('user')); 

        console.log("Girilen kullanıcı adı:", username);
        console.log("Girilen şifre:", password);

        if (storedUser && username === storedUser.username && password === storedUser.password) {
            messageDiv.textContent = 'Giriş başarılı! Yönlendiriliyorsunuz...';
            messageDiv.className = 'success'; 
            messageDiv.classList.remove('hidden'); 

            
            setTimeout(() => {
                window.location.href = 's1.html'; 
            }, 2000);
        } else {
            
            messageDiv.textContent = 'Kullanıcı adı veya şifre hatalı.';
            messageDiv.className = 'error'; 
            messageDiv.classList.remove('hidden'); 
        }
    });
});
