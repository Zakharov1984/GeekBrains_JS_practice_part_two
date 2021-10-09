Vue.component('goods', {
    props: ['goods', 'img'],
    template: `
                <section class="products-block center">
                    <good v-for="product of goods" :key="product.id_product" :img="img" :id="product.id_product" :good="product"></good>
                </section>
            `
});

Vue.component('good', {
    props: ['good', 'img'],
    template: `<div class="product-item">
                    <img class="product-item__image" :src="img">
                    <h3 class="product-item__title">{{ good.product_name }}</h3>
                    <p class="product-item__price">{{ good.price }}</p>
                    <button class="product-item__book" @click="$parent.$emit('add-product', good)">Заказать</button> 
                </div>`
});

// $root.getAddItemToCart(good)