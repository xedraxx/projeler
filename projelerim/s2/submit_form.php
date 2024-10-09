<?php
// Form verilerini al
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = htmlspecialchars($_POST['message']);

// E-posta ayarları
$to = 'umutyusuf190@icloud.com'; // Buraya kendi e-posta adresinizi girin
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// E-posta içeriği
$email_subject = "Yeni İletişim Formu Mesajı: $subject";
$email_body = "<h2>Yeni Mesaj Alındı</h2>
               <p><strong>Ad:</strong> $name</p>
               <p><strong>E-posta:</strong> $email</p>
               <p><strong>Konu:</strong> $subject</p>
               <p><strong>Mesaj:</strong><br>$message</p>";

// E-postayı gönder
if (mail($to, $email_subject, $email_body, $headers)) {
    echo "<h1>Mesajınız Gönderildi</h1><p>Teşekkür ederiz, mesajınız başarıyla gönderilmiştir.</p>";
} else {
    echo "<h1>Mesaj Gönderilemedi</h1><p>Üzgünüz, mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.</p>";
}
?>
