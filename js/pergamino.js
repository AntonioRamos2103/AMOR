// =====================================================
// PERGAMINO + ESCENA FINAL
// PARTE 1
// =====================================================


// ================================
// ELEMENTOS
// ================================

const escenaPergamino = document.getElementById("escenaPergamino");

const pergamino = document.getElementById("pergamino");

const textoPergamino = document.getElementById("textoPergamino");

const botonSorpresa = document.getElementById("botonSorpresa");

const escenaFinal = document.getElementById("escenaFinal");

const mensajeFinal = document.getElementById("mensajeFinal");

const corazonesFinal = document.getElementById("corazonesFinal");



// ================================
// ESTADO INICIAL
// ================================

gsap.set(escenaPergamino,{

    opacity:0,

    pointerEvents:"none"

});


gsap.set(pergamino,{

    y:250,

    scale:.5,

    rotation:-15

});


gsap.set(botonSorpresa,{

    opacity:0,

    y:40,

    pointerEvents:"none"

});


gsap.set(escenaFinal,{

    opacity:0,

    pointerEvents:"none"

});




// ================================
// MOSTRAR PERGAMINO
// ================================

function mostrarPergamino(){


    textoPergamino.textContent="";


    escenaPergamino.style.pointerEvents="auto";


    gsap.to(escenaPergamino,{

        opacity:1,

        duration:1.2

    });



    gsap.to(pergamino,{

        y:0,

        scale:1,

        rotation:0,

        duration:2,

        ease:"elastic.out(1,.4)",

        onComplete:()=>{

            escribirPergamino();

        }

    });


}




// ================================
// ESCRIBIR MENSAJE
// ================================

function escribirPergamino(){


const mensaje=`Quiero que recuerdes algo... ❤️

Nunca de los nuncas, jamas de los jamas.. te rindas...
se que aveces la vida es dura, dificil pero nunca nunca dudes de ti

Nunca pierdas la esperanza, incluso en los días difíciles...
y cuando no creas en ti, yo y la cartita estaran para recordarte que yo creo en ti ..

siempre habrá una razón para sonreír... aun en los momentos dificiles 

Gracias por existir.

Con mucho cariño...

 Cristhian❤️`;


let i=0;


textoPergamino.textContent="";


const escribir=setInterval(()=>{


    textoPergamino.textContent += mensaje.charAt(i);


    i++;


    if(i>=mensaje.length){


        clearInterval(escribir);


        mostrarBoton();


    }


},45);


}




// ================================
// MOSTRAR BOTON
// ================================

function mostrarBoton(){


    gsap.to(botonSorpresa,{

        opacity:1,

        y:0,

        duration:1,

        ease:"back.out(1.7)",

        onComplete(){


            botonSorpresa.style.pointerEvents="auto";


        }

    });


}

// =====================================================
// TRANSICIÓN A LA ESCENA FINAL
// =====================================================


// ======================================
// CLICK EN EL BOTÓN
// ======================================

botonSorpresa.addEventListener("click", iniciarFinal);


function iniciarFinal(){

    botonSorpresa.style.pointerEvents="none";

    // Ocultar botón
    gsap.to(botonSorpresa,{

        opacity:0,

        y:30,

        duration:.6

    });

    // Desaparece el pergamino
    gsap.to(pergamino,{

        scale:1.15,

        rotation:5,

        opacity:0,

        duration:1.5,

        ease:"power2.in"

    });

    // Desaparece la escena
    gsap.to(escenaPergamino,{

        opacity:0,

        duration:2,

        delay:.5,

        onComplete:()=>{

            escenaPergamino.style.pointerEvents="none";

            mostrarEscenaFinal();

        }

    });

}



// ======================================
// MOSTRAR ESCENA FINAL
// ======================================

function mostrarEscenaFinal(){

    escenaFinal.style.pointerEvents="auto";

    gsap.fromTo(

        escenaFinal,

        {

            opacity:0,

            scale:1.15

        },

        {

            opacity:1,

            scale:1,

            duration:2,

            ease:"power2.out"

        }

    );

    escribirMensajeFinal();

    crearCorazones();

}






// ======================================
// ESCRIBIR MENSAJE FINAL
// ======================================

function escribirMensajeFinal(){

const mensaje=

`Recuerda siempre algo... ❤️

Nunca estás sola....

Siempre habrá alguien
que creerá en ti.

Aun que no este presente.. espero verte sonreir aun en los momentos dificiles si...

Gracias por existir. ❤️`;



mensajeFinal.textContent="";

let i=0;

const escribir=setInterval(()=>{

    mensajeFinal.textContent += mensaje.charAt(i);

    i++;

    if(i>=mensaje.length){

        clearInterval(escribir);

    }

},60);

}



