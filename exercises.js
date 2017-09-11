new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function() {
            alert('Hi, you are alerted!');
        },
        downValue: function(event) {
            this.value = event.target.value;
        },

    }
});