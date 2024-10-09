const products = [
    { id: 1, name: 'Powerslide', price: 7000, image: 'powerslide.jpg' },
    { id: 2, name: 'Seba FR1', price: 18500, image: 'seba.jpg' },
    { id: 3, name: 'mf500', price: 12000, image: 'mf500.jpg' },
    { id: 4, name: 'Loaded Tan Tien Longboard 99CM', price: 17700, image: 'koruma.jpg' },
    { id: 5, name: 'gang skateboard', price: 1800, image: 'skateboard.jpg' },
    { id: 6, name: 'penny Avusturalya pennyboard', price: 4400, image: 'pennyboard.jpg' },
    { id: 7, name: 'Roces M2 Agresif Paten', price: 13300, image: 'roces m2.jpg' }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');

        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}₺</p>
            <button onclick="addToCart(${product.id})">Sepete Ekle</button>
        `;

        productList.appendChild(productElement);
    });
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');

        cartItemElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}₺ x ${item.quantity}</p>
            <button onclick="removeFromCart(${item.id})">Sil</button>
        `;

        cartItems.appendChild(cartItemElement);

        total += product.price * item.quantity;
    });

    totalPrice.textContent = total;
}

function addToCart(id) {
  

    const cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ id: id, quantity: 1 });
    }

    displayCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    displayCart();
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.getElementById('menu-toggle');
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
