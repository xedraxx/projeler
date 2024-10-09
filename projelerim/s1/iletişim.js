emailjs.init('ujRYuFTf0_dGuVNYf'); 

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;
    const formResponse = document.getElementById('form-response');

    emailjs.sendForm('service_04lsksq', 'template_3oju4qz', form)
        .then(response => {
            console.log('Success:', response);
            formResponse.textContent = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz!';
            formResponse.style.color = 'green';
            form.reset(); 
        })
        .catch(error => {
            console.error('Error:', error);
            formResponse.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            formResponse.style.color = 'red';
        });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});