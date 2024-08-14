var myname = "Mousa"; 
var yourname = prompt("What is your name ? " );
yourname = yourname.toUpperCase();
if (myname === yourname) {
    alert("Hello 😅, " + myname + "! Nice to meet you!");
} else {
    alert("Hello 🤗, " + yourname + "! It's nice to meet you too!"); 
}
alert("My Name is : " + myname + " Welcome to my Profile " + yourname + " 💚💚!!")

document.querySelector("i").textContent = yourname;
var spansh = "Welcome to " + yourname + " This site for" + myname +"This is a simplified website that shows you my study path, my training stages, and some of my products Happy visit sir " + yourname + "🫣" ;
document.querySelector("span").textContent = spansh;


