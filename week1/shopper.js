var shopper = {
    store:  "JB's Grocery Mart",
    product1: "Waygu Ribeye",
    department1: "Meat",
    barcode1: 8948430,
    price1: 139.47,
    product2: "Cremini Mushrooms",
    department2: "Product",
    barcode2: 1403732,
    price2: 4.49,
    product3: "Shrimp 21/25",
    department3: "Seafood",
    barcode3: 5836390,
    lbs3: 9.99,
    price3: 20.47,
    bag: true,
    comment: "Thanks for Shopping JB's Grocery Mart!",
    display: function () { 
        // console.log ((shopper.product) + (shopper.department) + (shopper.barcode) + (shopper.price));
        console.log(`${shopper.store} ${shopper.product} ${shopper.department} ${shopper.barcode} ${shopper.price} ${shopper.bag} ${shopper.comment}`);
            } 
    }

    shopper.display();

//     var shopper = {
//         display:function() {
//             console.log(`${shopper.store} ${shopper1.product1} ${shopper1.barcode} ${shopper1.price} ${shopper.product3} ${shopper.barcode3} ${shopper.price3} ${shopper.bag} ${shopper.comment}`);
//         } 
// } 
        
    

      