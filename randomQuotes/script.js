let btn = document.getElementById('btn');
let outPut = document.getElementById('outPut');
let quotes =[
  'Be yourself; everyone else is already taken.― Oscar Wilde',
    '“So many books, so little time. ― Frank Zappa”',
'“A room without books is like a body without a soul.― Marcus Tullius Cicero”',
'“You only live once, but if you do it right, once is enough.― Mae West”',
'“Be the change that you wish to see in the world.― Mahatma Gandhi”',
];
btn.addEventListener('click',function(){
    var randomQuote= quotes[Math.floor(Math.random() * quotes.length)]
    outPut.innerHTML =randomQuote;

})
