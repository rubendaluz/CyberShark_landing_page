document.addEventListener("DOMContentLoaded", function () {
    const pricingCards = document.querySelectorAll(".pricing-card");

    pricingCards.forEach(function (card) {
        card.addEventListener("mouseover", function () {
            pricingCards.forEach(function (otherCard) {
                otherCard.classList.remove("highlighted");
            });
            card.classList.add("highlighted");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("highlighted");
        });
    });    

    const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navbar-menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("open");
  });
})