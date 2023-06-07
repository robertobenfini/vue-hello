const { createApp } = Vue;

createApp({
    data() {
        return {
            saluto: '<h1>Ciao</h1>',
            image: 'https://picsum.photos/200/300'
        }
    },
}).mount('#app');