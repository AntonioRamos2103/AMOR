const texto = `
Hoy quiero recordarte algo...
Hay momentos que creemos que todo esta perdido, la vida el futuro....
pero nunca dudes de ti misma de como eres, tal y como eres.....
Eres especial en todo sentido... tu carcater, tu forma de ser, tu forma de pensar, hasta tus locuras,
eres especial, unica siendo tu misma...
La vida aveces se torna dificl pero que seria la vida sin las pruebas las batallas 
pero recuerda sonreir en cada batalla por que los momentos son pasajeros...
pero esta cartita siempre estara en la nube, para cuando te sientas mal o tu no creas en ti
recuerdes que hay alguien en alguna parte del mundo que cree en ti
Gracias por existir.

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