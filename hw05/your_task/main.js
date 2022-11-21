const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

async function getTracks (term) {
   const tracksEndpoint = baseURL + "?q=" + term + "&type=track";
   console.log(tracksEndpoint);

    const data = await fetch(tracksEndpoint).then(response => response.json());
console.log(data);
console.log(data[0]);
console.log(data[0].name);
console.log(data[0].artist.name);
console.log(data[0].album.image_url);

//clear out old stuff before adding new stuff
document.querySelector('#tracks').innerHTML = "";
    for (let i = 0; i < 5; i++) {
        const template = `
            <section class="track-item preview" onclick="playsong('${data[i].id}')">
            <img src="${data[i].album.image_url}">
            <i class="fas fa-play play-track" aria-hidden="true"></i>
            <div class="label">
                <h2>${data[i].name}</h2>
                <p>
                    ${data[i].artist.name}
                </p>
            </div>
            </section>
        `;
        document.querySelector('#tracks').insertAdjacentHTML('beforeend', template);
    }

}

//job of the pllay song function is to create an iframe and 
// raplace the content in the #artist region of the iframe
function playsong(id) {
    const iframe =`
        <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
        `;
        document.querySelector('#artist').innerHTML = iframe;
}

async function getAlbums (term) {
    const albumsEndpoint = baseURL + "?q=" + term + "&type=album";
   //  console.log(albumsEndpoint);

    const data = await fetch(albumsEndpoint).then(response => response.json());
// console.log(data);
}

async function getArtist (term) {
    const artistEndpoint = baseURL + "?q=" + term + "&type=artist";
    // console.log(artistEndpoint);

const data = await fetch(artistEndpoint).then(response => response.json());

//Check to see if there is one element in the array
if (data.length === 0) {
    document.querySelector('#artist').innerHTML = "No Results found"; 
    return;
}
console.log(data);
console.log(data[0].name);
console.log(data[0].image_url);

const template = `
<section class="artist-card" >
    <img src="${data[0].image_url}" />
    <h2>${data[0].name}</h2>
    <p>Popularity: ${data[0].popularity}</p>
<section>
`;

console.log(template);

document.querySelector('#artist').innerHTML = template;

}

//Print to the cosole
//the first artist's name
//the first artists image_url
//Update the artist card with an image of the first artist

   /*
    THE PLAN
    1. Go to spotify and ask for artist info matching the search term. To do this, we need to use the fetch API.
    2. Wait for Spotify to respond to us.
    3. Once Spotify  gives us our date, wee're going to print it to the console.
    4.Figure out how to display our artist in a tasteful way.
    */

document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
       // ev.preventDefault();
        search();
    }
}