console.log('JS OK');

console.log('Vue ok', Vue);

Vue.config.devtools = true;

const root = new Vue({

    el: '#root',

    data: {
        userTask: '',   // Stringa che conterra la nuova task, inizialmente vuota
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

        changeDoneAttribute(index) {
            this.tasks[index].done = !this.tasks[index].done; //Trasforma questo oggetto nel contrario di se stesso (funziona se booleano)
        },

        addTask() {
            const userTask = this.userTask.trim() // Ricaviamo ciò che l'utente voleva aggiungere in una costante
            if (this.userTask) {

                this.tasks.push({ text: userTask, done: false }); // facciamo il push di cio che ci ha scritto l'utente (in questo caso ciò che ci scrive con l'imput)   

                this.userTask = '';
            }
        },
    },
});