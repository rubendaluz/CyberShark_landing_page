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
})