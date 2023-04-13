const bootaoAbrir = document.querySelector('[data-fechado]')
const bootaoFechar = document.querySelector('[data-aberto]') 
const navegacaoMobile = document.querySelector('.navegacao_mobile')
const buscaMobile = document.querySelector('[data-abrir-busca]')
const inputBuscaMobile = document.querySelector('.busca_mobile_input')
const fecharBuscaMobile = document.querySelector('[data-fechar-busca]')

const linguagem = document.querySelector('.texto_select')
const areaCodigo = document.querySelector('.editor_corpo')
const botaoHighlight = document.querySelector('[data-highlight]')


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

const aplicaHighlight = () => {
  const codigo = areaCodigo.innerText
  areaCodigo.innerHTML = `<code class=" editor_codigo hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de codigo"><code/>`
  areaCodigo.querySelector('code').textContent = codigo
  hljs.highlightElement(areaCodigo.querySelector('code'))
}

botaoHighlight.addEventListener('click',()=>{
  aplicaHighlight()
})