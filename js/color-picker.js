const inputColor = document.querySelector('[type=color]')
const editorFundo = document.querySelector('.editor_fundo')

inputColor.addEventListener('change', () => {
  editorFundo.setAttribute('style', `background-color: ${inputColor.value};`)
})
