document.getElementById('payment-form').addEventListener('submit', function(event) {
    
    const cardName = document.getElementById('card-name').value.trim();
    const amount = document.getElementById('amount').value.trim();
debugger
    const coupunName = document.getElementById("coupon");
   if(coupunName === true){
    debugger
   }

    
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');
    
    errorMessage.textContent = ''; 
    successMessage.textContent = ''; 
    const kupon = 3654856;
    
    
    if (!cardName || !amount) {
        errorMessage.textContent = 'Bu alan boş bırakılamaz.';
        event.preventDefault(); 
    } else {
        
        successMessage.textContent = 'Ödeme işleminiz başarılı! Bizi tercih ettiğiniz için teşekkür ederiz';

        
       setTimeout(() => {
                window.location.href = 'girişyap.html'; 
            }, 2000);
        }
});
