
document.addEventListener("DOMContentLoaded", function() {
    const app = new Vue({
      el: '#app',
      data: {
        faqList: [
          {
            id: 1,
            question: 'Soru 1',
            answer: 'Cevap 1',
            isOpen: false
          },
          {
            id: 2,
            question: 'Soru 2',
            answer: 'Cevap 2',
            isOpen: false
          },
          {
            id: 3,
            question: 'Soru 3',
            answer: 'Cevap 3',
            isOpen: false
          }
        ]
      },
      methods: {
        toggleAccordion(id) {
          this.faqList.forEach(faq => {
            if (faq.id === id) {
              faq.isOpen = !faq.isOpen;
            } else {
              faq.isOpen = false;
            }
          });
        }
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const appwatch = new Vue({
      el: '#app-watch',
      data: {
        currentTime: ''
      },
      mounted() {
        // Anlık saat güncellemesi için bir interval kullanıyoruz
        this.updateCurrentTime();
        setInterval(() => this.updateCurrentTime(), 1000);
      },
      methods: {
        updateCurrentTime() {
          const now = new Date();
          this.currentTime = now.toLocaleTimeString();
        }
      }
    });
  });