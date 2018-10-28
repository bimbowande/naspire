
$(function(){

let toSlide = true;
const sliderImages = [1,2,3];
let index = 0;

//template for text



let slider = () =>{

    const carouselText  = $('.carousel').hide();
    carouselText.eq(0).css('display','none');
   
    let sliderClass = document.querySelector('.slider-class');
    sliderClass.style.backgroundImage = 'url(/images/1.jpg) ';
   

    //set interval for backgroundImage
    setInterval(() => {
        carouselText.hide();
        index++;
        if( index > sliderImages.length-1)

        index = 0;

        carouselText.hide();
        const displayTxt = carouselText.eq(index);
        displayTxt.css('display','block');
        sliderClass.style.backgroundImage = 'url(' +  '/images/' + sliderImages[index] + '.jpg)';
    },5000)
}

slider();

})
