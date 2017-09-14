new Vue({
    el: '#exercise',
    data: {
        myClass: true
    },
    methods: {
        startEffect: function() {
            setTimeout(function() {
                this.myClass = true ? myClass = 'highlight' : myClass = 'shrink';
            }, 3000);
        }
    }
});