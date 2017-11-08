$(document).ready(function(){
    $("#mydiv").hide();
    $("#mydiv2").show();
    $("#mydiv").click(function(){
        $("#mydiv").hide();
        $("#mydiv2").show();
    });
    $("#mydiv2").click(function(){
        $("#mydiv2").hide();
        $("#mydiv").show();
    });
});

var kanji = KanjiMaster_N5;
var startpage = 0;
var endpage = kanji.length -1;
var currentpage = getRandomInt(startpage, endpage);

function nextPage(){
  if(currentpage<endpage){
    currentpage ++;
  }else{
   currentpage = startpage;
  }
  myFunction();
}

function prevPage(){
  if(currentpage>startpage){
    currentpage --;
  }else{
    currentpage = endpage;
  }
  myFunction();
}

function selectLevel(elem){
 kanji = [];
 switch (elem.value)
 {
   case "N1": 
     kanji = KanjiMaster_N1;
     break;
   case "N2":
     kanji = KanjiMaster_N2;
    break;
   case "N3": 
     kanji = KanjiMaster_N3;
    break;
   case "N4": 
     kanji = KanjiMaster_N4;
    break;
   case "N5": 
     kanji = KanjiMaster_N5;
    break;
  }
  
  startpage = 0;
  endpage = kanji.length;
  currentpage = getRandomInt(startpage, endpage);
  myFunction();
}

function myFunction(){  
  var element = document.getElementById("mydiv");
  var element2 = document.getElementById("mydiv2");
  var element3 = document.getElementById("pagenumber");
  element.innerHTML = "";
  element2.innerHTML = "";
  element3.innerHTML = "";
  var onyomi  = kanji[currentpage].onyomi.split(" ");
  var kunyomi = kanji[currentpage].kunyomi.split(" ");
  element.innerHTML = "<font size='12'>"+ kanji[currentpage].name+"</font>"; 
  element2.innerHTML = "<font size='12'>"+ kanji[currentpage].name+"</font>";
  element3.innerHTML = (currentpage+1) + "/" + (endpage+1) ; 
  element.innerHTML += "<br/>";
  for(var i = 0; i < onyomi.length ; i++ ){
   if(onyomi[i] != ""){
     element.innerHTML += "<font size='2'><span class='rcorners_green'>" + onyomi[i]  + "</span></font>";
   }
  }
  for(var i = 0; i < kunyomi.length ; i++ ){
    if(kunyomi[i]!= ""){
      element.innerHTML += "<font size='2''><span class='rcorners_blue'>" + kunyomi[i] + "</span></font>";
    }
  }
  element.innerHTML += "<br/><br/>";
  element.innerHTML += "<font size='4'><span>" + kanji[currentpage].meaning + "</span></font>"; 
  element.innerHTML += "<br/><br/>";
  
  $("#mydiv").hide();
  $("#mydiv2").show();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
