
new Vue({
    el: '#app',
    data: {
      darkMode: false,
      quill: null,
    },
    mounted() {
      this.quill = new Quill('#editor', {
        theme: 'snow',
      });
    },
    methods: {
      toggleDarkMode() {
        document.body.style.backgroundColor = this.darkMode ? '#121212' : '#ffffff';
        document.body.style.color = this.darkMode ? '#ffffff' : 'orange';
      },
    },
  });