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
      // Saati ve tarihi güncellemek için her saniye updateTime() metodunu çağırıyoruz.
      this.updateTime();
      setInterval(this.updateTime, 1000);
    }
  });