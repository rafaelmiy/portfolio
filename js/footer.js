
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const lg = urlParams.get('lg');
checkFooterLG();

function checkFooterLG(){
  if(lg=="pt"){
    ptTranslate('pt');
  }
  else if(lg=="en"){
    ptTranslate('en');
  }
  let params = new URLSearchParams(location.search);
  params.delete('lg');
  history.replaceState(null, '', '?' + params + location.hash);
}


function ptTranslate(){
  // location.href = location.protocol + '//' + location.host + location.pathname;
  translateJSON('pt');
  localStorage.setItem("language", "pt");
}
function enTranslate(){
  // location.href = location.protocol + '//' + location.host + location.pathname + '?lg=en';
  translateJSON('en');
  localStorage.setItem("language", "en");
}
