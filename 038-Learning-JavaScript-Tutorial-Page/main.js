new Vue({
    el: '#app',
    data: {
        functions: [
            {
                name: 'indexOf',
                description: 'The indexOf() method returns the index of the first occurrence of a specified element within a string. If the element is not found, it returns -1.',
                example: 'const str = "Hello, World!";\nconst position = str.indexOf("World");\nconsole.log(position); // Result: 7'
            },
            {
                name: 'slice',
                description: 'The slice() method extracts a section of an array and returns a new array.',
                example: 'const fruits = ["apple", "pear", "cherry", "banana"];\nconst citrus = fruits.slice(1, 3);\nconsole.log(citrus); // Result: ["pear", "cherry"]'
            },
            {
                name: 'forEach',
                description: 'The forEach() method executes a provided function once for each array element.',
                example: 'const numbers = [1, 2, 3, 4, 5];\nnumbers.forEach(function(number) {\n    console.log(number);\n});'
            },
            {
                name: 'map',
                description: 'The map() method creates a new array by calling a provided function once for each array element.',
                example: 'const numbers = [1, 2, 3, 4, 5];\nconst squaredNumbers = numbers.map(function(number) {\n    return number * number;\n});\nconsole.log(squaredNumbers); // Result: [1, 4, 9, 16, 25]'
            },
            {
                name: 'filter',
                description: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
                example: 'const numbers = [1, 2, 3, 4, 5];\nconst evenNumbers = numbers.filter(function(number) {\n    return number % 2 === 0;\n});\nconsole.log(evenNumbers); // Result: [2, 4]'
            },
            {
                name: 'reduce',
                description: 'The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.',
                example: 'const numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce(function(total, number) {\n    return total + number;\n}, 0);\nconsole.log(sum); // Result: 15'
            },
            {
                name: 'push',
                description: 'The push() method adds one or more elements to the end of an array and returns the new length of the array.',
                example: 'const fruits = ["apple", "pear", "cherry"];\nfruits.push("banana");\nconsole.log(fruits); // Result: ["apple", "pear", "cherry", "banana"]'
            },
            {
                name: 'pop',
                description: 'The pop() method removes the last element from an array and returns that element.',
                example: 'const fruits = ["apple", "pear", "cherry"];\nconst removedFruit = fruits.pop();\nconsole.log(removedFruit); // Result: "cherry"'
            },
            {
                name: 'shift',
                description: 'The shift() method removes the first element from an array and returns that removed element.',
                example: 'const fruits = ["apple", "pear", "cherry"];\nconst removedFruit = fruits.shift();\nconsole.log(removedFruit); // Result: "apple"'
            }
        ],
        selectedFunction: { name: '', description: '' }
    },
    methods: {
        showFunction: function(func) {
            this.selectedFunction = func;
        }
    }
});