const { createApp, ref, computed, reactive } = Vue 
const app = createApp({
    setup(){
        const cart = ref([])
        const premium = ref(true) 
        // 9.9 change to be false -> shipping change
        function updateCart(id){
            cart.value.push(id)
        }
        function removeCart(id){
            //cart.value = []
            //console.log(cart.value)
            cart.value.pop(id)
        }
        return{ 
            cart,
            premium,
            updateCart,
            removeCart
        }
    }

})
app.component('product-display',productDisplay)
app.component('product-details', productDetails)
app.component('review-form', reviewForm)
app.component('review-list' , reviewList)

app.mount('#app')
