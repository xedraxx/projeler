document.getElementById('payment-form').addEventListener('submit', function(event) {
    const cardName = document.getElementById('card-name').value.trim();
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const amount = document.getElementById('amount').value.trim();

    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    errorMessage.textContent = ''; 
    successMessage.textContent = '';

    if (!cardName || !cardNumber || !expiryDate || !cvv || !amount) {
        errorMessage.textContent = 'Lütfen tüm alanları doldurun.';
        event.preventDefault(); 
    } else if (cardNumber.length !== 16) {
        errorMessage.textContent = 'Kart numarası 16 haneli olmalıdır.';
        event.preventDefault(); 
    } else if (cvv.length !== 3) {
        errorMessage.textContent = 'CVV 3 haneli olmalıdır.';
        event.preventDefault(); 
    } else {
        successMessage.textContent = 'Ödeme işleminiz başarılı! Bizi tercih ettiğiniz için teşekkür ederiz';

        setTimeout(function() {
            window.location.href = 's1.html';
        }, 2000); 
    }
});
