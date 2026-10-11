// Elementləri seçirik
const cardBtn = document.getElementById("cardBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");

// Səbət açılıb-bağlanma
cardBtn.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  cartOverlay.classList.add("active");
});

closeCartBtn.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});

cartOverlay.addEventListener("click", () => {
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});

// --- SƏBƏT VƏ HESABLAMA MƏNTİQİ ---
let cart = [];
let discountPercentage = 0;

const cartCountElement = document.getElementById("cardCount");
const cartBadgeCount = document.getElementById("cartBadgeCount");
const cartBody = document.getElementById("cartBody");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartDiscount = document.getElementById("cartDiscount");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const discountRow = document.getElementById("discountRow");
const addButtons = document.querySelectorAll(".product-add");

const applyPromoBtn = document.getElementById("applyPromoBtn");
const promoInput = document.getElementById("promoInput");
const promoMessage = document.getElementById("promoMessage");
const checkoutBtn = document.getElementById("checkoutBtn");

// Məhsul əlavə etmə
addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Əgər düymə disabled-dırsa (tükənibsə), heç nə etmə
    if (button.hasAttribute("disabled")) {
      return;
    }

    const productCard = button.closest(".products");
    const imgSrc = productCard.querySelector("img").src;
    const title = productCard.querySelector(".product-name").innerText;
    const priceText = productCard.querySelector(".product-price").innerText;
    const price = parseFloat(priceText) || 0;

    const existingItem = cart.find((item) => item.title === title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        title: title,
        price: price,
        img: imgSrc,
        quantity: 1,
      });
    }

    updateCartUI();
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
  });
});

// Promo kod yoxlaması
applyPromoBtn.addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();
  if (code === "SMART10") {
    discountPercentage = 10;
    promoMessage.innerText = "Təbriklər! 10% endirim tətbiq olundu.";
    promoMessage.className = "promo-msg success";
  } else {
    discountPercentage = 0;
    promoMessage.innerText = "Yanlış və ya etibarsız promo kod!";
    promoMessage.className = "promo-msg error";
  }
  updateCartUI();
});

// Səbət interfeysini yeniləyən funksiya
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElement.innerText = `(${totalCount})`;
  cartBadgeCount.innerText = `${totalCount} məhsul`;

  if (cart.length === 0) {
    cartBody.innerHTML = `<p class="empty-cart-text">Səbətiniz hələ ki boşdur.</p>`;
    cartSubtotal.innerText = `0 AZN`;
    cartTotalPrice.innerText = `0 AZN`;
    discountRow.style.display = "none";
    return;
  }

  let cartHtml = "";
  let subtotalSum = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    subtotalSum += itemTotal;

    cartHtml += `
            <div class="cart-item">
                <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="cart-item-price">${item.price} AZN</p>
                    <div class="cart-item-actions">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeItem(${index})">&times;</button>
            </div>
        `;
  });

  cartBody.innerHTML = cartHtml;
  cartSubtotal.innerText = `${subtotalSum} AZN`;

  let finalSum = subtotalSum;
  if (discountPercentage > 0) {
    const discountAmount = (subtotalSum * discountPercentage) / 100;
    cartDiscount.innerText = `-${discountAmount} AZN`;
    finalSum = subtotalSum - discountAmount;
    discountRow.style.display = "flex";
  } else {
    discountRow.style.display = "none";
  }

  cartTotalPrice.innerText = `${finalSum} AZN`;
}

window.increaseQuantity = function (index) {
  cart[index].quantity += 1;
  updateCartUI();
};

window.decreaseQuantity = function (index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }
  updateCartUI();
};

window.removeItem = function (index) {
  cart.splice(index, 1);
  updateCartUI();
};

// Sifarişi təsdiq et
checkoutBtn.addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim();
  const surname = document.getElementById("customerSurname").value.trim();

  if (cart.length === 0) {
    alert("Səbətiniz boşdur!");
    return;
  }
  if (!name || !surname) {
    alert("Zəhmət olmasa Ad və Soyadınızı daxil edin!");
    return;
  }

  alert(`Təşəkkürlər, ${name} ${surname}! Sifarişiniz uğurla qəbul olundu.`);
  cart = [];
  document.getElementById("customerName").value = "";
  document.getElementById("customerSurname").value = "";
  promoInput.value = "";
  discountPercentage = 0;
  promoMessage.innerText = "";
  updateCartUI();
  cartSidebar.classList.remove("active");
  cartOverlay.classList.remove("active");
});
