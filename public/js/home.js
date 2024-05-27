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
