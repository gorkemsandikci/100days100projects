new Vue({
    el: '#app',
    data: {
      name: '',
      age: null,
      favoriteLanguage: 'JavaScript',
      submitted: false
    },
    methods: {
      submitSurvey() {
        this.submitted = true;
      }
    }
  });