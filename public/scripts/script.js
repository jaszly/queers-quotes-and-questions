console.log('Sanity Check: JS is working!');
$(document).ready(function() {
      // code in here
      retriveQuotes()
      const listOfQuotes = [];

      function retriveQuotes() {
				const filepath = '/scripts/quotes.json';
        fetch(filepath).then(function(response) {
          return response.json()
        }).then(function(quote) {
            for (let i in quote) {
              for (let j in quote[i]) {
								console.log(quote[i])
                listOfQuotes.push(quote[i].quoteText + "  " + " - " + quote[i].quoteAuthor)
              }
              let num = Math.floor(Math.random() * listOfQuotes.length);
						}


							function changeText() {

								  let num = Math.floor(Math.random() * listOfQuotes.length);
								const quote = document.querySelector('.queer-quote');

								quote.innerHTML = listOfQuotes[num%listOfQuotes.length];
								num++;
								setTimeout(changeText,30000)
							}
							changeText();


        })
      }
});
