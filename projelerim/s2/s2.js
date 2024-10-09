// EmailJS ile e-posta göndermek için gerekli ayarları yapın
emailjs.init('ujRYuFTf0_dGuVNYf'); // EmailJS kullanıcı ID'nizi buraya ekleyin

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle

    const form = event.target;
    const formResponse = document.getElementById('form-response');

    emailjs.sendForm('service_04lsksq', 'template_3oju4qz', form)
        .then(response => {
            console.log('Success:', response);
            formResponse.textContent = 'Mesajınız başarıyla gönderildi. Teşekkür ederiz!';
            formResponse.style.color = 'green';
            form.reset(); // Formu sıfırla
        })
        .catch(error => {
            console.error('Error:', error);
            formResponse.textContent = 'Bir hata oluştu. Lütfen tekrar deneyin.';
            formResponse.style.color = 'red';
        });
});
