const app = new Vue({
    el: '#app',
    data: {
      text: ''
    },
    methods: {
      generatePDF() {
        const pdf = new jsPDF();
        pdf.text(this.text, 10, 10);
        pdf.save('output.pdf');
      }
    }
  });