var quotes = [
  "“Be yourself; everyone else is already taken.”",
  "“So many books, so little time.”",
  "“You only live once, but if you do it right, once is enough.”",
  "“In three words I can sum up everything I've learned about life: it goes on.”",
  "“If you tell the truth, you don't have to remember anything.”",

  "“A friend is someone who knows all about you and still loves you.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“Without music, life would be a mistake.”",
  "“It is better to be hated for what you are than to be loved for what you are not.”",
  "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
];
var names = [
  "― Oscar Wilde",
  "― Frank Zappa",
  "― Mae West",
  "― Robert Frost",
  "― Mark Twain",

  "― Elbert Hubbard",
  "― Oscar Wilde",
  "― Friedrich Nietzsche",
  "― Andre Gide",
  "― Albert Einstein",
];



var prevoiusNumber = [];
function getQuote(){
  function findNumber(){
    var randomNumber = Math.floor(Math.random() * quotes.length);
    while (prevoiusNumber[prevoiusNumber.length-1] == randomNumber)
      findNumber();
    if (prevoiusNumber.length > 2 )
      prevoiusNumber.shift()
    prevoiusNumber.push( randomNumber );
    return prevoiusNumber[prevoiusNumber.length-1];
  }
  
  function writeQuote(number){
    content = `
    <p>${quotes[number]}</p>
    <h5>${names[number]}</h5>
    `;
    document.getElementById('quote-content').innerHTML = content;
  }
  console.log(prevoiusNumber)
  writeQuote(findNumber())
}


