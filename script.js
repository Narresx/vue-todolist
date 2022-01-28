console.log('JS OK');

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {
        tasks: [
            { text: 'Capire se ho capito', done: false, },
            { text: 'Controllare la propria sanità mentale', done: false, },
            { text: 'Usare meno il meme di pepe e i suoi derivati', done: false, },
            { text: 'Trattare meglio la paperella', done: false, },
            { text: 'Evitare attacchi di panico', done: false, },
        ],
    }
});