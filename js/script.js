let API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        catalogBasketUrl: '/getBasket.json',
        products: [],
        filtered: [],
        basketItems: [],
        imgCatalog: 'img/image.jpg',
        userSearch: '',
        show: false,
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(error))
        }, 
        getAddItemToCart(item) {
            this.getJson(API + '/addToBasket.json')
                .then(data => {
                    if (data.result === 1) {
                        let find = this.basketItems.find(el => el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({quantity: 1}, item);
                            this.basketItems.push(prod);
                        }
                    }
                })
        },
        filter() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        remove(item) {
            this.getJson(API + '/addToBasket.json')
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.basketItems.splice(this.basketItems.indexOf(item), 1);
                        }
                    }
                })
        }
    },
    mounted() {
        this.getJson(API + this.catalogUrl)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
                //this.products = data;
                //this.filtered = data;
            });
        this.getJson(API + this.catalogBasketUrl)
            .then(data => this.basketItems = data.contents);

    }
}) 























/* class ProductList{
    constructor(container = '.products-block') {
        this.container = container;
        this.goods = [];
        this.filtered = [];
        this._init();
        this._getProducts()
            .then(data => {
                this.goods = data;
                this.render();
            })
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let productsBlock = document.querySelector('.products-block');
        for (let product of this.goods) {
            let item = new ProductItem(product);
            productsBlock.insertAdjacentHTML('beforeend', item.renderItem());
        }

    }

    filter(value) {
        let regExp = new RegExp(value, 'i');
        this.filtered = this.goods.filter(item => regExp.test(item.product_name));
        this.goods.forEach(item => {
            let good = document.querySelector(`.product-item[id="${item.id_product}"]`);
            if(!this.filtered.includes(item)) {
                good.classList.add('invisible');
            } else {
                good.classList.remove('invisible');
            }
        })
    }
    calcTotalSum() {
        let totalSum = 0;
        for (let product of this.goods) {
            totalSum = totalSum + product.price;        
        }
        console.log(totalSum);
    }

    _init() {
        document.querySelector('.search-form').addEventListener('submit', element => {
            element.preventDefault();
            this.filter(document.querySelector('.search-fieled').value);
        })
    }
}

class ProductItem {
    constructor(product, img = 'image.jpg') {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
        
    }
    renderItem() {
        return  `<div class="product-item" id="${this.id}">
                    <image class="product-item__image" src="${this.img}"></image>
                    <h3 class="product-item__title">${this.product_name}</h3>
                    <p class="product-item__price">${this.price}</p>
                    <button class="product-item__book">Заказать</button>
                </div>`
    }
}

class BasketGoods{ -----------------------------------------------------------------------------------------------
    constructor(container = '.basket-box') {
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getProductsBasket()
            .then(data => {
                this.goods = data.contents;
                this.render();
            })
    }

    _getProductsBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        let productsBlock = document.querySelector('.basket-box');
        for (let product of this.goods) {
            let item = new ElementBasketGoods(product);
            productsBlock.insertAdjacentHTML('beforeend', item.renderItemBasket());
        }

    }
    _clickBasket() {
        document.querySelector('.header__basket-button').addEventListener('click', () => {
            document.querySelector(this.container).classList.toggle("invisible");
        });
    }
    addedProduct() {

    }
    deleteProduct() {

    }

    changeGoods() {

    }
    
}

class ElementBasketGoods{
    constructor(product, img = 'image.jpg') {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.quantity = product.quantity;
        this.img = img;
    }
    renderItemBasket() {
        return `<div class="basket-item " id="${this.id}">
                    <image class="basket-item__image" src="${this.img}"></image>
                    <div class="basket-item__info-item">
                        <h3 class="basket-item__title">${this.product_name}</h3>
                        <p class="basket-item__price">$${this.price} each</p>
                        <p class="basket-item__quantity">quantity: <span>${this.quantity}</span></p>
                    </div>
                </div>`
    }
}

let list = new ProductList();
console.log(list);
let basketList = new BasketGoods();
console.log(basketList);
 */