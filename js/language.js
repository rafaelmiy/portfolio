

if(localStorage.getItem("language") == 'pt'){
  translateJSON('pt');
}
else if(localStorage.getItem("language") == 'en'){
  translateJSON('en');
}
else{
  translateJSON('pt');
}

function translateJSON(lg){
  if(lg == 'pt'){
    var content = JSON.parse(ptLG);
    document.getElementById("us-flag").classList.remove("active");
    document.getElementById("br-flag").classList.add("active");
    // document.getElementById("pt-area").style.display = "initial";
    // document.getElementById("en-area").style.display = "none";
  }
  else if(lg = 'en'){
    var content = JSON.parse(enLG);
    document.getElementById("br-flag").classList.remove("active");
    document.getElementById("us-flag").classList.add("active");
    // document.getElementById("pt-area").style.display = "none";
    // document.getElementById("en-area").style.display = "initial";
  }
  
  for(var element in content){
    // var userMessages = messages[userID];
    // console.log(element);
    var id = element;
  
    var idJS = content[id].id;
    var textJS = content[id].text;
    // console.log(idJS);
    // console.log(textJS);
    
    $("#"+idJS).html(textJS);
  }

}

// TODO: fazer lógica para consumir json em pt quando for página
// em português, e em en quando for inglês