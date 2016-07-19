window.onload = function(){
  main();
}


var quotes = [
  { 
    author: 'Rick',
    text: 'Cool!'
  },
  {
    author: 'Jay',
    text: 'Frogs are cool.'
  }
]

function main(){

  var ul = document.getElementById( 'quote-list' )
  for ( quote of quotes ) {
    var li = document.createElement( 'li' );
    li.innerHTML = '<blockquote>'+ quote.text + "   " +'<cite>' + quote.author + '</cite>' + '</blockquote>';
    li.onclick = deleteQuote;
    ul.appendChild( li );
  }

  var btn = document.getElementById('add-button');
  btn.onclick = function(event){
    event.preventDefault();
    handleClick(event);
  }

  var form = document.getElementById('quote-form')
  form.onsubmit = function( event ){
    event.preventDefault();
    handleClick();
  }

}



function handleClick(event){
  var quote = document.getElementById('quote-text-input').value;
  var author = document.getElementById('author-text-input').value;
  appendQuote(quote,author);
  document.getElementById('quote-text-input').value = " ";
  document.getElementById('author-text-input').value = " ";
}

function appendQuote(quote,author){
  var li = document.createElement( 'li' );
  li.onclick = deleteQuote;
  li.innerHTML = '<blockquote>'+ quote + "   " +'<cite>' + author + '</cite>' + '</blockquote>';
  var ul = document.getElementById( 'quote-list' );
  ul.appendChild( li );
}

function deleteQuote(event){
  var ul = document.getElementById( 'quote-list' );
  ul.removeChild(event.currentTarget)
 // event.currentTarget.style.display = "none";
}







