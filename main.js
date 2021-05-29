const btn = document.getElementById("microPhn");
var audio;
const content = document.getElementById("content");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;

const recognition =  new SpeechRecognition();
btn.addEventListener("click", ()=> {
  
  recognition.start();
  btn.style.color="coral";
  
  
});




recognition.onstart = function(){
  
  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event){
  
  const current = event.resultIndex;
  
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  
  btn.style.color="lightpink";
  
  if(content.textContent.toLocaleLowerCase()===("hi")||content.textContent.toLocaleLowerCase().includes("hello")){
    
    read("Hello! How are you?");
  }
  else if(content.textContent.toLocaleLowerCase().includes("google")){
    
    read("opening google!");
    window.open("https://google.com");
    
    
  }
  //initializing audio playlist
  
  else if (content.textContent.toLocaleLowerCase().includes("play") && content.textContent.toLocaleLowerCase().includes("kaun")) {
  
    read("playing your song!");
    audio = new Audio('KAUN_TUJHE.mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("play") && content.textContent.toLocaleLowerCase().includes("khairiyat")) {
  
    read("playing your song!");
    audio = new Audio('Khairiyat.mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("play") && content.textContent.toLocaleLowerCase().includes("watan")) {
  
    read("playing your song!");
    audio = new Audio('Ae_Watan_.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("mereya") && content.textContent.toLocaleLowerCase().includes("channa")) {
  
    read("playing your song!");
    audio = new Audio('Channa_Mereya.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("bangladesh") && content.textContent.toLocaleLowerCase().includes("national")) {
  
    read("playing your song!");
    audio = new Audio('Bangladesh_National.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("enna") && content.textContent.toLocaleLowerCase().includes("sona")) {
  
    read("playing your song!");
    audio = new Audio('Enna_Sona.mp3');
    audio.play();
  
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("hamari") && content.textContent.toLocaleLowerCase().includes("adhuri")) {
  
    read("playing your song!");
    audio = new Audio('Hamari_Adhuri_Kahani.mp3');
    audio.play();
  
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("denge")) {
  
    read("playing your song!");
    audio = new Audio('Chhor_Denge.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("sanam") && content.textContent.toLocaleLowerCase().includes("re")) {
  
    read("playing your song!");
    audio = new Audio('SANAM_RE_Song_(VIDEO)_|_Pulkit_Samrat,_Yami_Gautam,_Urvashi_Rautela,_Divya_Khosla_Kumar_|_T-Series(256k).mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("teri") && content.textContent.toLocaleLowerCase().includes("mitti")) {
  
    read("playing your song!");
    audio = new Audio('Teri_Mitti_-_Lyrical___Kesari___Akshay_Kumar_&_Parineeti_Chopra___Arko___B_P.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("teri") && content.textContent.toLocaleLowerCase().includes("nazron")) {
  
    read("playing your song!");
    audio = new Audio('Teri_Nazron_Ne_Kuch_Aisa_Jadoo_Kiya_(Official_Video)_Jubin_Nautiyal_Ft._Emra.mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("namo") && content.textContent.toLocaleLowerCase().includes("namo")) {
  
    read("playing your song!");
    audio = new Audio('Namo_Namo_-_Lyrical___Kedarnath___Sushant_Rajput___Sara_Ali_Khan___Amit_Triv.mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("abhi") && content.textContent.toLocaleLowerCase().includes("aur")) {
  
    read("playing your song!");
    audio = new Audio('Abhi_Tumhe_Aur.mp3');
    audio.play();
  
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("shiv") && content.textContent.toLocaleLowerCase().includes("tandav")) {
  
    read("playing your song!");
    audio = new Audio('Shiv_Tandav.mp3');
    audio.play();
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("sree") && content.textContent.toLocaleLowerCase().includes("krishna")) {
  
    read("playing your song!");
    audio = new Audio('Khairiyat.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("ve") && content.textContent.toLocaleLowerCase().includes("mahi")) {
  
    read("playing your song!");
    audio = new Audio('Ve_Maahi___Kesari___Akshay_Kumar_&_Parineeti_Chopra___Arijit_Singh___Tanishk.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("funny") && content.textContent.toLocaleLowerCase().includes("song")) {
  
    read("playing your song!");
    audio = new Audio('Funny_Hindi.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("tumko") && content.textContent.toLocaleLowerCase().includes("chahunga")) {
  
    read("playing your song!");
    audio = new Audio('Phir_Bhi_Tumko_Chaahunga_-_Full_Song___Arijit_Singh___Arjun_K_&_Shraddha_K__.mp3');
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("dil") && content.textContent.toLocaleLowerCase().includes("ke")) {
  
    read("playing your song!");
    audio = new Audio('Rehna_Tu_Pal_Pal_Dil_Ke_Paas_Full_Song__(Lyrics)_▪_Arijit_Singh_&_Parampara_Thakur_▪_Karan_Deol(128k).mp3');
    audio.play();
  
  }
  
  
  
  
  
  
  else if (content.textContent.toLocaleLowerCase().includes("start")) {
  
    read("playing your song!");
    audio.play();
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("stop")) {
  
    audio.pause();
  }
  
  
  //--------finishing--------
  
  else if (content.textContent.toLocaleLowerCase().includes("facebook")) {
  
    read("opening facebook!");
    window.open("https://facebook.com");
  }
  
  
  
  
  else if (content.textContent.toLocaleLowerCase().includes("youtube")) {
  
    read("opening youtube!");
    window.open("https://youtube.com");
  }
  else if (content.textContent.toLocaleLowerCase().includes("instagram")) {
  
    read("opening enstagram!");
    window.open("https://instagram.com");
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("open")&&content.textContent.toLocaleLowerCase().includes("boss")&&content.textContent.toLocaleLowerCase().includes("profile")) {
  
    read("opening my boss's facebook profile!");
    window.open("https://facebook.com/bittosahaT");
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("alexa")) {
  
    read("Yeah sir checking my system............ OK... I am now online sir. Now you can give me commands. For primary instruction say help");
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("whatsapp")) {
  
    read("opening whatsapp!");
    window.open("https://web.whatsapp.com");
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("wikipedia")) {
  
    read("opening wikipedia!");
    window.open("https://wikipedia.org");
    
  }
  else if (content.textContent.toLocaleLowerCase().includes("here")) {
  
    read("Yes boss! I'm ready and online now");
    
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("time")) {
  
    var name = new Date();
    
    var hours = name.getHours();
    var min = name.getMinutes();
    var sec = name.getSeconds();
    
    
    read("It's" + hours + " " + min + " sir");
  
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("date")) {
  
    var name = new Date();
  
    var date = name.getDate();
    var mon = name.getMonth();
    var month;
    
    if(mon==0){
      
      month = "january";
      
    }
    if (mon == 1) {
    
      month = "february";
    
    }
    
    if (mon == 2) {
    
      month = "march";
    
    }
    
    if (mon == 3) {
    
      month = "april";
    
    }
    
    if (mon == 4) {
    
      month = "may";
    
    }
    
    if (mon == 5) {
    
      month = "jun";
    
    }
    if (mon == 6) {
    
      month = "july";
    
    }
    if (mon == 7) {
    
      month = "august";
    
    }
    if (mon == 8) {
    
      month = "september";
    
    }
    if (mon == 9) {
    
      month = "october";
    
    }
    
    if (mon == 10) {
    
      month = "november";
    
    }
    
    if (mon == 11) {
    
      month = "december";
    
    }
    var year = name.getFullYear();
  
  
    read("sir today is"+date+" "+month+" "+year);
  
  }
  else if (content.textContent.toLocaleLowerCase().includes("good")) {
  
    read("Thanks sir! All credit goes to my creator.");
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("ok")) {
  
    read("yeah! What's next sir?");
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("help")) {
  
    read("This web application is specially design for voice recognition and voice search. You can give me commands and I will show you result according to it. You can open google, youtube, whatsapp,enstagram,wikipedia,quora,spotify and so on. You can also check the date, time,weather by give me commands. You can also search directly to google, youtube and wikipedia. For more information contact my creator. He can easily explaine you why he built me.Have a good day!Thank you from my boss!");
  
  }
  
  
  else if (content.textContent.toLocaleLowerCase().includes("fine")) {
  
    read("Oh! That's great. How can I help you Sir?");
  
  }
  
  else if (content.textContent.toLocaleLowerCase() ===("open")) {
  
    read("what do you want to open sir?");
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("system")) {
  
    read("system crushed");
    document.querySelector("body").style.backgroundColor="black";
    document.querySelector("body").style.display="none";
    window.open('https://google.com');
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("play")&&content.textContent.toLocaleLowerCase().includes("popular")&&content.textContent.toLocaleLowerCase().includes("song")) {
  
    read("playing a popular song..");
    
    window.open("https://www.youtube.com/watch?v=sCbbMZ-q4-I");
  
  }
  
  else if (content.textContent.toLocaleLowerCase().includes("listen")&&content.textContent.toLocaleLowerCase().includes("a")&& content.textContent.toLocaleLowerCase().includes("song") ) {
  
    read("OK sir! I'm opening spotify!");
    window.open("https://spotify.com");
  
  }
  else{
    
    read("sorry out of my program! try again.");
  }
}





function read(message){
  
  
  const speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  speech.text = message;
  
  
  
  window.speechSynthesis.speak(speech);
  
  
}




//initializing google search


function googleSearch(){
var googleBtn = document.getElementById("gn");
var googleContent = document.getElementById("gs");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
googleBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "coral";


});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    googleContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://google.com/search";
    window.open(a + "?q=" + googleContent.textContent + "&oq=" + googleContent.textContent + "&aqs=chrome");
}


}

//initializing wiki search

function wikiSearch(){
var wikiBtn = document.getElementById("wn");
var wikiContent = document.getElementById("ws");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
wikiBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "coral";


});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    wikiContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://en.m.wikipedia.org/wiki/";
    window.open(a +wikiContent.textContent);
}


}

//inititializing youtube



function utube(){
var utubeBtn = document.getElementById("yn");
var utubeContent = document.getElementById("ys");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
utubeBtn.addEventListener("click", () => {

  recognition.start();
  btn.style.color = "coral";


});



recognition.onstart = function() {

  console.log("voic recognition started successfully! speak on your microphoneee!!!");
}

recognition.onresult = function(event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    utubeContent.textContent = transcript;
    
    read("showing your results");
    var a = "https://m.youtube.com/results?sp=mAEA&search_query=";
    window.open(a + utubeContent.textContent);
}

}

//initializing audio playlist

function m(){
  
  Swal.fire({
    title: 'playlist',
    text: 'Songs what we have!',
    imageUrl: 'a.jpg',
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: 'Custom image',
  })
}


function n(){
  
  Swal.fire({
    title: 'playlist',
    text: 'Songs what we have!',
    imageUrl: 'b.jpg',
    imageWidth: 300,
    imageHeight: 400,
    imageAlt: 'Custom image',
  })
}


