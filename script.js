// Opening typing animation

const text = 
`Connecting...

Searching the universe...

Searching for the most beautiful girl...

✓ Found Damu ❤️`;


let i = 0;


function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}



window.onload = function(){

    typeWriter();

    createShootingStars();

    updateCountdown();

};






// Open password page

function showPassword(){

    document.getElementById("opening")
    .classList.add("hidden");


    document.getElementById("passwordPage")
    .classList.remove("hidden");

}







// Password check

function checkPassword(){


    let password =
    document.getElementById("password")
    .value
    .toLowerCase();



    if(password === "nagu"){


        document.getElementById("passwordPage")
        .classList.add("hidden");



        document.getElementById("letter")
        .classList.remove("hidden");


    }


    else{


        document.getElementById("error")
        .innerHTML =
        "Only Damu knows this secret ❤️";


    }

}








// Show photos

function showMemories(){


    document.getElementById("letter")
    .classList.add("hidden");


    document.getElementById("memories")
    .classList.remove("hidden");


}







// Final page

function showFinal(){


    document.getElementById("memories")
    .classList.add("hidden");


    document.getElementById("final")
    .classList.remove("hidden");


    createHearts();


}








// Countdown to birthday

function updateCountdown(){


    let birthday =
    new Date("August 4, 2026 00:00:00")
    .getTime();



    let now =
    new Date().getTime();



    let difference =
    birthday-now;



    if(difference <= 0){


        document.getElementById("timer").innerHTML =
        "Happy Birthday Damu ❤️✨";


        return;


    }





    let days =
    Math.floor(
    difference/(1000*60*60*24)
    );



    let hours =
    Math.floor(
    (difference%(1000*60*60*24))
    /(1000*60*60)
    );



    let minutes =
    Math.floor(
    (difference%(1000*60*60))
    /(1000*60)
    );



    let seconds =
    Math.floor(
    (difference%(1000*60))/1000
    );




    document.getElementById("timer").innerHTML =

    days+" Days ❤️ "+
    hours+" Hours "+
    minutes+" Minutes "+
    seconds+" Seconds";


}



setInterval(updateCountdown,1000);









// Shooting stars

function createShootingStars(){


    setInterval(()=>{


        let star =
        document.createElement("div");


        star.className="shooting-star";


        star.style.left =
        Math.random()*100+"%";


        star.style.top =
        Math.random()*30+"%";


        document.body.appendChild(star);



        setTimeout(()=>{

            star.remove();

        },3000);



    },4000);



}








// Hearts on final page

function createHearts(){


    for(let i=0;i<50;i++){


        let heart =
        document.createElement("div");


        heart.innerHTML="❤️";


        heart.style.position="fixed";

        heart.style.left =
        Math.random()*100+"%";


        heart.style.bottom="-20px";


        heart.style.fontSize =
        (15+Math.random()*25)+"px";


        heart.style.animation =
        "heartFloat 5s linear";



        document.body.appendChild(heart);



        setTimeout(()=>{

            heart.remove();

        },5000);



    }


}