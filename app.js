const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right, #8DC26F, #76b852);" ,
    " linear-gradient(to right, #F2C94C, #F2994A);",
    "linear-gradient(to right, #C4E0E5, #4CA1AF)" 
];

const options = {
    threshold: 0.7
}

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
 entries.forEach(entry => {
     console.log(entry);
     const className = entry.className;
     console.log(className);
     const activeAnc
 });
}
sections.forEach(section => {
    observer.observe(section);
});