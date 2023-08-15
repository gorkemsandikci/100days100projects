var app = new Vue({
    el: '#app',
    data: {
      carPosition: 50,
      carPositionRed: 50, // Kırmızı aracın başlangıç pozisyonu
      circlePosition: 0, // Dairenin başlangıç pozisyonu
      circleHorizontalPosition: 30,
      roadWidth: 100,
      carWidth: 30,
      score: 0
    },
    created() {
      this.setupControls();
    },
    methods: {
      setupControls() {
        window.addEventListener('keydown', event => {
          if (event.key === 'ArrowLeft') {
            this.moveCar(-10);
          } else if (event.key === 'ArrowRight') {
            this.moveCar(10);
          } else if (event.key === 'a') {
            this.moveCarRed(-10);
          } else if (event.key === 'd') {
            this.moveCarRed(10);
          } else if (event.key === 'w') {
            this.moveCircle(-10);
          } else if (event.key === 's') {
            this.moveCircle(10);
          } else if (event.key === 'q') {
            this.moveCircleHorizontal();
          }
        });
      },
      moveCircleHorizontal() {
        const newPosition = this.circleHorizontalPosition === 30 ? 70 : 30;
        this.circleHorizontalPosition = newPosition;
      },
      moveCar(amount) {
        const newPosition = this.carPosition + amount;
        if (newPosition >= 0 && newPosition <= this.roadWidth - this.carWidth) {
          this.carPosition = newPosition;
        }
        this.score += 1;
      },
      moveCircle(amount) {
        const newPosition = this.circlePosition + amount;
        if (newPosition >= 0 && newPosition <= this.roadHeight - 30) {
          this.circlePosition = newPosition;
        }
      },
      moveCarRed(amount) {
        const newPosition = this.carPositionRed + amount;
        if (newPosition >= 0 && newPosition <= this.roadWidth - this.carWidth) {
          this.carPositionRed = newPosition;
        }
      }
    }
  });