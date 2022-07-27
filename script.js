
const slides = document.querySelectorAll(".slide");
const dots= document.querySelectorAll(".dot");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prev = () => {

    dots.forEach((dot) => {
        dot.classList.remove("active");
      });

    if (counter <= 0) {
        counter = slides.length; 
    }
  counter--;

  slideimage();
  dots[counter].classList.add("active");
};

const next = () => {
    dots.forEach((dot) => {
        dot.classList.remove("active");
      });


  if (counter >= slides.length-1) {
    counter = -1;
  }
  counter++;

  slideimage();
  dots[counter].classList.add("active");
};

const currentSlide=(n)=>{
    dots.forEach((dot) => {
        dot.classList.remove("active");
      });
    
counter=n;

slideimage();
dots[counter].classList.add("active");
}

const slideimage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
