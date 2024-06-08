setupSlidingEffect = () => {
    const productContainer = [...document.querySelectorAll('.product-container')];

    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];
    
    productContainer.forEach((item, i) =>{
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;
    
        nxtBtn[i].addEventListener('click' , () =>{
            item.scrollLeft += containerWidth;
    
        })
        preBtn[i].addEventListener('click' , () =>{
            item.scrollLeft -= containerWidth;
            
        })
    })
}


// document.addEventListener('DOMContentLoaded', () => {
//     const productContainers = document.querySelectorAll('.product-container');
//     const nxtBtns = document.querySelectorAll('.nxt-btn');
//     const preBtns = document.querySelectorAll('.pre-btn');

//     productContainers.forEach((item, i) => {
//         let containerDimensions = item.getBoundingClientRect();
//         let containerWidth = containerDimensions.width;

//         nxtBtns[i].addEventListener('click', () => {
//             if (item.scrollLeft + containerWidth < item.scrollWidth) {
//                 item.scrollLeft += containerWidth;
//             } else {
//                 item.scrollLeft = item.scrollWidth; // Scroll to the end
//             }
//         });

//         preBtns[i].addEventListener('click', () => {
//             if (item.scrollLeft - containerWidth > 0) {
//                 item.scrollLeft -= containerWidth;
//             } else {
//                 item.scrollLeft = 0; // Scroll to the start
//             }
//         });
//     });
// });


//fetch product cards

const getProducts = (tag) => {
    return fetch('/get-products', {
        method: "post",
        headers: new Headers({"Content-Type" : "application/json"}),
        body: JSON.stringify({tag:tag})
    }).then(res => res.json())
    .then(data => {
        return data;
    })
}


//create product slider
const createProductSlider = (data, parent , title) => {
    console.log(data)
    let slideContainer = document.querySelector(`${parent}`);
    slideContainer.innerHTML += `<section class="product">
    <h2 class="product-category">${title}</h2>
    <button class="pre-btn"><img src="img/arrow.png" alt=""></button>
    <button class="nxt-btn"><img src="img/arrow.png" alt=""></button>
    ${createProductCards(data)}
    </section>`


    setupSlidingEffect();
}
const createProductCards = (data, parent) => {
    //here parent is for search product
    // console.log(data)
    let start = ` <div class="product-container">`;
    let middle = ``;//this will contain card html
    let end = `<div>`;
    for(let i =0; i<data.length; i++){
        middle += ` <div class="product-card">
        <div class="product-image">
            <span class="discount-tag">${data[i].discount}% off</span>
            <img src="${data[i].images[1]}" alt="" class="product-thumb">
            
        </div>
        <div class="product-info">
            <h2 class="product-brand">${data[i].name}</h2>
            <p class="product-short-des">${data[i].shortDes}</p>
            <span class="price">$${data[i].sellPrice}</span>
            <span class="actual-price">$${data[i].actualPrice}</span>
        </div>
    </div>`
    }
    return start + middle + end;
}