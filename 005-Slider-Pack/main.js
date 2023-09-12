
const app = new Vue({
    el: '#app',
    data: {
      slidePosition: 0,
      sliderItems: [
        "image.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg"
      ]
    },
    methods: {
      prevSlide() {
        if (this.slidePosition < 0) {
          this.slidePosition += window.innerWidth;
        }
      },
      nextSlide() {
        const sliderWidth = window.innerWidth * this.sliderItems.length;
        const maxPosition = -(sliderWidth - window.innerWidth);

        if (this.slidePosition > maxPosition) {
          this.slidePosition -= window.innerWidth;
        }
      }
    }
  });