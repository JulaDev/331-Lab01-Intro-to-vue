const { createApp, ref, computed } = Vue 
const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true) 
        // 9.9 change to be false -> shipping change
        function updateCart(id){
            cart.value.push(id)
        }
        return{ 
            cart,
            premium,
            updateCart
        }
    }

})
app.component('product-display',productDisplay)
app.component('product-details', productDetails)

app.mount('#app',{})
