console.log('Sanity Check: JS is working!');
$(document).ready(function() {
  retriveQuotes()
  const listOfQuotes = [];
  const listOfAuthor = [];
  let num = Math.floor(Math.random() * listOfQuotes.length);
  let quote = document.querySelector('.queer-quote');
  let author = document.querySelector('.queer-author')

  function retriveQuotes() {
    const filepath = '/scripts/quotes.json';
    fetch(filepath).then(function(response) {
      return response.json()
    }).then(function(quote) {
      for (let i in quote) {
        listOfQuotes.push(quote[i].quoteText );
        listOfAuthor.push("  - " + quote[i].quoteAuthor);
      }
      changeText();
    });
  };

  function changeText() {
    quote.innerHTML = listOfQuotes[num % listOfQuotes.length];
    author.innerHTML = listOfAuthor[num % listOfAuthor.length];
    num++;
    setTimeout(changeText, 30000)
  };
  $('.queer-quote').click(function() {
    quote.innerHTML = listOfQuotes[num];
    author.innerHTML = listOfAuthor[num];
    num++;
    if (num >= 12) {
      num = 1;
    }
  });
});
