const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', pesquisa)

function pesquisa(e){
  e.preventDefault()
  let urlForm = "https://pokeapi.co/api/v2/pokemon/";
}