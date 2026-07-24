// =====================================
// ELEMENTOS
// =====================================

const envelope = document.getElementById("envelopeContainer");
const button = document.getElementById("btnAbrir");




// =====================================
// MOSTRAR SOBRE
// =====================================

function showEnvelope(){


    envelope.style.pointerEvents="auto";


    // Mostrar sobre

    gsap.to(envelope,{

        opacity:1,

        duration:1

    });



    // Entrada del sobre

    gsap.fromTo(".envelope",

    {

        y:-500,

        rotation:-15,

        scale:0.5,

        opacity:0

    },


    {

        y:0,

        rotation:0,

        scale:1,

        opacity:1,

        duration:1.8,

        ease:"elastic.out(1,0.5)",



        onComplete(){


            // Flotación controlada

            gsap.to(".envelope",{


                y:-12,


                duration:2,


                repeat:-1,


                yoyo:true,


                ease:"sine.inOut"


            });


        }


    });



    // Animación sello

    gsap.to(".wax-seal",{


        scale:1.08,


        duration:1,


        repeat:-1,


        yoyo:true,


        ease:"sine.inOut"


    });


}







// =====================================
// ABRIR CARTA
// =====================================


button.addEventListener("click",()=>{


    button.disabled=true;



    // Detener movimiento del sobre

    gsap.killTweensOf(".envelope");


    gsap.killTweensOf(".wax-seal");



    gsap.set(".envelope",{

        y:0,

        x:0,

        rotation:0

    });





    // Ocultar inicio


    gsap.to(".hero",{


        opacity:0,


        duration:1


    });







    // Abrir tapa


    gsap.to(".envelope-flap",{


        rotateX:180,


        duration:1.3,


        ease:"power2.inOut"


    });







    // Quitar sello


    gsap.to(".wax-seal",{


        scale:0,


        opacity:0,


        duration:0.6,


        delay:0.4


    });








    // =====================================
    // SACAR CARTA
    // =====================================


    gsap.delayedCall(1.3,()=>{


        const carta=document.querySelector(".letter");



        // Mostrar carta


        carta.classList.add("open");

        carta.classList.add("active");







        setTimeout(()=>{



            // Ocultar partes del sobre

// Ocultar solamente la tapa del sobre

gsap.to(
".envelope-flap",
{

    opacity:0,

    duration:0.6

});







            // Mover carta al centro real de pantalla


            gsap.to(".letter",{


                position:"fixed",


                left:"50%",


                top:"55%",



                xPercent:-50,


                yPercent:-50,



                width:"700px",


                height:"650px",



                duration:1.2,


                ease:"power3.out",




                onComplete(){


                    escribirCarta();


                }


            });




        },1800);





    });



});