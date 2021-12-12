let cards = document.querySelectorAll(".card .card-body .card-btn .my-2-plus");

for (card of cards) {
  card.addEventListener("click", (event) => {
    event.stopPropagation();

    event.target.parentNode.classList.toggle("not-added-to-cart");
    event.target.parentNode.classList.toggle("added-to-cart");
  });
}

const cardBtns = document.querySelectorAll(".card .card-body .card-btn");

for (cardBtn of cardBtns) {
  const minusBtn = cardBtn.querySelector(".minus");
  const plusBtn = cardBtn.querySelector(".my-plus");
  const counter = cardBtn.querySelector(".cart-count span");

  minusBtn.addEventListener("click", (event) => {
    if (counter.innerHTML == 1) {
      event.target.parentNode.parentNode.classList.toggle("my-btn-transition");
      setTimeout(() => {
        event.target.parentNode.parentNode.classList.toggle(
          "not-added-to-cart"
        );
        event.target.parentNode.parentNode.classList.toggle(
          "my-btn-transition"
        );
        event.target.parentNode.parentNode.classList.toggle("added-to-cart");
      }, 350);
    } else {
      counter.innerHTML -= 1;
    }
  });

  plusBtn.addEventListener("click", (event) => {
    counter.innerHTML = Number(counter.innerHTML) + 1;
  });
}
