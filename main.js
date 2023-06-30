const { createApp, ref } = Vue 

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('features to keep you warm in cold weather, or stylish socks for special occasions')
        const image = ref('./assets/images/socks_green.jpg')
        const url = ref('http://www.camt.cmu.ac.th.')
        const inStock = ref(false)
        return{
            product, 
            description,
            image,
            url,
            inStock
        }
    }

}) .mount('#app')