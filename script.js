console.log('JS OK');

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {
        tasks: [
            { text: 'Capire se ho capito', done: true, },
            { text: 'Controllare la propria sanità mentale', done: false, },
            { text: 'Usare meno il meme di pepe e i suoi derivati', done: false, },
            { text: 'Trattare meglio la paperella', done: false, },
            { text: 'Evitare attacchi di panico', done: false, },
        ],
    },

    methods: {

        removeTask(index) {
            this.tasks.splice(index, 1); // splice è un metodo che permette di eliminare elementi che ammette 2 parametri, il primo è il punto di partenza, il secondo deve indicare quanti elementi deve cancellare dal punto di partenza
        },
    },
});