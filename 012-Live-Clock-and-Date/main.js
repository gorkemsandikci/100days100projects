const app = new Vue({
    el: '#app',
    data: {
      currentTime: '',
      currentDate: ''
    },
    methods: {
      updateTime() {
        const now = new Date();
        this.currentTime = now.toLocaleTimeString();
        this.currentDate = now.toLocaleDateString();
      }
    },
    mounted() {
      this.updateTime();
      setInterval(this.updateTime, 1000);
    }
  });