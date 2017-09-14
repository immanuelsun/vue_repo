new Vue({
    el: '#exercise',
    data: {
        value: 0
    },
    computed: {
        result: function(value) {
            return this.value == 37 ? 'We got it' : 'Try it again';
        }
    },
    watch: {
        result: function() {
            var vm = this;
            setTimeout(function() {
                vm.value = 0;
            }, 2000)
        }
    }
});