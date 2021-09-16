let productItems = [
    {title: 'картина', price: 300},
    {title: 'рамка', price: 50},
    {title: 'фотография', price: 100},
    {title: 'шаблон', price: 150}
];

/**
 * Функция возвращает верстку одного товара
 * @param {object} item 
 * @returns {string}
 */

function renderItem(item) {
    return  `<div class="product-item">
                <image class="product-item__image" src="image.jpg"></image>
                <h3 class="product-item__title">${item.title}</h3>
                <p class="product-item__price">${item.price}</p>
                <button class="product-item__book">Заказать</button>
            </div>`
}


/**
 * Функция генерирует верстку всех товаров и добавляет в блок products-block
 * @param {array} productItems 
 */
function renderAllItems(productItems) {
    let productsBlock = document.querySelector('.products-block');
    let ListItem = productItems.map(item => renderItem(item));
    ListItem = ListItem.join('');
    productsBlock.insertAdjacentHTML('afterbegin', ListItem);
}


renderAllItems(productItems);
