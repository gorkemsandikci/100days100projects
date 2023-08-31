new Vue({
    el: '#app',
    data: {
      cars: [
        { name: 'Mercedes A-Class', price: 350, image: 'images/car1.jpg' },
        { name: 'BMW 3 Series', price: 400, image: 'images/car2.jpeg' },
        { name: 'Audi Q5', price: 450, image: 'images/car3.png' },
        { name: 'Tesla Model S', price: 500, image: 'images/car4.webp' },
        { name: 'Range Rover Evoque', price: 550, image: 'images/car5.jpeg' },
      ]
    },
    methods: {
      rentCar(index) {
        alert(`Car "${this.cars[index].name}" rented successfully!`);
      }
    }
  });