new Vue({
    el: '#app',
    data: {
        newCategoryName: '',
        categories: [],
    },
    methods: {
        addCategory() {
            if (this.newCategoryName.trim() === '') return;
            this.categories.push({
                name: this.newCategoryName,
                subcategories: [],
            });
            this.newCategoryName = '';
        },
        removeCategory(index) {
            this.categories.splice(index, 1);
        },
        addSubcategory(parentIndex) {
            const categoryName = prompt('Subcategory Name:');
            if (categoryName) {
                this.categories[parentIndex].subcategories.push({
                    name: categoryName,
                });
            }
        },
        removeSubcategory(parentIndex, subIndex) {
            this.categories[parentIndex].subcategories.splice(subIndex, 1);
        },
    },
});