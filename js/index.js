
document.querySelector('.get').addEventListener('click', getAnime);

let data;

//API request to get anime, will put anime into a card in DOM
function getAnime() {
    fetch("https://api.jikan.moe/v4/random/anime")
        .then(res => res.json()) // parse response as JSON
        .then(_data => {
            data = _data;
            console.log(data);
            document.querySelector('h2').innerText = data.data.title;
            document.querySelector('img').src = data.data.images.jpg.image_url;
            document.querySelector('h3').innerText = data.data.score;
            document.querySelector('p').innerText = data.data.synopsis;


        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}


// //function to call on
// function addAnime() {
//     let i = 0;
//     while (i <= 3) {
//         getAnime();
//     }
// }GI