let app = new Vue({
    el: '#app',
    data: {
        title : 'Hello Vue',
        paragraph : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi necessitatibus, aut, accusantium debitis ducimus voluptatibus molestiae dicta omnis iusto, vel distinctio culpa. Similique, perspiciatis vitae quisquam illum delectus incidunt vel.',
        fruits: [
            // {name: "Pear", qty: 10},
            // {name: "Apple", qty: 5},
            // {name: "Grape", qty: 4},
            // {name: "Mango", qty: 0},
        ],
        newFruit: ''
    },
    methods: {
        addFruit() {
            //ignore empty field
            if(this.newFruit == ""){
                return
            }
            
            exists = false

            this.fruits.forEach(fruit => {
                if (this.newFruit.toUpperCase() == fruit.name.toUpperCase()) {
                    //ignore listed fruits
                    alert(`This fruit >>${fruit.name}<< was already registered in the list`)
                    exists = true
                }
            });

            if (exists == false) {
                // start capitalize the name
                temp = this.newFruit
                temp = temp.charAt(0).toUpperCase() + temp.slice(1)
                // end capitalize the name
                this.fruits.push({
                    name: temp,
                    // as default must be 0 to avoid undefined values
                    qty: 0
                })
            }

            // clean the field
            this.newFruit = ""
        },

        filterText($event) {
            // 48 = '0'  and 57 = '9' in ASCII code
            if($event.charCode >= 48 && $event.charCode <= 58)
            {
                //ignore numbers
                console.log("not valid");
                $event.preventDefault();
                return
            }
        },

        incrementQty(fruit) {
            fruit.qty++
        },
        
        decrementQty(fruit) {
            //ignore negative numbers
            if(fruit.qty == 0) return
            fruit.qty--
        }
    }
})