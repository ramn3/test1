getPhotos()
let photos = [];
let currentIndex = 0;
let long = 20

const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')

button1.addEventListener("click", () => drawPhotos(photos));

button2.addEventListener("click", () => {
    const section1 = document.getElementById('section1');
    section1.innerHTML = '';
    currentIndex = 0;
    drawPhotos(photos);
    button1.style.display = 'block';
    button2.style.display = 'none'
}
);

async function getPhotos(){
    try {
        const c = await fetch('https://jsonplaceholder.typicode.com/photos', {method: 'GET'})
        photos = await c.json();
        drawPhotos(photos)
    }
    catch(error) {
        console.log(error)
    }
}


function drawPhotos(photos){
    const section1 = document.getElementById('section1')
    for(let i = 0; i < 5; i++) {
        const photo = photos[currentIndex];
        section1.innerHTML+=`<div><p>${currentIndex+1} ${photo.title}</p><img src="${photo.url}"></div>`

        currentIndex++;
        if (currentIndex == long) {
            button1.style.display = 'none';
            button2.style.display = 'block'
        }
    }
}
