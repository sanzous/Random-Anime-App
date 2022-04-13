document.querySelector('.get').addEventListener('click', getAnime);
let data;
function getAnime() {
    let score = document.querySelector('.get-score').value
    fetch("https://api.jikan.moe/v4/random/anime")
        .then(res => res.json()) // parse response as JSON
        .then(_data => {
            data = _data;
            console.log(data);
            if (score >= 10) {
                return alert('Invalid')
            }
            if (data.data.score < score || data.data.score == null) {
                getAnime()
            }
            document.querySelector('h2').innerText = data.data.title;
            document.querySelector('img').src = data.data.images.jpg.image_url;
            document.querySelector('h3').innerText = data.data.score;

        })
        .catch(err => {
            console.log(`error ${err}`)
        });

}