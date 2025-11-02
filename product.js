
const productPage = [
    {
        name: "Heels",
        price: '₦30,000',
        discount: '₦45,000',
        description: 'The heel is the prominence at the posterior end of the foot. behind the articulation of the bones of the lower leg.',
        image: 'heels-images'
    },
    {
        name: "Mug",
        price: '₦25,000',
        discount: '₦30,000',
        description: 'A mug is a type of cup, a drinking vessel usually intended for hot drinks such as: coffee, hot chocolate, or tea.',
        image: 'mug-images.jpeg'
    },
    {
        name: "Bag",
        price: '₦35,000',
        discount: '₦45,000',
        description: 'it is a flexible container made of materials like paper, plastic, or cloth, designed for holding or carrying items.',
        image: 'bag-images.jpeg'
    },
    {
        name: "Shoe",
        price: '₦50,000',
        discount: '₦75,000',
        description: 'it is an item of footwear that protects and comforts the human foot, it covers the upper part of the foot.',
        image: 'shoe-images.jpeg'
    },
    {
        name: "Water_Bottle",
        price: '₦15,000',
        discount: '₦27,000',
        description: 'it is a portable container designed to hold and transport water or other beverages to serve us strength',
        image: 'bottle-images.jpeg'
    },
    {
        name: "Sandals",
        price: '₦25,000',
        discount: '₦45,000',
        description: "it is an open type of footwear consisting of a sole held to the wearer's foot by straps that go over the instep the ankle.",
        image: 'sandals-1.jpg'
    },
];

let productPages = document.getElementById('productPage');

productPages.innerHTML = productPage.map(function (value, index, array) {
    const message = "Hello i want to purchase this item ${productPage.name} for ₦${productPage.price}";
    const link = `https://wa.me/2347026055882?text=${encodeURIComponent(
        message
    )}`;


    return `
    <div class="eachItem">
        <img src="images/${value.image}">
        <p class="text-center"> ${value.name}</p>
        <p class="Price:"> ${value.price}</p>
        <h5 class="underline-price">${value.discount}</h5>
        <p class="test-sm text-gray-600 mb-2">Description: ${value.description}</p>
        <a href="${link}" target="_blank-" id="buttonClick" class="bg-gray-400 text-black rounded hover:bg-gray-500 text-small px-4 py-2 curso">Buy Nows</a>
        
    </div>

    `
}).join('');



