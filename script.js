// const titleRegular = document.getElementById('title');
// console.log(titleRegular.offsetHeight, titleRegular.offsetWidth);

// const titleBold = document.getElementById('bold');
// console.log(titleBold.offsetHeight, titleBold.offsetWidth);

const paragraphe = document.getElementById('paragraphe');
console.log(paragraphe.offsetHeight);

const link = document.getElementById('link');
console.log(link.offsetHeight);

const button = document.getElementById('button');
console.log(button.offsetHeight, button.offsetWidth);
button.addEventListener('click', function(e) {
    e.preventDefault();
    this.focus();
})

const button2 = document.getElementById('button-2');
console.log(button2.offsetHeight, button2.offsetWidth);
button2.addEventListener('click', function(e) {
    e.preventDefault();
    this.focus();
})

const button3 = document.getElementById('button-3');
console.log(button3.offsetHeight, button3.offsetWidth);
button3.addEventListener('click', function(e) {
    e.preventDefault();
    this.focus();
})

const button4 = document.getElementById('button-4');
console.log(button4.offsetHeight, button4.offsetWidth);
button4.addEventListener('click', function(e) {
    e.preventDefault();
    this.focus();
})

