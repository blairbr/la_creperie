const menu = [
    {
        "name": "Prosciutto & Gruyere",
        "category": "Savory Crepes",
        "description": "Melted gruyere cheese and dry-cured prosciutto topped with with Dijon mustard",
        "price": 6
    },
    {
        "name": "Bacon, Scallion & Mushroom",
        "category": "Savory Crepes",
        "description": "Sauteed scallions and mushrooms atop three generous bacon slices",
        "price": 7
    },
    {
        "name": "Norwegian",
        "category": "Savory Crepes",
        "description": "Lox, cream cheese, capers and fresh dill",
        "price": 8
    },
    {
        "name": "Banana Nutella",
        "category": "Sweet Crepes",
        "description": "Melted nutella and banana slices sprinkled with cinnamon sugar",
        "price": 6
    },
    {
        "name": "Strawberry & Brie",
        "category": "Sweet Crepes",
        "description": "Fresh macerated strawberries and melted brie",
        "price": 5
    },
    {
        "name": "Coffee",
        "category": "Drinks",
        "description": "Fresh roasted Arabica-bean coffee. Free refills.",
        "price": 2
    },
    {
        "name": "Orange Juice",
        "category": "Drinks",
        "description": "Fresh squeezed Florida orange juice.",
        "price": 2
    },
]

let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', ()=> {
        console.log("added to cart");
    })
}

cartItems = [];
