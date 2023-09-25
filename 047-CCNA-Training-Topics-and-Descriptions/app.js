// Vue ile sayfa içeriği oluşturuluyor
new Vue({
    el: '#app',
    data: {
        ccnaTopics: [
            {
                title: 'OSI Model',
                description: 'Layered approach to data transmission and the functions of each layer.',
                showDescription: false
            },
            {
                title: 'TCP/IP Protocol Suite',
                description: 'A set of protocols used for data transmission over the Internet.',
                showDescription: false
            },
            {
                title: 'Subnetting',
                description: 'Dividing and managing IP addresses into subnetworks.',
                showDescription: false
            },
            {
                title: 'Routing and Switching',
                description: 'Fundamentals of routing and switching in computer networks.',
                showDescription: false
            },
            {
                title: 'Network Security',
                description: 'Basic network security concepts and techniques.',
                showDescription: false
            },
            {
                title: 'Wireless Networking',
                description: 'Wireless network technologies and configurations.',
                showDescription: false
            },
            {
                title: 'IPv6',
                description: 'The next-generation Internet Protocol version 6.',
                showDescription: false
            },
            {
                title: 'Network Troubleshooting',
                description: 'Identifying and resolving network issues.',
                showDescription: false
            },
            {
                title: 'Network Management',
                description: 'Tools and techniques for network monitoring and management.',
                showDescription: false
            },
            {
                title: 'WAN Technologies',
                description: 'Wide Area Network (WAN) technologies and protocols.',
                showDescription: false
            }
        ]
    },
    methods: {
        toggleDescription(index) {
            this.ccnaTopics[index].showDescription = !this.ccnaTopics[index].showDescription;
        }
    }
});
