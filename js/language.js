

// if(localStorage.getItem("language") == 'pt'){
//   translateJSON('pt');
// }
// else if(localStorage.getItem("language") == 'en'){
//   translateJSON('en');
// }
// else{
//   translateJSON('pt');
// }

// if(document.getElementById("us-flag").classList.contains("active") == true){

// }

// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);

// const lgURL = urlParams.get('lg');
const lgURL = new URL(location.href).searchParams.get('lg');
checkPageLG(lgURL);

function checkPageLG(){
  if(lgURL=="pt"){
    pgTranslate('pt');
  }
  else if(lgURL=="en"){
    pgTranslate('en');
  }
  else{
    pgTranslate('pt');
  }
  // window.location.href = window.location.href.split('?') + ;


  // let params = new URLSearchParams(location.search);
  // params.delete('lg');
  // history.replaceState(null, '', '?' + params + location.hash);
}


function pgTranslate(lg){
  // location.href = location.protocol + '//' + location.host + location.pathname;
  translateJSON(lg);

  // INCLUI O PARÂMETRO DE LINGUA DE TODOS OS LINKS DA PÁGINA
  updateLinksLg(lg);

  // ATUALIZA PARÂMETRO DE LINGUA NA URL
  window.history.replaceState(null, null, "?lg="+lg);
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

function updateLinksLg(lg){
  // var anchors = document.getElementsByTagName("a");
  var anchors = $("a:not(.anchor>a)");
  var lg = lg;
  for (var i = 0; i < anchors.length; i++) {
    // anchors[i].href = anchors[i].href.split('?')[0] + "?lg=" + lg;
    anchors[i].href = anchors[i].origin + anchors[i].pathname + "?lg=" + lg;
  }
}

// window.onload = function() {
//   var anchors = document.getElementsByTagName("a");
//   for (var i = 0; i < anchors.length; i++) {
//      anchors[i].href += anchors[i].href.indexOf('?') != -1 ? "&affiliate_id=" + affiliate_id  : "?affiliate_id=" + affiliate_id;
//   }
//  }

// TODO: fazer lógica para consumir json em pt quando for página
// em português, e em en quando for inglês