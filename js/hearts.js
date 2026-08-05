function explosionCorazones(){


    const cantidad = 80;


    for(let i=0;i<cantidad;i++){


        let corazon=document.createElement("div");


        corazon.innerHTML="❤️";


        corazon.className="corazon-explosion";


        document.body.appendChild(corazon);



        let x = window.innerWidth/2;

        let y = window.innerHeight/2;



        corazon.style.left=x+"px";

        corazon.style.top=y+"px";



        let destinoX=(Math.random()-0.5)*800;

        let destinoY=(Math.random()-0.5)*600;



        gsap.to(corazon,{

            x:destinoX,

            y:destinoY,

            opacity:0,

            scale:Math.random()*2+1,

            rotation:Math.random()*360,

            duration:2,

            ease:"power2.out",

            onComplete:()=>{

                corazon.remove();

            }

        });


    }


}