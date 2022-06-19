function captureData() {
    let product_name = document.getElementById("product_name").value
    let price = document.getElementById("price").value
    let inventary = document.getElementById("inventary").value
    document.getElementById("result-product").innerHTML = product_name
    document.getElementById("result-price").innerHTML = price
    document.getElementById("result-inventary").innerHTML = inventary    
}
