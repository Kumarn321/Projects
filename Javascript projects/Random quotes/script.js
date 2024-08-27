const quotes = [
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    // Add more quotes as you like
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

newQuoteBtn.addEventListener('click', generateQuote);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    quoteText.textContent = `"${randomQuote.quote}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;
}
