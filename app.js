const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");

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
   ESTRELLAS
========================= */

let stars = [];

for(let i = 0; i < 180; i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*3 + 0.5,

        speed:Math.random()*0.15 + 0.02,

        opacity:Math.random(),

        pulse:Math.random()*100,

        glow:Math.random()*30 + 10,

        color:[
            "#ffffff",
            "#dff6ff",
            "#8fd3ff",
            "#66ccff"
        ][Math.floor(Math.random()*4)]

    });

}

/* =========================
   PARTICULAS PEQUEÑAS
========================= */

let dust = [];

for(let i = 0; i < 250; i++){

    dust.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        size:Math.random()*1.5,

        speed:Math.random()*0.08 + 0.01,

        opacity:Math.random()*0.5

    });

}

/* =========================
   ANIMACION
========================= */

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    /* =========================
       POLVO ESPACIAL
    ========================= */

    dust.forEach(d=>{

        d.y += d.speed;

        if(d.y > canvas.height){

            d.y = 0;

            d.x = Math.random()*canvas.width;

        }

        ctx.beginPath();

        ctx.arc(
            d.x,
            d.y,
            d.size,
            0,
            Math.PI*2
        );

        ctx.fillStyle =
        "rgba(255,255,255,0.3)";

        ctx.fill();

    });

    /* =========================
       ESTRELLAS
    ========================= */

    stars.forEach(s=>{

        s.y += s.speed;

        if(s.y > canvas.height){

            s.y = 0;

            s.x = Math.random()*canvas.width;

        }

        /* Parpadeo */

        s.opacity =
        0.5 +
        Math.sin(
            Date.now()*0.001 +
            s.pulse
        ) * 0.5;

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

        /* Destello estrella */

        ctx.beginPath();

        ctx.moveTo(s.x - 5,s.y);

        ctx.lineTo(s.x + 5,s.y);

        ctx.moveTo(s.x,s.y - 5);

        ctx.lineTo(s.x,s.y + 5);

        ctx.strokeStyle = s.color;

        ctx.lineWidth = 0.4;

        ctx.stroke();

        ctx.globalAlpha = 1;

    });

    requestAnimationFrame(animate);

}

animate();

/* =========================
   ABRIR UNIVERSO
========================= */

function abrirUniverso(){

    window.location.href =
    "universo.html";

}