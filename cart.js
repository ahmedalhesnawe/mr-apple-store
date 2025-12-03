// مفتاح التخزين في localStorage
const CART_KEY = 'mrAppleCart';

// قراءة السلة من التخزين
function getCart() {
    try {
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (e) {
        return [];
    }
}

// حفظ السلة في التخزين
function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

// تحديث رقم السلة في الهيدر
function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

    const badge = document.getElementById('cartCount');
    if (!badge) return; // لو الصفحة ما بيها الهيدر

    if (totalQty > 0) {
        badge.style.display = 'inline-block';
        badge.textContent = totalQty;
    } else {
        badge.style.display = 'none';
    }
}

// إضافة منتج للسلة
function addToCart(product) {
    if (!product || !product.id) return;

    const cart = getCart();

    // نبحث عن نفس المنتج بنفس المواصفات
    const index = cart.findIndex(item =>
        item.id === product.id &&
        item.capacity === product.capacity &&
        (item.color || '') === (product.color || '') &&
        (item.chip || '') === (product.chip || '')
    );

    if (index > -1) {
        cart[index].qty = (cart[index].qty || 1) + 1;
    } else {
        product.qty = product.qty || 1;
        cart.push(product);
    }

    saveCart(cart);
    alert('تمت إضافة المنتج إلى السلة ✅');
}

// عند فتح أي صفحة فيها الهيدر، نحدّث عدد السلة
window.addEventListener('load', updateCartCount);
