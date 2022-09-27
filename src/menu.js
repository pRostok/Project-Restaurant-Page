function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    const title = document.createElement('h3');
    title.textContent = 'Our Menu';

    const items = document.createElement('div');
    items.classList.add('menu__items');
    items.appendChild(createFoodItem('Pizza', '24', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Ricotta Pizza', '27', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Margherita Pizza', '31', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Havana Burger', '35', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('BBQ Burger', '24', 'smoked mozzarela, basil'));
    items.appendChild(createFoodItem('Vegan Burger', '35', 'smoked mozzarela, basil'));

    menu.appendChild(title);
    menu.appendChild(items);

    return menu;

}

function createFoodItem(name, p, d) {
    const item = document.createElement('div');
    item.classList.add('menu__item');

    const title = document.createElement('h5');
    title.textContent = name;
    const descr = document.createElement('p');
    descr.textContent = d;
    const price = document.createElement('p');
    price.textContent = p + " $";

    item.appendChild(title);
    item.appendChild(descr);
    item.appendChild(price);

    return item;
}

function loadMenu() {
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(createMenu());
}

export default loadMenu;
