new Vue({
    el: '#app',
    data: {
        formData: {
            fullName: '',
            email: '',
            date: '',
            time: ''
        },
        isFormSubmitted: false,
        reservedTimes: [], // Initialized as empty
        availableTimes: []
    },
    methods: {
        submitForm() {
            // Form submission actions can be performed here (e.g., API call)
            // For now, we'll just show a message.
            this.isFormSubmitted = true;
            // Add the created reservation to the list of reservations
            this.reservedTimes.push(this.formData.time);
        },
        updateAvailableTimes() {
            // This method updates the available times based on the selected date
            // For example, let's assume that the hours between 09:00 and 17:00 are available every day
            const startHour = 9; // Start from 9 AM
            const endHour = 17; // Until 5 PM
            const interval = 30; // In half-hour intervals

            const selectedDate = new Date(this.formData.date);
            const selectedDayOfWeek = selectedDate.getDay(); // Get which day of the week is selected

            const availableTimes = [];
            for (let hour = startHour; hour < endHour; hour++) {
                for (let minute = 0; minute < 60; minute += interval) {
                    const formattedHour = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                    const isDisabled = this.reservedTimes.includes(formattedHour);
                    availableTimes.push({label: formattedHour, value: formattedHour, disabled: isDisabled});
                }
            }

            this.availableTimes = availableTimes;
        },
        selectTime(time) {
            if (!this.reservedTimes.includes(time)) {
                this.formData.time = this.formData.time === time ? '' : time;
            }
        }
    }
});