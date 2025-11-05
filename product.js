
const productPage = [
    {
        name: "Heels",
        price: '₦30,000',
        discount: '₦45,000',
        image: 'heels-images' 
    },
    {
        name: "Sneaker",
        price: '₦25,000',
        discount: '₦30,000',
        image:'Girls-Lace-up-Mesh-Sneakers-Children-School-Kids-Sports-Branded-Shoes.avif'
    },
    {
        name: "Bag",
        price: '₦35,000',
        discount: '₦45,000',
        image: 'bag-images.jpeg'
    },
    {
        name: "Shoe",
        price: '₦50,000',
        discount: '₦75,000',
        image: 'shoe-images.jpeg'
    },
    {
        name: "Luxury Shoe",
        price: '₦15,000',
        discount: '₦27,000',
        image: 'Luxury-Shoes-with-Velvet-Warmth-Women-s-Casual-Shoe-Ladies-Sneakers-Woman-Sneaker-Female-Footwear.avif'
    },
    {
        name: "Sandals",
        price: '₦25,000',
        discount: '₦45,000',
        image: 'sandals-1.jpg'
    },
];

let productPages = document.getElementById('productPage');

productPages.innerHTML = productPage.map( (value ) => {


    return `
    <div class="eachItem">
        <img src="images/${value.image}">
        <p class="text-center"> ${value.name}</p>
        <p class="Price:"> ${value.price}</p>
        <h5 class="underline-price">${value.discount}</h5>
        <button onclick="alert('productName has been added to the cart.')" id="buttonClick">Buy Now</button>
        
        
    </div>

    `

}).join('');



