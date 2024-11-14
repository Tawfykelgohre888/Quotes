var Quotes = [
  {
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
    author: "Marilyn Monroe",
  },
  {
    content:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    content: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    content:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    content:
      "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
    author: "Marilyn Monroe",
  },
  {
    content:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    content:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    content:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
    author: "Albert Camus",
  },
];

function random_Query() {
  var QuotesRandoum = Math.floor(Math.random() * Quotes.length);
  var selectedQuote = Quotes[QuotesRandoum];
  document.getElementById(
    "demo"
  ).innerHTML = `<p>${selectedQuote.content}</p><p><strong>- ${selectedQuote.author}</strong></p>`;
}
















var Quotes = [
  {
    content:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
    author: "Marilyn Monroe",
  },
  {
    content:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    content: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    content:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    author: "Bernard M. Baruch",
  },
  {
    content:
      "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
    author: "Marilyn Monroe",
  },
  {
    content:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    content: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    content: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    content:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
  },
  {
    content:
      "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
  },
  {
    content:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend.",
    author: "Albert Camus",
  },
];

var lastIndex = -1; // لتخزين آخر رقم عشوائي تم استخدامه

function random_Query() {
  let QuotesRandoum;

  // تكرار حتى نحصل على رقم مختلف عن الرقم السابق
  do {
    QuotesRandoum = Math.floor(Math.random() * Quotes.length);
  } while (QuotesRandoum === lastIndex);

  lastIndex = QuotesRandoum; // تحديث آخر رقم عشوائي

  var selectedQuote = Quotes[QuotesRandoum];
  document.getElementById(
    "demo"
  ).innerHTML = `<p>${selectedQuote.content}</p><p><strong>- ${selectedQuote.author}</strong></p>`;
}
