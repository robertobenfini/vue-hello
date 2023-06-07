const { createApp } = Vue;

createApp({
    data() {
        return {
            saluto: '<h1>Ciao</h1>'
        }
    },
}).mount('#app');