// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then((value) => {
        const {carts} = value;

        for (const cart of carts) {

            const divCart = document.createElement('div');

            const header = document.createElement('h2');
            header.textContent = `Картка № ${cart.id}`;

            const totalProducts = document.createElement('p');
            totalProducts.textContent = `Кількість продуктів: ${cart.totalProducts}`;

            const total = document.createElement('p');
            total.textContent = `Загальна вартість: $${cart.total}`;

            const quantity = document.createElement('p');
            quantity.textContent = `Кількість: ${cart.totalQuantity}`;

            const productsHeader = document.createElement('h3');
            productsHeader.textContent = 'Продукти:';

            const productList = document.createElement('ul');
            for (const product of cart.products) {
                const productItem = document.createElement('li');
                productItem.textContent = `${product.title} - $${product.price} (кількість: ${product.quantity})`;
                productList.appendChild(productItem);
            }
            divCart.append(header, totalProducts, total, quantity, productsHeader, productList);

            document.body.appendChild(divCart);
        }
    })