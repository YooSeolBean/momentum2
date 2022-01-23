const quotes = [
  {
    quote:'"Where there is a will there is a way"',
    name:"Angela Merkel"
  },
  {
    quote:'"Life is a journey"',
    name:"Ralph Waldo Emerson"
  },
  {
    quote:'"Don\'t dream, Be it"',
    name:"Tim curry"
  },
  {
    quote:'"When they go low, we go high"',
    name:"Michelle Obama"
  },
  {
    quote:'"I was never less alone than when by myself"',
    name:"Edward Gibbon"
  },
  {
    quote:'"The will of man is his happiness"',
    name:"Friedrich von schiller"
  },
  { 
    quote:'"Only I can change my life, no one can do if for me"',
    name:"Carol Burnett"
  },
  {
    quote:'"This too shall pass away"',
    name:"Abranham Lincoln"
  },
  {
    quote:'"When is doubt, choose change"',
    name:"Lily Leung"
  },
  {
    quote:'"It is not lengh of life, But depth of life"',
    name:"Ralph Waldo Emerson"
  },
  {
    quote:'"Life is unfair, get used to it"',
    name:"Bill Gates"
  }
]

const quotesContainer = document.querySelector("#qoutes");
const quote = document.querySelector("#qoutes span:first-child");
const author = document.querySelector("#qoutes span:last-child") 
const quotesRandom = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = quotesRandom.quote;
author.innerText = quotesRandom.name;

