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