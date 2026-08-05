// =============================
// FOTOS DESDE GITHUB
// =============================


const fotos = [

    {
        url: "https://raw.githubusercontent.com/AnTo21Cris/mis-fotos-amor/main/foto1.jpeg",
        texto: "Como olvidar el moomento, de la primera carta, el primer te quiero. como dice la carta. Nunca nadie sabe que nos depara en el futuro❤️"
    },

    {
        url: "https://raw.githubusercontent.com/AnTo21Cris/mis-fotos-amor/main/foto2.jpeg",
        texto: "Nuestras escapaditas, lo nuestro siempre fue un riesgo, en cualquiera de las circunstancias, pero eso lo haces ser amor?🌸"
    },

    {
        url: "https://raw.githubusercontent.com/AnTo21Cris/mis-fotos-amor/main/foto3.jpeg",
        texto: "El primer vistaso a tu uniforme, bonita Nunca olvides donde empezaste y hasta donde llegaste,💖"
    },

    {
        url: "https://raw.githubusercontent.com/AnTo21Cris/mis-fotos-amor/main/foto4.jpeg",
        texto: " Bellesa de mujer, apesar de mil batallas, de miles circunstancias. Nunca dudas de papa Dios y le sirves ✨"
    }

];



let fotoActual = 0;





// =============================
// CREAR CARRUSEL
// =============================


function crearGaleria(){



    const gallery = document.getElementById("gallery");



    gallery.innerHTML = `


        <button class="btn-prev" onclick="anteriorFoto()">

            ❤️

        </button>



        <div class="carrusel">


            <img id="imagenCarrusel">



            <p id="textoCarrusel"></p>



        </div>




        <button class="btn-next" onclick="siguienteFoto()">

            ❤️

        </button>



    `;



    mostrarFoto();



}







// =============================
// MOSTRAR FOTO
// =============================


function mostrarFoto(){



    const imagen = document.getElementById(
        "imagenCarrusel"
    );



    const texto = document.getElementById(
        "textoCarrusel"
    );



    gsap.to(imagen,{


        opacity:0,


        duration:0.5,



        onComplete(){



            imagen.src = fotos[fotoActual].url;



            texto.innerHTML = fotos[fotoActual].texto;




            gsap.to(imagen,{


                opacity:1,


                duration:0.8



            });



        }



    });



}









// =============================
// BOTÓN SIGUIENTE
// =============================


function siguienteFoto(){



    fotoActual++;




    // CUANDO TERMINA LA GALERÍA

    if(fotoActual >= fotos.length){



        finalizarCarrusel();



        return;



    }




    mostrarFoto();



}








// =============================
// BOTÓN ANTERIOR
// =============================


function anteriorFoto(){



    fotoActual--;



    if(fotoActual < 0){


        fotoActual = fotos.length - 1;


    }




    mostrarFoto();



}









// =============================
// MOSTRAR GALERÍA
// =============================


function mostrarGaleria(){



    const gallery = document.getElementById(
        "gallery"
    );



    if(!gallery){


        console.error(
            "No se encontró #gallery"
        );


        return;


    }




    crearGaleria();



    gallery.style.display="flex";




    gsap.fromTo(
        "#gallery",


        {


            opacity:0


        },


        {


            opacity:1,


            duration:1.5



        }


    );



}









// =============================
// FINAL DEL CARRUSEL
// =============================


function finalizarCarrusel(){



    const gallery = document.getElementById(
        "gallery"
    );



    gsap.to(gallery,{



        opacity:0,



        duration:2,



        ease:"power2.out",



        onComplete(){



            gallery.style.display="none";



            mostrarPergamino();



        }



    });



}