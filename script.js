// ===== 8.2: Basics =====

// 1. Constants
const shopName = "Kenneth's Tech Shop";
const currentYear = new Date().getFullYear();

// 2. Running total
let catalogTotal = 0;

// 3. Shop name into the header
const nameEl = document.getElementById('shop-name');
if (nameEl) {
  nameEl.textContent = shopName;
}

// 4. Dynamic copyright
const copyrightEl = document.getElementById('copyright');
if (copyrightEl) {
  copyrightEl.textContent = '© ' + currentYear + ' ' + shopName + '. All rights reserved.';
}

// Computed values: count products and add up their prices
const productCards = document.querySelectorAll('.product-card');
const productCount = productCards.length;

for (const card of productCards) {
  const priceText = card.querySelector('p').textContent;   // "Price: ₱1,499.00"
  const price = Number(priceText.replace(/[^0-9.]/g, ''));  // 1499
  catalogTotal = catalogTotal + price;
}

const countEl = document.getElementById('product-count');
if (countEl) {
  countEl.textContent = 'Products in stock: ' + productCount;
}

const totalEl = document.getElementById('catalog-total');
if (totalEl) {
  totalEl.textContent = 'Combined value of all products: ₱' +
    catalogTotal.toLocaleString('en-PH', { minimumFractionDigits: 2 });
}

// 5. Labelled console logs
console.log('shop name:', shopName);
console.log('current year:', currentYear);
console.log('product count:', productCount);
console.log('catalog total:', catalogTotal);

// ===== 8.4: Decisions =====

// Decision 1: stock status (if / else if / else), Mechanical Keyboard
const stockCount = 8;
let stockStatus;

if (stockCount > 10) {
  stockStatus = 'In stock';
} else if (stockCount >= 1) {
  stockStatus = 'Only a few left';
} else {
  stockStatus = 'Sold out';
}

const stockEl = document.getElementById('stock-status');
if (stockEl) {
  stockEl.textContent = 'Mechanical Keyboard: ' + stockStatus + ' (' + stockCount + ' units)';
}

// Decision 2: free delivery check (&& then ternary)
const orderTotal = 1499;
const isMember = true;
const qualifiesForFreeDelivery = orderTotal >= 1000 && isMember === true;
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryEl = document.getElementById('delivery-total');
if (deliveryEl) {
  deliveryEl.textContent = 'Order ₱' + orderTotal.toLocaleString('en-PH') +
    ' + delivery ₱' + deliveryFee + ' = Total ₱' + finalTotal.toLocaleString('en-PH');
}

// Decision 3: shop open or closed (boolean + ternary)
const isOpenToday = true;
const shopStatus = isOpenToday === true ? 'Open today' : 'Closed today';

const shopStatusEl = document.getElementById('shop-status');
if (shopStatusEl) {
  shopStatusEl.textContent = shopStatus;
}

console.log('stock status:', stockStatus);
console.log('final total:', finalTotal);
console.log('shop status:', shopStatus);