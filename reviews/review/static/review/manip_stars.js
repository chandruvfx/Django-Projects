const stars = [...document.querySelectorAll(".stars span")];
let rating = parseFloat(document.getElementById('rating').innerText)-1;

stars.forEach((stars, i) => {
    if (i <= rating){
        stars.classList.add('active');
    } 
})

