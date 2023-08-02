const app = new Vue({
    el: '#app',
    data: {
      isMobileNavOpen: false,
      isDarkMode: false
    },
    methods: {
      toggleMobileNav() {
        this.isMobileNavOpen = !this.isMobileNavOpen;
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      }
    }
  });