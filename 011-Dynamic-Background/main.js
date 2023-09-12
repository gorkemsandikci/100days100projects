const app = new Vue({
    el: '#app',
    data: {
      bgColor: 'white'
    },
    methods: {
      changeBackgroundColor() {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.bgColor = randomColor;
      }
    }
  });