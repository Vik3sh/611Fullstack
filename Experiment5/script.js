const filterDropdown = document.getElementById("categoryFilter");
const products=document.querySelectorAll(".product");

filterDropdown.addEventListener("change",function(){
    const selectedCategory=filterDropdown.ariaValueMax;
    products.forEach(product=>{
        const productCategory = product.getAttribute("data-category");

        if(selectedCategory=== "All" || productCategory === selectedCategory){
            product.computedStyleMap.display="list-item";
        } else {
            product.computedStyleMap.display="none";
        }
    });
});