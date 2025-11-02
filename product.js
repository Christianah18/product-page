
const productPage = [
    {
        name: "Heels",
        price: '₦30,000',
        discount: '₦45,000',
        image: 'heels-images'
    },
    {
        name: "Mug",
        price: '₦25,000',
        discount: '₦30,000',
        image: 'mug-images.jpeg'
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
        name: "Water_Bottle",
        price: '₦15,000',
        discount: '₦27,000',
        image: 'bottle-images.jpeg'
    },
    {
        name: "Sandals",
        price: '₦25,000',
        discount: '₦45,000',
        image: 'sandals-1.jpg'
    },
];

let productPages = document.getElementById('productPage');

productPages.innerHTML = productPage.map(function (value, index, array) {
    const message = "Hello i want to purchase this item ${function.name} for ₦${function.price}";
    const link = `https://wa.me/2347026055882?text=${encodeURIComponent(
        message
    )}`;


    return `
    <div class="eachItem">
        <img src="images/${value.image}">
        <p class="text-center"> ${value.name}</p>
        <p class="Price:"> ${value.price}</p>
        <h5 class="underline-price">${value.discount}</h5>
        <a href="${link}" target="_blank-" id="buttonClick" class="bg-gray-400 text-black rounded hover:bg-gray-500 text-small px-4 py-2 curso">Buy Nows</a>
        
    </div>

    `
}).join('');



