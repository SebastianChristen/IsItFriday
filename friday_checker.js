var messages_good = [
    "Yes, it is friday. Finally! Why'd this take so long?!",
    "yiiipeee!, Friday!!",
    "YES!, TGIF!",
    "It is indeed Friday. Have fun!",
    "Today is Friday. Congrats, you may now enjoy the night.",
    "this Friday night finna be wyld!",
    "it's Friday Friday...",
    "You are lucky! Today's Friday!"]
var messages_bad = [
    "No Friday.",
    "Bruh it ain't even Friday",
    "Omg... No",
    "Sadly not Friday yet, go back to work",
    "No Friday today, I'm sorry.",
    "Try again tomorrow. No luck today",
    "It isn't. Sorry.",
    "Nooooo... no Friday... go back to work pleeease..."];
var messages_weekend = [
    "No Friday, but weekend!!",
    "Bruh it already weekend",
    "Omg... No. It's weekend.",
    "Friday already happened. enjoy ur weekend!",
    "No Friday today, but weekend! Goodbye!",
    "Try again next week. It's already past Friday",
    "It isn't. Sorry. But it is weekend!",
    "nahhh... yeahhhhh... weekend."];
const current_date = new Date();
let day = current_date.getDay();
console.log(day);
var messageNr = Math.floor( Math.random() *8);
var component = document.getElementById("anz");

if (day == 5){// Day 5 is Friday   
    document.getElementById('anz').innerHTML = messages_good[messageNr];  
    component.className = "alert alert-success";
} else if (day > 5){
    document.getElementById('anz').innerHTML = messages_weekend[messageNr];
    component.className = "alert alert-primary";
} else {
    document.getElementById('anz').innerHTML = messages_bad[messageNr];
    component.className = "alert alert-danger";
}









