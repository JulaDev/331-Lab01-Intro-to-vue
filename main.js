const { createApp, ref } = Vue 

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('features to keep you warm in cold weather, or stylish socks for special occasions')
        const image = ref('./assets/images/socks_green.jpg')
        const url = ref('http://www.camt.cmu.ac.th.')
        const inStock = ref(true) // Change to false -> Cart = 0 
        const inventory = ref(100)
        const sale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: ' ./assets/images/socks_green.jpg'},
            { id: 2235, color: 'blue', image: ' ./assets/images/socks_blue.jpg'}
        ])
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
        
        return{
            product, 
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
            toggleStockStatus
        }
    }

}) .mount('#app')