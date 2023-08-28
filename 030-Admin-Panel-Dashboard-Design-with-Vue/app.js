// app.js
new Vue({
    el: '#app',
    data: {
        navigationItems: [
            { id: 1, label: 'Dashboard' },
            { id: 2, label: 'Orders' },
            { id: 3, label: 'Products' },
            { id: 4, label: 'Customers' },
            { id: 5, label: 'Settings' }
        ],
        stats: {
            users: 1024,
            orders: 356,
            revenue: '$12456'
        },
        lastMessages: [
            { id: 1, text: 'Hello there! How can I help you?' },
            { id: 2, text: 'Your order #123 has been shipped.' },
            { id: 3, text: 'New product added: Smartphone X' }
        ]
    }
});
