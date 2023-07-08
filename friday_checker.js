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
    "No Friday, no Bitches, no life, no Party...",
    "Bruh it ain't even Friday",
    "Ong... No",
    "Sadly not Friday yet, go bacc to work",
    "No Friday today, I'm sorry, I truly am. Goodbye.",
    "Try again tomorrow. No luck today",
    "It isn't. Sorry.",
    "Nooooo... no Friday... go tf back to work ong..."];
const current_date = new Date();
let day = current_date.getDay();
console.log(day);
var messageNr = Math.floor( Math.random() *8);
var component = document.getElementById("anz");

if (day == 5){// Day 5 is Friday   
    document.getElementById('anz').innerHTML = messages_good[messageNr];  
    component.className = "alert alert-success";
} else {
    document.getElementById('anz').innerHTML = messages_bad[messageNr];
    component.className = "alert alert-danger";
}









