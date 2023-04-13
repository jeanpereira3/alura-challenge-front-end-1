const bootaoAbrir = document.querySelector('[data-fechado]')
const bootaoFechar = document.querySelector('[data-aberto]') 
const navegacaoMobile = document.querySelector('.navegacao_mobile')
const buscaMobile = document.querySelector('[data-abrir-busca]')
const inputBuscaMobile = document.querySelector('.busca_mobile_input')
const fecharBuscaMobile = document.querySelector('[data-fechar-busca]')

const inputColor = document.querySelector('[type=color]')
const editorFundo = document.querySelector('.editor_fundo')

bootaoAbrir.addEventListener('click', () =>{
  bootaoAbrir.classList.add('none')
  bootaoFechar.classList.remove('none')
  navegacaoMobile.classList.add('flex')
  inputBuscaMobile.classList.remove('flex_mobile')
})

bootaoFechar.addEventListener('click', ()=>{
  bootaoAbrir.classList.remove('none')
  bootaoFechar.classList.add('none')
  navegacaoMobile.classList.remove('flex')
})

buscaMobile.addEventListener('click', ()=>{
  bootaoAbrir.classList.remove('none')
  bootaoFechar.classList.add('none')
  navegacaoMobile.classList.remove('flex')
  inputBuscaMobile.classList.add('flex_mobile')
})

fecharBuscaMobile.addEventListener('click', () => {
  inputBuscaMobile.classList.remove('flex_mobile')
})

inputColor.addEventListener('change', () => {
  editorFundo.setAttribute('style', `background-color: ${inputColor.value};`)
})