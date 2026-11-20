
/* ============================
   LA FAMILAU FARMS
   WEBSITE FUNCTIONALITY
============================ */

// 1. FARM SETTINGS

const farm = {
  name: "LA FAMILIA FARMS",

  // Replace this with your WhatsApp number.
  // Nigerian format: 234 followed by your number.
  whatsapp: "2347061526161"
};


// 2. PRODUCT INFORMATION

const products = [
  {
    name: "Broiler Chickens",
    price: "Contact for price"
  },
  {
    name: "Layer Chickens",
    price: "Contact for price"
  },
  {
    name: "Fresh Eggs",
    price: "Contact for price"
  }
];


// 3. DISPLAY THE PRICE LIST

const priceList = document.getElementById("price-list");

if (priceList) {
  priceList.innerHTML = "";

  products.forEach(product => {

    const item = document.createElement("div");

    item.className = "product-card";

    const heading = document.createElement("h3");
    heading.textContent = product.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = product.price;

    const button = document.createElement("button");
    button.className = "order-btn";
    button.textContent = "Enquire Now";
    button.dataset.product = product.name;

    item.append(heading, price, button);

    priceList.appendChild(item);
  });
}


// 4. WHATSAPP ORDERING FUNCTION

/**
 * @param {string} productName
 */
function orderOnWhatsApp(productName) {

  const message =
    `Hello ${farm.name}, I am interested in ordering ${productName}. Please provide more information about availability and pricing.`;

  const whatsappURL =
    "https://wa.me/" +
    farm.whatsapp +
    "?text=" +
    encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}


// 5. CONNECT ALL ORDER BUTTONS

document.addEventListener("click", function(event) {

  const button = event.target.closest(".order-btn");

  if (!button) return;

  const productName = button.dataset.product;

  if (productName) {
    orderOnWhatsApp(productName);
  }

});


// 6. MAIN WHATSAPP CONTACT BUTTON

const whatsappLink =
  document.getElementById("whatsapp-link");

if (whatsappLink) {

  const message =
    "Hello LA FAMILIA FARMS, I would like to make an enquiry about your poultry products.";

  whatsappLink.href =
    "https://wa.me/" +
    farm.whatsapp +
    "?text=" +
    encodeURIComponent(message);

  whatsappLink.target = "_blank";

  whatsappLink.rel = "noopener noreferrer";
}


// 7. CUSTOMER REVIEWS

const reviewsContainer =
  document.getElementById("reviews-container");

if (reviewsContainer) {

  reviewsContainer.textContent =
    "Customer feedback will appear here. Check back soon!";

}


// 8. WEBSITE WELCOME MESSAGE

console.log("Welcome to LA FAMILIA FARMS!");

console.log("Website successfully loaded.");
