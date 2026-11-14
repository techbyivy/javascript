let product={
    name:"Samsung Phone",
    Brand:"Samsung",
    Price:25000,
Quantity:10,
Category:"Electonics",
    InStock: true
}
console.log(product.name, product.Price);

product.Price= 23500;
console.log(product)

product.Quantity= 8;
console.log(product)

product.description="Product with 8GB Ram and 256 Storage capacity"
console.log(product)

product.supplier={
    Name: "Outbanks",
    Number:"0703946856",
}
//getProductDetails() method that returns a description of the product

product.getProductDetails= function(){
    return `${this.description}`;
};
console.log(product.getProductDetails());

//a for...in loop to display all properties
for (let key in product) {
  if (key === "supplier") {
    console.log("supplier name:", product.supplier.Name);
    console.log("supplier phone:", product.supplier.Number);
  } else if (typeof product[key] !== "function") {
    console.log(`${key}: ${product[key]}`);
  }
}
