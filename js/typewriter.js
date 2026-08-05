const texto = `
Hoy quiero recordarte algo...
Hay momentos que creemos que todo esta perdido, la vida el futuro....
pero nunca dudes de ti misma, tal y como eres, hasta donde llegaste, todo lo que pasaste
lo fuerte que eres apaesar de mil batllas sigues de pie.... Eres Valiente, fuerte, chambeadora
La vida aveces se torna difiil pero que seria de la vida sin pruebas?
Unica siendo tu misma... eres especial siendo tu misma ... Nunca cambies
Esta cartita es para recordarte lo mucho que vales... lo mucho que lograste 

❤️
`;

let i = 0;

function escribirCarta() {

    const elemento = document.getElementById("typedText");

    elemento.innerHTML = "";

    i = 0;

    escribir();

}


function escribir() {

    const elemento = document.getElementById("typedText");

    if (i < texto.length) {

        elemento.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 40);

    } else{

    animacionSalidaCarta();

}

}

function animacionSalidaCarta(){

    const carta = document.getElementById("envelopeContainer");


    gsap.to(carta, {

        opacity:0,

        y:-200,

        scale:0.7,

        rotation:15,

        duration:2,

        ease:"power2.inOut",


        onComplete:function(){


            carta.style.display="none";


            explosionCorazones();


            // Esperar que termine la explosión

            setTimeout(function(){


                console.log("Mostrando galeria");


                mostrarGaleria();


            },3000);


        }

    });

}