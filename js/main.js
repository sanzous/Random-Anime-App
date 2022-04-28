

document.querySelector('.get').addEventListener('click', fetchAnime);

let data;
let i = 0;
//API request to get anime, will put anime into a card in DOM
function fetchAnime() {
    fetch("https://api.jikan.moe/v4/random/anime")
        .then(res => res.json()) // parse response as JSON
        .then(_data => {
            data = _data;
            console.log(data);
            const temp = document.createElement('div');
            temp.className = `card ${i}`
            const tempImg = document.createElement('img');
            tempImg.className = 'newImg'
            tempImg.src = data.data.images.jpg.image_url;
            document.getElementsByClassName('container')[0].appendChild(temp);
            document.getElementsByClassName(`card ${i}`)[0].appendChild(tempImg);
            i++;




            // document.querySelector('h2').innerText = data.data.title;
            // document.querySelector('img').src = data.data.images.jpg.image_url;
            // document.querySelector('h3').innerText = data.data.score;
            // document.querySelector('p').innerText = data.data.synopsis;
        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}


