//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then((recipesObj) => {
        let {recipes} = recipesObj;
        for (let {name, ingredients, instructions} of recipes) {
            let divEl = document.createElement('div');
            let h1 = document.createElement('h1');
            h1.textContent = name;
            let p = document.createElement('p');
            p.textContent = ingredients;
            let ul = document.createElement('ul');
            for (const ingredient of ingredients) {
                let li = document.createElement('li');
                li.textContent = ingredients;
                ul.appendChild(li);
            }
            divEl.append(h1, p, ul);
            document.body.appendChild(divEl);
        }
    });