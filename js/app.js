particlesJS("particles-js", {

    particles: {

        number: {
            value: 80
        },

        color: {
            value: "#ffffff"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: .5
        },

        size: {
            value: 3
        },

        move: {

            enable: true,

            speed: 1

        }

    }

});

// ===============================
// PETALOS
// ===============================

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    6+Math.random()*6+"s";

    petal.style.opacity=Math.random();

    petal.style.transform=
    `scale(${0.5+Math.random()})`;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,350);

// ===============================
// LUCIERNAGAS
// ===============================

const fireflies=document.getElementById("fireflies");

for(let i=0;i<35;i++){

    const light=document.createElement("div");

    light.className="firefly";

    light.style.left=Math.random()*100+"vw";

    light.style.top=Math.random()*100+"vh";

    light.style.animationDuration=
    6+Math.random()*10+"s";

    fireflies.appendChild(light);

}

// ===============================
// BRILLOS
// ===============================

const sparkles=document.getElementById("sparkles");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="sparkle";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=
    Math.random()*5+"s";

    sparkles.appendChild(star);

}

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    document.body.style.backgroundPosition=
    `${50+x}% ${50+y}%`;

});

window.onload = ()=>{

    setTimeout(()=>{

        showEnvelope();

    },2000);

}