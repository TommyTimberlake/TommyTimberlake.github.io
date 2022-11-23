window.addEventListener('load', getQuote);

const quoteButton = document.querySelector(".new-quote");
//document.getElementById("js-new-quote")
//quoteButton.addEventListener("click", console.log("Button was clicked!"));
quoteButton.addEventListener("click", getQuote);


const quoteEndpoint = src="https://owen-wilson-wow-api.herokuapp.com/wows/random";

async function getQuote() {
    console.log("Click Successful")

    let text = await fetch(quoteEndpoint);
    let response = await text.text();
    //.then(text => text.text());
    let json_response = JSON.parse(response);
    console.log(json_response);
    console.log(json_response['movie']);

    displayQuote(json_response['movie']);
    
}

function displayQuote(x) {
    //const quoteBox = document.querySelector('#js-quote-text');
    //console.log("Display Quote Working");
   //const textMessage = document.createTextNode(x);
    //quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}
