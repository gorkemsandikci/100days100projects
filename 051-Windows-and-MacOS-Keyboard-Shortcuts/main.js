new Vue({
    el: '#app',
    data: {
        shortcuts: [],
    },
    methods: {
        showWindowsShortcuts() {
            this.shortcuts = [
                { id: 1, key: "Ctrl + C", description: "Copy" },
                { id: 2, key: "Ctrl + V", description: "Paste" },
                { id: 3, key: "Ctrl + S", description: "Save" },
                { id: 4, key: "Ctrl + X", description: "Cut" },
                { id: 5, key: "Ctrl + Z", description: "Undo" },
                { id: 6, key: "Ctrl + Y", description: "Redo" },
            ];
        },
        showMacShortcuts() {
            this.shortcuts = [
                { id: 1, key: "Cmd + C", description: "Copy" },
                { id: 2, key: "Cmd + V", description: "Paste" },
                { id: 3, key: "Cmd + S", description: "Save" },
                { id: 4, key: "Cmd + X", description: "Cut" },
                { id: 5, key: "Cmd + Z", description: "Undo" },
                { id: 6, key: "Cmd + Y", description: "Redo" },
            ];
        },
    },
});