var kanji = [];
var startpage;
var endpage;
var currentpage;

$(document).ready(function(){
    kanji = Vocabulary_N4;
    startpage = 0;
    endpage = kanji.length - 1;
    currentpage = getRandomInt(startpage, endpage);
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
    currentpage--;
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
     kanji = Vocabulary_N1;
     break;
   case "N2":
     kanji = Vocabulary_N2;
    break;
   case "N3": 
     kanji = Vocabulary_N3;
    break;
   case "N4": 
     kanji = Vocabulary_N4;
    break;
   case "N5": 
     kanji = Vocabulary_N5;
    break;
  }
  startpage = 0;
  endpage = kanji.length - 1;
  currentpage = getRandomInt(startpage, endpage);
  myFunction();
}

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

function myFunction(){  
  var element = document.getElementById("mydiv");
  var element2 = document.getElementById("mydiv2");
  var element3 = document.getElementById("pagenumber");
  element.innerHTML = "";
  element2.innerHTML = "";
  element3.innerHTML = "";
  element3.innerHTML = (currentpage +1)+ "/" + (endpage+1) ;
  if(kanji[currentpage].Kanji != ""){
    element.innerHTML = "<font size='12'>"+ kanji[currentpage].Kanji+"</font>"; 
    element2.innerHTML = "<font size='12'>"+ kanji[currentpage].Kanji+"</font>"; 
  }else{
    element.innerHTML = "<font size='12'>"+ kanji[currentpage].Hiragana+"</font>"; 
    element2.innerHTML = "<font size='12'>"+ kanji[currentpage].Hiragana+"</font>";
  }  
  element.innerHTML += "<br/>";
  element.innerHTML += "<font size='3'><span class='rcorners_blue'>" + kanji[currentpage].Hiragana  + "</span></font>";
  element.innerHTML += "<br/><br/>"; 
  element.innerHTML += "<font size='5'>" + kanji[currentpage].English.replaceAll( "," , ", ") + "</font>"; 
  $("#mydiv").hide();
  $("#mydiv2").show();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
