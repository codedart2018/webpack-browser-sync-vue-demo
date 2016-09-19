//noinspection JSAnnotator
import Vue from 'vue';

var vm = new Vue({
    el: 'body',
    data: {
        message: "Hello Vue",
        newTodo: '',
        todos: [
            { text: 'php' },
            { text: 'mysql' }
        ],
        fontSize: 30,
        checked: false,
        checkedNames: []
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        },
        removeTodo: function (index) {
            this.todos.splice(index,1);
        },
        addTodo: function () {
            var text = this.newTodo.trim();
            if(text){
                this.todos.push({text: text});
                this.fullName = text;
                this.newTodo = '';
            }
        },
        greet: function (msg) {
            alert(this.message)
        }
    },
    created: function () {
        console.log('a is: '+this.message);
    },
    computed: {
        fullName: {
            get: function () {
                return this.message + ' ' + this.newTodo;
            },
            set: function (val) {
                var names = val.split(' ');
                this.message = names[0];
                this.newTodo = names[names.length - 1];
            }
        }
    }
});

vm.$watch('message', function (val) {
    //this.newTodo = this.newTodo + '---' + val;
    //console.log(this.newTodo);
})