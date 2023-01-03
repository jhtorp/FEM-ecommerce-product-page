// document.addEventListener('DOMContentLoaded', burgerDrop)
// function burgerDrop() {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-container-flex');
//     const darkBg = document.querySelector('.page-mask');
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('showBurger');
//         burger.classList.toggle('showBurger');
//         darkBg.classList.toggle('showDarkBg');
//     })

// }

//Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const pageMask = document.querySelector('.page-mask');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('showMenu');
    burger.classList.toggle('showMenu');
    pageMask.classList.toggle('showMenu');
});


//Carousel

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button-container--next');
const prevButton = document.querySelector('.carousel__button-container--prev');
const indicatorsNav = document.querySelector('.carousel__indicator-container');
const indicators = Array.from(indicatorsNav.children);

// find the width to move
const slideWidth = slides[0].getBoundingClientRect().width;

//Setting the slides in position
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

//moveToSlide function
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateIndicators = (currentIndi, targetIndi) => {
    currentIndi.classList.remove('current-slide');
    targetIndi.classList.add('current-slide');
};


//Show/Hide arrows function
const showHideArrows = (targetIndex, prevButton, nextButton, slides) => {
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentIndi = indicatorsNav.querySelector('.current-slide');
    const nextIndi = currentIndi.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);


    moveToSlide(track, currentSlide, nextSlide);
    updateIndicators(currentIndi, nextIndi);
    showHideArrows(nextIndex, prevButton, nextButton, slides);

});


prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentIndi = indicatorsNav.querySelector('.current-slide');
    const prevIndi = currentIndi.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);



    moveToSlide(track, currentSlide, prevSlide);
    updateIndicators(currentIndi, prevIndi);
    showHideArrows(prevIndex, prevButton, nextButton, slides);


});

indicatorsNav.addEventListener('click', e => {
    console.log('funker');
    const targetIndi = e.target.closest('div');

    if (!targetIndi) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentIndi = indicatorsNav.querySelector('.current-slide');
    const targetIndex = indicators.findIndex(dot => dot === targetIndi);
    const targetSlide = slides[targetIndex];


    moveToSlide(track, currentSlide, targetSlide);
    updateIndicators(currentIndi, targetIndi);
    showHideArrows(targetIndex, prevButton, nextButton, slides);
})





//Show/hide Cart

const showHideCart = document.querySelector('.my-cart');
const myCart = document.querySelector('.cart-container');

myCart.addEventListener('click', e => {
    e.preventDefault;
    showHideCart.classList.toggle('showMyCart');
});



// Plus/Minus Quantity

const plus = document.querySelector('.plus-container');
const minus = document.querySelector('.minus-container');
const quantity = document.querySelector('.quantity__num');
const cartContainer = document.querySelector('.my-cart__items-container');
const emptyCart = document.querySelector('.my-cart__items');
const cart = document.querySelector('.my-cart-not-empty');
const addToCartBtn = document.querySelector('.to-cart');
const checkoutBtn = document.querySelector('.checkout-button');
const deleteBtn = document.querySelector('.delete-img');
const cartPrice = document.querySelector('.cart-price');
const cartNum = document.querySelector('.cart__num');

let currentQuantity = 0;
quantity.innerText = currentQuantity;

//Functions
const minusQuantity = () => {
    if (currentQuantity > 0) {
        currentQuantity -= 1;
        quantity.innerText = currentQuantity;
    }
};

const plusQuantity = () => {
    if (currentQuantity < 10) {
        currentQuantity += 1;
        quantity.innerText = currentQuantity;
    }
};

const addToCart = () => {
    if (currentQuantity > 0) {
        cart.style.display = 'flex';
        checkoutBtn.style.display = 'block';
        cartPrice.innerHTML =
            `$125.00 x ${currentQuantity} <span>$${currentQuantity * 125}.00</span>`;
        emptyCart.style.display = 'none';
        cartNum.style.display = 'flex';
        cartNum.innerHTML = currentQuantity;
    } if (currentQuantity === 0) {
        cart.style.display = 'none';
        emptyCart.style.display = 'flex';
        checkoutBtn.style.display = 'none';
        cartNum.style.display = 'none';
    }
};

const deleteCartItem = () => {
    cart.style.display = 'none';
    emptyCart.style.display = 'flex';
    checkoutBtn.style.display = 'none';
    cartNum.style.display = 'none';
    currentQuantity === 0;
}


//Event listeners
minus.addEventListener('click', minusQuantity);
plus.addEventListener('click', plusQuantity);
addToCartBtn.addEventListener('click', addToCart);
deleteBtn.addEventListener('click', deleteCartItem);













//LEGACY CODE

// plus.addEventListener('click', () => {
//     currentQuantity += 1;
//     quantity.innerText = currentQuantity;


//     if (currentQuantity > 0) {
//         emptyCart.style.display = 'none';
//         addToCart();
//     } return;

    // if (currentQuantity > 0) {
    //     emptyCart.style.display = 'none';
    // } else if (currentQuantity === 0) {
    //     emptyCart.style.display = 'block';
    // }

// });



// minus.addEventListener('click', () => {
//     if (currentQuantity === 1) {
//         currentQuantity -= 1;
//         quantity.innerText = currentQuantity;
//         emptyCart.style.display = 'block';
//         addToCart();
//     } if (currentQuantity > 1) {
//         currentQuantity -= 1;
//         quantity.innerText = currentQuantity;
//         addToCart();
//     }
// });

// const addToCart = () => {
//     if (currentQuantity > 0) {
//         cart.style.display = "block";
//         cart.innerHTML = `<p>$125.00 x ${currentQuantity} <b>$ ${currentQuantity * 125}.00</b></p>`;
//     } if (currentQuantity === 0) {
//         cart.style.display = "none";
//     } return;
// };




