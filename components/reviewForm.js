const reviewForm = {
    template: 
    /*html*/
    `
    <form class = "review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>

    <label for = "name">Name: </label>
    <input id="name" v-model="form.name">

    <label for="review">Review: </label>
    <textarea id="review" v-model="form.review"></textarea>

    <label for="rating">Rating: </label>
    <select id="rating" v-model.number="form.rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <br>
    <label>Would you recommend this product?</label>
    </br>
    <input type="checkbox" id="rec" v-model = "form.rec"></input>

    <input class="button" type="submit" value="Submit">
    </form> `,
    setup(props,{emit}) {
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            rec: false
        })
        function onSubmit(){
            if(form.name === '' || form.review === '' || form.rating === null){
                alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                return
            }
            const productReview = {
                name: form.name,
                review: form.review,
                rating: form.rating,
                rec: false
            }
            console.log(form);
            emit('review-submitted', productReview)
            form.name = ''
            form.review =''
            form.rating = null
            form.rec = false
        }
        return{
            form,
            onSubmit
        }

    }
}
