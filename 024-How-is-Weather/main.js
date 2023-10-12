new Vue({
    el: '#app',
    data: {
      weatherData: {},
      darkMode: true
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        const body = document.querySelector('body');
        body.style.backgroundColor = this.darkMode ? '#121212' : '#ffffff';
        body.style.color = this.darkMode ? '#ffffff' : '#000000';
      },
      async fetchWeatherData() {
        const apiKey = config.API_KEY;
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=istanbul&units=metric&appid=${apiKey}`);
        const data = await response.json();
        this.weatherData = data;
      }
    },
    created() {
      this.fetchWeatherData();
    }
  });