const text=document.querySelector('.quote');
const author=document.querySelector('.author');
const quoteBtn=document.querySelector('.quoteBtn');


const  getQuotes =async ()=>{
    const res=await fetch('https://free-quotes-api.herokuapp.com/');
    const quotes= await res.json();
    const num=Math.floor(Math.random()*quotes.length);
    const item=quotes[num];
    const quote=item.text;
    const authorName=item.author;
    text.innerText=quote;
    author.innerText=authorName;
}

getQuotes()
