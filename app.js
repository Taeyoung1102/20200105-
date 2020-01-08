const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right, #8DC26F, #76b852)" ,
    " linear-gradient(to right, #F2C94C, #F2994A)",
    "linear-gradient(to right, #C4E0E5, #4CA1AF)" 
];

const options = {
    threshold: 0.7
    //70% 쯤에서 activate
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
 entries.forEach(entry => {
     const className = entry.target.className;
     const activeAnchor = document.querySelector(`[data-page=${className}`)
     const gradientIndex = entry.target.getAttribute('data-index');
     const coords = activeAnchor.getBoundingClientRect();
     const  directions = {
         height: coords.height,
         width: coords.width,
         top: coords.top,
         left: coords.left
     };
     if(entry.isIntersecting){
         bubble.style.setProperty('left', `${directions.left}px`);
         bubble.style.setProperty('top', `${directions.top}px`);
         bubble.style.setProperty('width', `${directions.width}px`);
         bubble.style.setProperty('height', `${directions.height}px`);

         bubble.style.background = gradients[gradientIndex]
     }
 });
}
sections.forEach(section => {
    observer.observe(section);
});