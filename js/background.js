const background = ["africa.jpg","china.jpg","france.jpg","indonesia.jpg","italy.jpg","korea.jpg","london.jpg","swiss.jpg","tiwan.jpg"]


const backgroundRandom = background[Math.floor(Math.random()*background.length)];

const backgroundImg = document.createElement("img");
backgroundImg.id = "background-img";
backgroundImg.src = `/images/${backgroundRandom}`;
document.body.appendChild(backgroundImg); 