const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random";
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
});
function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then((response) => response.json())
    .then((data) => data.content)
    .catch((err) => err);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

renderNewQuote();
