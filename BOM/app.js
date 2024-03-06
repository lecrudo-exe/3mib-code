const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')

btn1.addEventListener('click', function clicar(){

})

btn1.addEventListener('click',()=>{
    const campoUsario = document.querySelector('#filmeInput').value
    const itemLista = document.createElement('li')
    listaFilmes.append(itemLista)
    itemLista.innerHTML = `<strong>Este filme é o ${campoUsario}</strong>`
    itemLista.classList.add('ativo')
    itemLista.classList.toggle('ativo')
    itemLista.style.backgroundColor = 'red'
})