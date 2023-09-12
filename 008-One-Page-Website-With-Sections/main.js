const app = new Vue({
    el: '#app',
    data: {
      isMobileNavOpen: false
    },
    methods: {
      scrollToSection(sectionId) {
        const el = document.getElementById(sectionId);
        const offset = el.getBoundingClientRect().top;
        window.scrollBy({
          top: offset,
          behavior: 'smooth'
        });
      },
      toggleMobileNav() {
        this.isMobileNavOpen = !this.isMobileNavOpen;
      }
    }
  });