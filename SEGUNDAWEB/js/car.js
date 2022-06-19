const products = [
    {
        name: "Vino Tinto",
        image: "assets/jpg/imag1.jpg",
        price: 38000,
        quantity: 2
    },
    {
        name: "Vino Blanco",
        image: "assets/jpg/imag2.jpg",
        price: 40560,
        quantity: 1
    },
    {
        name: "Vino Rosado",
        image: "assets/jpg/imag3.jpg",
        price: 56560,
        quantity: 5
    }
]

products.reverse()



for (let product of products) {

    item = `
        <td>
            <img src=${product.image} width='150' height='150'>
        </td>
        <td>${product.name}</td>
        <td>$${product.price}</td>
        <td>${product.quantity}</td>
        <td>$${product.quantity*product.price}</td>
    
    `
    table = document.getElementById("products-table")
    row = table.insertRow(1)
    row.innerHTML = item   

}
