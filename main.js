// Make sure the DOM Content is loaded before running
if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", main);
}
else {
    main();
}

// Get the p elements from index.html
const usdRateDisplay = document.getElementById("rate-display-usd");
const gbpRateDisplay = document.getElementById("rate-display-gbp");
const eurRateDisplay = document.getElementById("rate-display-eur");

// Get the "Get Rate" button from index.html
const getRateButton = document.getElementById("get-rate");

function main() {    
    // Add event listener to the "Get Rate" button 
    // and run the "getRate" function when button is clicked
    getRateButton.addEventListener("click", getRate)
}

function getRate() {
    // **** CoinDesk API **** Bitcoin price index ****
    const api = "https://api.coindesk.com/v1/bpi/currentprice.json";
    /*     
    *    You can use fetch to access the above api 
    *    Example of using fetch                           
    *    fetch('http://example.com/movies.json')    
    *    .then(response => response.json())         
    *    .then(data => console.log(data));          
    *
    *    use fetch to access api and return response in JSON format
    *
    *    Once you've received your JSON, assign the values to the innerText 
    *    of your p elements.
    *
    *    Example:
    *    let val = 50;
    *    usdRateDisplay.innerText = val;    *
    *
    *    *** Write code below here *** */

    
}