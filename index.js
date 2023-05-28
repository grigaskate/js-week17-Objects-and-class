//Практическое задание 1
class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.rate * this.days;
  }
}
//Проверка работы класса Worker
var worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//Практическое задание 2

//Массив data с данными о транспорте, которые нужно вывести на сайт
const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image:
      "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image:
      "https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png",
  },
];

//класс Transport
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return `
    Brand: ${this.brand}`;
  }
  getPrice() {
    return `Price: ${this.price} руб.`;
  }
}

//наследуемый класс Car от класса Transport
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }

  getDoorsCount() {
    return `Count of doors: ${this.doors}`;
  }
}

//наследуемый класс Bike от класса Transport
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return `Max speed of bike: ${this.maxSpeed} км/ч`;
  }
}

//Создаем главный контейнер
const transportInfo = document.querySelector(".transportInfo");

//Проводим массив data через функцию forEach
data.forEach((item) => {
  let transport;
  if (item.type === "car") {
    transport = new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === "bike") {
    transport = new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }

  //создаем контейнер для карточки о транспорте
  const card = document.createElement("div");
  card.className = "card__transport";

  //создаем контейнер бренда транспорта
  const brand = document.createElement("p");
  brand.className = "brand__transport";
  brand.textContent = transport.getInfo();
  card.appendChild(brand);

  //создаем контейнер для цены транспорта
  const price = document.createElement("p");
  price.className = "price__transport";
  price.textContent = transport.getPrice();
  card.appendChild(price);

  // Проверяем тип транспортного средства
  if (transport instanceof Car) {
    // Для автомобилей добавляем элемент p для отображения количества дверей
    const doorsCount = document.createElement("p");
    doorsCount.textContent = transport.getDoorsCount();
    card.appendChild(doorsCount);
  } else if (transport instanceof Bike) {
    // Для мотоциклов добавляем элемент p для отображения максимальной скорости
    const maxSpeed = document.createElement("p");
    maxSpeed.textContent = transport.getMaxSpeed();
    card.appendChild(maxSpeed);
  }

  //контейнер для изображения транспорта
  const image = document.createElement("img");
  image.className = "image__transport";
  image.src = item.image;
  card.appendChild(image);

  // Добавляем карточку транспорта в контейнер transportInfo
  transportInfo.appendChild(card);
});
