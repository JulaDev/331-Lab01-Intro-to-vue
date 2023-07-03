const { createApp, ref, computed } = Vue 

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('features to keep you warm in cold weather, or stylish socks for special occasions')
        //const image = ref('./assets/images/socks_green.jpg')
        const url = ref('http://www.camt.cmu.ac.th.')
        //const inStock = ref(true) // Change to false -> Cart = 0 and when out of stock don't click add to cart
        const inventory = ref(100)
        const sale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: ' ./assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: ' ./assets/images/socks_blue.jpg', quantity: 0}
        ])
        const selectedVariant = ref(0)

        function updateVariant(index){
            selectedVariant.value = index;
        }

        const sizes = ref([
            's','M','L'
        ])
        const cart = ref(0)

        function addToCart(){
            cart.value +=1
        }

        function updateImage(variantImage){
            image.value = variantImage
        }

        function toggleStockStatus() {
            inStock.value = !inStock.value
        }
        
        const title = computed(() =>{
            return brand.value + ' ' + product.value
        })

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        }) 

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })

        const onSale= ref(true); 

        const saleStatus = computed(() =>{
            if(onSale.value){
                return brand.value+ ' ' +product.value+ " is on sale";
            } else {
                return brand.value+ ' ' +product.value;
            }
        })

        return{
            //product, 
            //brand,
            title,
            description,
            image,
            url,
            inStock,
            inventory,
            sale,
            details,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleStockStatus,
            updateVariant,
            saleStatus
        }
    }

}) .mount('#app')