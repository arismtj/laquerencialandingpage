var swiper = new Swiper(".myswiper",{

    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,    
    loop: true,
    

    breakpoints:{
        0: {
            slidesPerView:2
        },
    
        650: {
            slidesPerView:2
        },   
    
        1024: {
            slidesPerView:3
        },  
    
       }
    
      });
    