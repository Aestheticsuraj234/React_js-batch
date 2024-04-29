// Create data for our app
let data = {
    'A': {
        name: 'Clap',
        sound: 'sounds/clap.wav',
    },
    'S': {
        name: 'HiHat',
        sound: 'sounds/hihat.wav'
    },
    'D': {
        name: 'Kick',
        sound: 'sounds/kick.wav'
    },
    'F': {
        name: 'OpenHat',
        sound: 'sounds/openhat.wav'
    },
    'G': {
        name: 'Boom',
        sound: 'sounds/boom.wav'
    },
    'H': {
        name: 'Ride',
        sound: 'sounds/ride.wav'
    },
    'J': {
        name: 'Snare',
        sound: 'sounds/snare.wav'
    },
    'K': {
        name: 'Tom',
        sound: 'sounds/tom.wav'
    },
    'L': {
        name: 'Tink',
        sound: 'sounds/tink.wav'
    }
};


// Get the drumkit element from the DOM

let drumkit = document.getElementById("drumkit");

// make construct function for drumkit


const construct = () => {
    for (let key in data) {
        //* Step-1: Create a div element
        let drumElement = document.createElement('div');
        drumElement.classList.add('element', data[key].name);

        // *step-2  **Creating 'h2' and 'span' Elements:**
        let h2 = document.createElement('h2');
        h2.textContent = key;

        let span = document.createElement('span');
        span.textContent = data[key].name;


        // *step-3 : **Appending 'h2' and 'span' Elements:**
        drumElement.appendChild(h2);
        drumElement.appendChild(span);
        drumkit.appendChild(drumElement);

        // *step-4: **Adding Event Listener:  Add event listener to play the sound corresponding to the clicked drum element**

        drumElement.addEventListener("click", (e) => {
            let key = e.currentTarget.querySelector('h2').textContent;

            playDrum(key.toUpperCase());

        })
    }
}


// Playdrum :- function to play the sound of the drum

const playDrum = (key) => {
    if (data.hasOwnProperty(key)) {
        let drumElement = document.querySelector(`.element.${data[key].name}`)
        drumElement.classList.add('active');


        let audio = new Audio();
        audio.src = data[key].sound;
        // console.log(audio.src);
        audio.play();

        // TODO:
        audio.addEventListener('timeupdate', function () {
            if (audio.currentTime >= audio.duration / 32) {
                drumElement.classList.remove('active');
                audio.removeEventListener('timeupdate', arguments.callee);
            }
        });
    }
    else {
        console.log(
            "OOPS!\nIt looks like you've pressed a key that isn't defined.\nCould you please try again with a valid key?\nThank you!"
        );


        setTimeout(() => {
            console.clear();
        }, 2000)
    }
}


const keyEvent = (event)=>{
    playDrum(event.key.toUpperCase());

}


document.addEventListener('keydown', keyEvent);


construct()