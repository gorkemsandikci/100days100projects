new Vue({
    el: '#app',
    data: {
        movies: [
            { "title": "Inception", "rating": 8.8 },
            { "title": "The Shawshank Redemption", "rating": 9.3 },
            { "title": "The Dark Knight", "rating": 9.0 },
            { "title": "Pulp Fiction", "rating": 8.9 },
            { "title": "Fight Club", "rating": 8.8 },
            { "title": "Forrest Gump", "rating": 8.8 },
            { "title": "The Matrix", "rating": 8.7 },
            { "title": "The Godfather", "rating": 9.2 },
            { "title": "The Lord of the Rings: The Fellowship of the Ring", "rating": 8.8 },
            { "title": "The Social Network", "rating": 7.7 }
        ],
        dragIndex: -1
    },
    methods: {
        startDrag(index) {
            this.dragIndex = index;
        },
        stopDrag() {
            // Burada herhangi bir işlem yapmamıza gerek yok.
        },
        dropHandler(event) {
            event.preventDefault();

            if (this.dragIndex !== -1) {
                const draggingItem = this.movies[this.dragIndex];

                // Dragging item'i hedef konumuna yerleştirme
                this.movies.splice(this.dragIndex, 1);

                // drop olayının çalıştığı li elemanını bulma
                const dropIndex = this.findIndexFromEvent(event);

                // Hedef konumuna yerleştirme
                this.movies.splice(dropIndex, 0, draggingItem);
                
                // Sürükleme bitince dragIndex'i sıfırla
                this.dragIndex = -1;
            }
        },
        findIndexFromEvent(event) {
            // drop olayının çalıştığı li elemanını bulma
            let target = event.target;
            while (target.tagName !== 'LI') {
                target = target.parentNode;
            }

            return Array.from(target.parentNode.children).indexOf(target);
        }
    }
});