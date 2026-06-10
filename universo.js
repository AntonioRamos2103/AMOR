const canvas = document.getElementById("universe");

const ctx = canvas.getContext("2d");

/* =========================
   TAMAÑO
========================= */

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

/* =========================
   FORMULA CORAZÓN
========================= */

function heart(t){

    let x = 16 * Math.pow(Math.sin(t),3);

    let y =
    13 * Math.cos(t)
    -5 * Math.cos(2*t)
    -2 * Math.cos(3*t)
    -Math.cos(4*t);

    return {x,y};

}

/* =========================
   PARTICULAS CORAZÓN
========================= */

let particles = [];

for(let i = 0; i < 2600; i++){

    let t = Math.random() * Math.PI * 2;

    let pos = heart(t);

    particles.push({

        x:Math.random() * canvas.width,

        y:canvas.height + Math.random() * 500,

        targetX:
        canvas.width/2 + pos.x * 18,

        targetY:
        canvas.height/2 - pos.y * 18,

        size:Math.random() * 2.2 + 0.5,

        speed:Math.random() * 0.018 + 0.008,

        pulse:Math.random() * 100,

        color:[
            "#5fd6ff",
            "#9be7ff",
            "#dff6ff",
            "#7ccfff"
        ][Math.floor(Math.random()*4)]

    });

}

/* =========================
   ESTRELLAS REALISTAS
========================= */

let stars = [];

for(let i = 0; i < 180; i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*3 + 1,

        opacity:Math.random(),

        pulse:Math.random()*100,

        speed:Math.random()*0.05 + 0.01,

        glow:Math.random()*30 + 20,

        color:[
            "#ffffff",
            "#dff6ff",
            "#9ad9ff",
            "#66ccff"
        ][Math.floor(Math.random()*4)]

    });

}

/* =========================
   NEBULOSAS SUAVES
========================= */

let nebulas = [];

for(let i = 0; i < 6; i++){

    nebulas.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radius:Math.random()*500 + 300,

        opacity:Math.random()*0.05 + 0.02

    });

}

/* =========================
   ANIMACION
========================= */

function animate(){

    /* Fondo universo */

    ctx.fillStyle = "rgba(0,0,0,0.70)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    /* =========================
       NEBULOSAS
    ========================= */

    nebulas.forEach(n=>{

        let gradient =
        ctx.createRadialGradient(

            n.x,
            n.y,
            0,

            n.x,
            n.y,
            n.radius

        );

        gradient.addColorStop(
            0,
            `rgba(0,120,255,${n.opacity})`
        );

        gradient.addColorStop(
            1,
            "transparent"
        );

        ctx.beginPath();

        ctx.fillStyle = gradient;

        ctx.arc(
            n.x,
            n.y,
            n.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

    });

    /* =========================
       ESTRELLAS REALISTAS
    ========================= */

    stars.forEach(s=>{

        s.y += s.speed;

        if(s.y > canvas.height){

            s.y = 0;
            s.x = Math.random()*canvas.width;

        }

        /* Parpadeo */

        s.opacity =
        0.4 +
        Math.sin(
            Date.now()*0.001 + s.pulse
        ) * 0.6;

        ctx.beginPath();

        ctx.arc(
            s.x,
            s.y,
            s.size,
            0,
            Math.PI*2
        );

        ctx.fillStyle = s.color;

        ctx.globalAlpha = s.opacity;

        ctx.shadowColor = s.color;

        ctx.shadowBlur = s.glow;

        ctx.fill();

        /* Cruz brillante */

        ctx.beginPath();

        ctx.moveTo(s.x - 7, s.y);

        ctx.lineTo(s.x + 7, s.y);

        ctx.moveTo(s.x, s.y - 7);

        ctx.lineTo(s.x, s.y + 7);

        ctx.strokeStyle = s.color;

        ctx.lineWidth = 0.4;

        ctx.globalAlpha = s.opacity * 0.4;

        ctx.stroke();

        ctx.globalAlpha = 1;

    });

    /* =========================
       CORAZÓN
    ========================= */

    particles.forEach(p=>{

        p.x +=
        (p.targetX - p.x) * p.speed;

        p.y +=
        (p.targetY - p.y) * p.speed;

        let glow =
        8 +
        Math.sin(
            Date.now()*0.003 + p.pulse
        ) * 12;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI*2
        );

        let gradient =
        ctx.createRadialGradient(

            p.x,
            p.y,
            0,

            p.x,
            p.y,
            18

        );

        gradient.addColorStop(0,p.color);
        gradient.addColorStop(1,"transparent");

        ctx.fillStyle = gradient;

        ctx.shadowColor = p.color;

        ctx.shadowBlur = glow;

        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();

/* =========================
   CARTAS
========================= */

setTimeout(()=>{

    crearCartas();

},6000);

/* =========================
   CREAR CARTAS
========================= */

function crearCartas(){

    const contenedor =
    document.getElementById("cartas");

    const mensajes = [

    {
        nombre:"❤️ keitlyn, siempre tu xd",
        pagina:"keitlyn.html"
    },

    {
        nombre:"✨ Aslo con miedo",
        pagina:"miedo.html"
    },

    {
        nombre:"🌌 Eres Tú",
        pagina:"erestu.html"
    },

    {
        nombre:"💌 Siempre",
        pagina:"siempre.html"
    },

    {
        nombre:"❤️ Nunca te olvides de Dios",
        pagina:"dios.html"
    },

    {
        nombre:"✨ Luna y estrella",
        pagina:"lunayestrella.html"
    },

    {
        nombre:"💙 azul",
        pagina:"azul.html"
    },

    {
        nombre:"🌠 Para Ti",
        pagina:"parati.html"
    }

    ];

    for(let i=0;i<8;i++){

        let info = mensajes[i];

        let carta =
        document.createElement("div");

        carta.classList.add("carta");

        carta.innerHTML = info.nombre;

        carta.style.left =
        Math.random()*75 + "%";

        carta.style.top =
        Math.random()*70 + "%";

        carta.style.animationDuration =
        5 + Math.random()*3 + "s";

        carta.addEventListener("click",()=>{

            window.location.href =
            info.pagina;

        });

        contenedor.appendChild(carta);

    }

}