
const generatorMemeBtn = document.querySelector('.meme-generator .generator-meme-btn');

const memeImage = document.querySelector('.meme-generator img');

const memeTitle = document.querySelector('.meme-generator .meme-title');
const memeAuthor=document.querySelector('.meme-generator .meme-author');


const upadateDetails = (url,title,author)=>{
    memeImage.setAttribute('src',url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}


const generateMeme  = ()=>{
    fetch('https://meme-api.com/gimme/wholesomememes')
    .then((response)=>response.json())
    .then(data =>{
        upadateDetails(data.url, data.title,data.author)
    })
}

generatorMemeBtn.addEventListener('click',generateMeme);

