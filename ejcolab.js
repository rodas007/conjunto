// cambie el texto del h1 a “Bye Mundo” al hacer click en el botón

const btn$$ = document.querySelector('h1') ;
const h1$$ = document.querySelector('button') ;
btn$$.addEventListener('click', function()  {h1$$.textcontent = "bye world"})
