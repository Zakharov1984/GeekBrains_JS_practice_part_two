class ProductList{
    constructor(container = '.products-block') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
        this.render(); // вывод товаров на страницу.
    }
    _fetchProducts() {
        this.goods = [
            {id: 1, title: 'картина', price: 300},
            {id: 2, title: 'рамка', price: 50},
            {id: 3, title: 'фотография', price: 100},
            {id: 4, title: 'шаблон', price: 150}
        ];
    }
    render() {
        let productsBlock = document.querySelector('.products-block');
        for (let product of this.goods) {
            let item = new ProductItem(product);
            productsBlock.insertAdjacentHTML('beforeend', item.renderItem());
        }

    }
    calcTotalSum() {
        let totalSum = 0;
        for (let product of this.goods) {
            totalSum = totalSum + product.price;        
        }
        console.log(totalSum);
    }
}

class ProductItem {
    constructor(product, img = 'image.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
        
    }
    renderItem() {
        return  `<div class="product-item">
                    <image class="product-item__image" src="${this.img}"></image>
                    <h3 class="product-item__title">${this.title}</h3>
                    <p class="product-item__price">${this.price}</p>
                    <button class="product-item__book">Заказать</button>
                </div>`
    }
}

class basketGoods{
    addedProduct() {

    }
    deleteProduct() {

    }
    
}

class elementBasketGoods{

}

let list = new ProductList();
console.log(list);
