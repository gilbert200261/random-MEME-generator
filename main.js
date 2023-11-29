var generateMeme = document.querySelector('.generateMeme')
var titleval = document.querySelector('.title')
var authorval = document.querySelector('.author')
var memeImg = document.querySelector('.memeImg')

const updateData = (url, title, author) => {
    memeImg.setAttribute('src', url)
    titleval.innerHTML = title
    authorval.innerHTML = author
}

const getMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(res => res.json()
            .then(data => {
                updateData(data.url, data.title, data.author)
            }         
            ))
}
generateMeme.addEventListener('click', getMeme)