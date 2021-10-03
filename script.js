function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var tituloFilme = document.getElementById("nomefilme").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    var elementoFilmeFavorito = "<img src=" + filmeFavorito + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
      elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  } else {
    console.error("Endereço de filme inválido");
  }

  var elementoTituloFilme = "<h2>" + tituloFilme + "</h2>";
  var elementoTitulo = document.getElementById("listaFilmes");
  elementoTitulo.innerHTML = elementoTitulo.innerHTML + elementoTituloFilme;

  document.getElementById("filme").value = "";
  document.getElementById("nomefilme").value = "";
}

//function adicionarFilme()  {
//Pegar URL da img do Filme.
//var filmeFav = document.getElementById("filme").value;
//Pegar Título do Filme.
// var tituloFilme = document.getElementById("nomefilme");

//Se for ".jpg" mostra na tela, senão msg de erro.
//if ()

//}