// مفتاح التخزين في LocalStorage
const CART_KEY = 'mrAppleCart';

// قراءة السلة من LocalStorage
function getCart() {
    const raw = localStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
}

// حفظ السلة
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// عدد العناصر
function getCartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
}

// تحديث عداد السلة في الهيدر
function updateCartCountBadge() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const count = getCartCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
}

// تنسيق السعر
function formatIQD(amount) {
    return amount.toLocaleString('de-DE') + ' IQD';
}

// إضافة للسلة
function addToCart(product) {
    const cart = getCart();

    const index = cart.findIndex(item =>
        item.id === product.id &&
        item.capacity === product.capacity &&
        item.color === product.color
    );

    if (index !== -1) {
        cart[index].qty += 1;
    } else {
        cart.push({
            ...product,
            qty: 1
        });
    }

    saveCart(cart);
    updateCartCountBadge();
    alert('تمت الإضافة إلى السلة! 🛒');
}

// مسح السلة
function clearCart() {
    saveCart([]);
    updateCartCountBadge();
}

// جعل الدوال متاحة
window.getCart = getCart;
window.saveCart = saveCart;
window.addToCart = addToCart;
window.clearCart = clearCart;
window.updateCartCountBadge = updateCartCountBadge;
window.formatIQD = formatIQD;

document.addEventListener('DOMContentLoaded', updateCartCountBadge);
