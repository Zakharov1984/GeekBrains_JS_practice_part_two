Vue.component('basket', {
    props: ['basketItems', 'img', 'visibility'],
    template:   `                
                <div class="basket-box" v-show="visibility">
                    <basket-item v-for="item of basketItems" :key="item.id_product" :id="item.id_product" img='img' :basketItem="item"></basket-item> 
                </div>
                `
})

Vue.component('basket-item', {
    props: ['basketItem', 'img'],
    template:   `                
                <div class="basket-item">
                    <div class="basket-item__left-block">
                        <img class="basket-item__image" :src="img">
                        <div class="basket-item__info-item">
                            <h3 class="basket-item__title">{{ basketItem.product_name }}</h3>
                            <p class="basket-item__price">$ {{ basketItem.price }} each</p>
                            <p class="basket-item__quantity">quantity: <span>{{ basketItem.quantity }}</span></p>
                        </div>
                    </div>
                    <div class="basket-item__right-block">
                        <div class="total-amount">{{ basketItem.quantity * basketItem.price }}</div>
                        <button class="del-item" @click="$root.remove(basketItem)"><i class="fas fa-times"></i></button>
                    </div>
                </div>
                `
})

















