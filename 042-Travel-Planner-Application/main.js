new Vue({
    el: '#app',
    data: {
      newTrip: {
        date: '',
        destination: '',
        notes: ''
      },
      trips: []
    },
    methods: {
      addTrip() {
        this.trips.push({
          date: this.newTrip.date,
          destination: this.newTrip.destination,
          notes: this.newTrip.notes
        });
        this.newTrip.date = '';
        this.newTrip.destination = '';
        this.newTrip.notes = '';
      }
    }
  });