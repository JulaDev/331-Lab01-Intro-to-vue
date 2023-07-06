const productDisplay = {
    
    template:
    /*html*/
    `
    <a href = "index.html"></a>

    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock}">
            </div>
        </div>

        <div class="product-info">
            <a :href="url"> <h1>{{title}}</h1> </a>
            <h2>{{description}}</h2>

            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>

            <p>Shipping: {{ shipping }}</p>

            <p v-if="sale">On Sale</p>
            <p v-else="sale">Out On Sale</p>

            <p>{{saleStatus}}</p>

            <ul>
                <li v-for="detail in details">{{detail}}</li>
            </ul>

            <div v-for="(variant,index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle"
            :style="{backgroundColor: variant.color }">
            </div>

            <div v-for="size in sizes"> {{size}} </div>

            <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            <button class="button" @click="toggleStockStatus">Toggle</button>
        </div>
    </div> 
    `,
    props:{
        premium: Boolean
    },
    setup(props,{emit}){
        const shipping = computed(() =>{
            if (props.premium){
                return 'Free'
            } else {
                return 30
            }
        })
        const product = ref('Boots')
        const brand = ref('SE 331')
        const description = ref('features to keep you warm in cold weather, or stylish socks for special occasions')
        //const image = ref('./assets/images/socks_green.jpg')
        const url = ref('http://www.camt.cmu.ac.th.')
        //const inStock = ref(true)
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
            emit('add-to-cart', variants.value[selectedVariant.value].id)
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
            saleStatus,
            shipping
        }

    }
}