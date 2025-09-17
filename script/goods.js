const goodFunc = () => {
  const container = document.querySelector("#goods-container");

  const goodArray = [
    {
      id: 0,
      title: "Ролл угорь стандарт",
      desc: "Рис, угорь, соус унаги, кунжут, водоросли нори.",
      price: 250,
      image: "good-1.jpg",
    },
		{
      id: 1,
      title: "Калифорния лосось стандарт",
      desc: "Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.",
      price: 395,
      image: "good-2.jpg",
    },
		{
      id: 2,
      title: "Окинава стандарт",
      desc: " Рис, креветка отварная, сыр сливочный, лосось, огурец свежий.",
      price: 250,
      image: "good-3.jpg",
    },
		{
      id: 3,
      title: "Цезарь маки хl",
      desc: "Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь.",
      price: 250,
      image: "good-4.jpg",
    },
		{
      id: 4,
      title: "Ясай маки стандарт 185 г",
      desc: "Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг.",
      price: 250,
      image: "good-5.jpg",
    },
		{
      id: 5,
      title: "Ролл с креветкой стандарт",
      desc: "Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы.",
      price: 250,
      image: "good-6.jpg",
    },
  ];

  const loading = () => {
    container.innerHTML =
      '<p style="width: 100%; text-align: center;">Загрузка</p>';
  };

  const renderGoods = (array) => {
    container.innerHTML = "";

    array.forEach((card) => {
      container.insertAdjacentHTML(
        "beforeend",
        `
					<div class="products-card">
								<div class="products-card__image">
									<img src="./images/goods/${card.image}" alt="${card.image}">
								</div>
								<div class="products-card__description">
									<div class="products-card__description-row">
										<h5 class="products-card__description--name">
											${card.title}
										</h5>
									</div>

									<div class="products-card__description-row">
										<p class="products-card__description--text">
											${card.desc}
										</p>
									</div>

									<div class="products-card__description-row">
										<div class="products-card__description-controls">
											<button class="btn btn-primary">
												В корзину
												<img src="./images/icons/shopping-cart-white.svg" alt="shopping-cart-white" />
											</button>
											<span class="products-card__description-controls--price">
												${card.price} ₽
											</span>
										</div>
									</div>
								</div>
							</div>
				`
      );
    });
  };

  if (container) {
    loading();

    setTimeout(() => {
      renderGoods(goodArray);
    }, 1000);
  }
};

goodFunc();
