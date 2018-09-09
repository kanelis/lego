new Vue({
    el: '#app',
    data: {
        title: "Hello world",
        styleCSS: ''
    },
    methods:{
        changeText(){
            this.title='Какой либо новый текст'
        }
    }
});


new Vue({
    el:'#app1',
    data:{
        value: 1,
    },
    methods:{
        increment(value){
            this.value = value
            if (value == 25 ) 
                alert('Число 25')
        }
    },
    computed: {
        doubleValue(){
            return this.value * 2
        }
    } 
})

new Vue({
    el:'#app2',
    data: {
        show: false,
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "Audi", speed: 240.21},
            {model: "Mercedes-Benz AMG", speed: 350.4},
            {model: "Ford", speed: 160.5},
        ]
    }
    
})


