const messages = [
    "a;vsdj",
    "asodifjawgn",
    "Im gonna die",
    "asdgfqweg",
    "asdfwaeqf"
]

let currentMessageIndex = 0;

const yesButton = document.getElementById("yes");
const noButton = document.getElementById("no");

let yesScale = 1;
let noScale = 1;

function updateYes(){
    document.getElementById("Joe").src = "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";
    yesButton.textContent = "Yay!!!!!!!!!!11111!!11"
    noButton.style.display = 'none'
    yesButton.style.transform = 'scale(1.6)'
    yesButton.classList.add('shake');
}

function updateNo(){
    yesScale +=0.1;
    yesButton.style.transorm = `scale(${yesScale})`;

    noScale -= 0.1;
    noButton.style.transform = `scale(${noScale})`;

    teleportButton(noButton);

    noButton.textContent = messages[currentMessageIndex]
    currentMessageIndex = (currentMessageIndex+1) % messages.length;
}

function teleportButton(button) {
    const screenWidth = window.innerWidth; // Get the width of the screen
    const screenHeight = window.innerHeight; // Get the height of the screen
    const card = document.querySelector('.card'); // Get the card element
    const cardRect = card.getBoundingClientRect(); // Get the card's position and size
    // Define padding to keep the button within the screen and away from the card
    const padding = 20;
    // Calculate safe boundaries for the button
    const minX = padding;
    const maxX = screenWidth - button.offsetWidth - padding;
    const minY = padding;
    const maxY = screenHeight - button.offsetHeight - padding;
    // Ensure the button doesn't overlap with the card
    let randomX, randomY;
    do {
        randomX = minX + Math.random() * (maxX - minX);
        randomY = minY + Math.random() * (maxY - minY);
    } while (
        // Check if the button overlaps with the card
        randomX + button.offsetWidth > cardRect.left - padding &&
        randomX < cardRect.right + padding &&
        randomY + button.offsetHeight > cardRect.top - padding &&
        randomY < cardRect.bottom + padding
    );
    // Apply the new position
    button.style.position = 'absolute'; // Ensure the button can move freely
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}

yesButton.addEventListener("click", updateYes)
    
noButton.addEventListener("click", updateNo)

VANTA.BIRDS({
    el: "#birds",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 900.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    quantity: 4.00,
    backgroundAlpha: 0.00,
    birdSize: 1.00,
    wingSpan: 10.00,
    speedLimit: 2.00,
    separation: 100.00,
    alignment: 1.00,
    cohesion: 1.00,
    color1: 0xff58dc,
    color2: 0xa75e5e,
   
    })