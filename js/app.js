window.addEventListener("load", () =>
  document.querySelector(".preloader").classList.add("hidePreloader")
);

$(".owl-carousel").owlCarousel({
  autoplay: true,
  dots: false,
  nav: true,
  loop: true,
  navText: [
    '<i class="fa fa-angle-left"></i>',
    '<i class="fa fa-angle-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

const CreateCars = (() => {
  const cars = [];

  class Car {
    constructor(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      trans,
      horsep,
      gas
    ) {
      this.make = make;
      this.country = country;
      this.img = img;
      this.special = special;
      this.model = model;
      this.price = price;
      this.type = type;
      this.trans = trans;
      this.horsep = horsep;
      this.gas = gas;
    }
  }

  //function to create a car
  function makeCar(
    make,
    country,
    img,
    special = true,
    model,
    price,
    type,
    trans = "automatic",
    horsep,
    gas = 50
  ) {
    const car = new Car(
      make,
      country,
      img,
      special,
      model,
      price,
      type,
      trans,
      horsep,
      gas
    );
    cars.push(car);
  }
  function produceCars() {
    makeCar(
      "audi",
      "german",
      "https://rafaelacss21.github.io/legendarycars/img/german1.jpg",
      undefined,
      "R8 V20 Decade",
      "210,650",
      "coupe",
      undefined,
      562
    );
    makeCar(
      "ford",
      "american",
      "https://rafaelacss21.github.io/legendarycars/img/american1.jpg",
      false,
      "Explorer 2020",
      "38,000",
      "SUV",
      undefined,
      365
    );
    makeCar(
      "BMW",
      "german",
      "https://rafaelacss21.github.io/legendarycars/img/german2.jpg",
      undefined,
      "M850I",
      "131,400",
      "coupe",
      undefined,
      530
    );
    makeCar(
      "chevrolet",
      "american",
      "https://rafaelacss21.github.io/legendarycars/img/american2.jpg",
      false,
      "SILVERADO 1500 LT",
      "35,000",
      "truck",
      undefined,
      355
    );
    makeCar(
      "Mercedes-Benz",
      "german",
      "https://rafaelacss21.github.io/legendarycars/img/german3.jpg",
      undefined,
      "E400",
      "72,800",
      "coupe",
      undefined,
      328
    );
    makeCar(
      "RAM",
      "american",
      "https://rafaelacss21.github.io/legendarycars/img/american3.jpg",
      false,
      "1500 limited",
      "61,045",
      "truck",
      undefined,
      395
    );
    makeCar(
      "Volkwagen",
      "german",
      "https://rafaelacss21.github.io/legendarycars/img/german4.jpg",
      false,
      "Touareg",
      "51,630",
      "SUV",
      undefined,
      415
    );
    makeCar(
      "Chrysler",
      "american",
      "https://rafaelacss21.github.io/legendarycars/img/american4.jpg",
      false,
      "300",
      "42,700",
      "sedan",
      undefined,
      363
    );
    makeCar(
      "Porsche",
      "german",
      "https://rafaelacss21.github.io/legendarycars/img/german5.jpg",
      undefined,
      "911 GT3",
      "176,000",
      "coupe",
      undefined,
      475
    );
    makeCar(
      "Jeep",
      "american",
      "https://rafaelacss21.github.io/legendarycars/img/american5.jpg",
      undefined,
      "Compass",
      "44,000",
      "SUV",
      undefined,
      180
    );
  }
  produceCars();
  // console.log(cars);

  //special cars
  const specialCars = cars.filter(car => car.special === true);
  // console.log(specialCars);

  return {
    cars,
    specialCars
  };
})();

const DisplayCars = (CreateCars => {
  const cars = CreateCars.cars;
  // console.log(cars);

  const inventory = document.querySelector(".inventory-container");

  document.addEventListener("DOMContentLoaded", () => {
    inventory.innerHTML = "";

    let output = "";

    cars.forEach(car => {
      output += `
      <!-- single car -->
        <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${
          car.country
        }">
          <div class="card car-card">
            <img src=${car.img} class="card-img-top car-img" alt="" />
            <div class="card-body">
              <div class="car-info d-flex justify-content-between">
                <div class="car-text text-uppercase">
                  <h6 class="font-weight-bold">${car.make}</h6>
                  <h6>${car.model}</h6>
                </div>
                <h5 class="car-value align-self-center py-2 px-3">
                  C$ <span class="car-price">${car.price}</span></h5>
              </div>
            </div>
            <div class="card-footer text-capitalize d-flex justify-content-between">
              <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
                <p><span><i class="fas fa-horse-head"></i></span>${
                  car.horsep
                }</p>
                <p><span><i class="fas fa-gas-pump"></i></span>${car.gas}</p>
            </div>
          </div>
        </div>`;
    });
    inventory.innerHTML = output;
  });
})(CreateCars);

const DisplaySpecialCars = (CreateCars => {
  const specialCars = CreateCars.specialCars;
  // console.log(specialCars);

  const info = document.querySelector(".featured-info");

  document.addEventListener("DOMContentLoaded", () => {
    info.innerHTML = "";

    let data = "";

    specialCars.forEach(item => {
      data += `
      <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
        <span data-img="${
          item.img
        }" class="featured-icon mr-2"><i class="fas fa-car"></i></span>
        <h5 class="font-weight-bold mx-1">${item.make}</h5>
        <h5 class="mx-1">${item.model}</h5>
      </div>`;
    });
    info.innerHTML = data;
  });

  //change img when you click the car icon
  info.addEventListener("click", event => {
    // console.log(event.target);
    //make sure only display picture if you click in the car icon
    if (event.target.parentElement.classList.contains("featured-icon")) {
      //select the data-img on html through dataset.img
      const img = event.target.parentElement.dataset.img;
      // console.log(img);
      document.querySelector(".featured-photo").src = img;
    }
  });
})(CreateCars);

const FilterCars = (() => {
  const filter = document.querySelectorAll(".filter-btn");

  filter.forEach(btn => {
    btn.addEventListener("click", event => {
      const value = event.target.dataset.filter;
      // console.log(value);
      const singleCar = document.querySelectorAll(".single-car");
      // console.log(singleCar);
      singleCar.forEach(car => {
        if (value === "all") {
          car.style.display = "block";
        } else {
          !car.classList.contains(value)
            ? (car.style.display = "none")
            : (car.style.display = "block");
        }
      });
    });
  });
})();
