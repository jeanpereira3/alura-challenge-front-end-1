const codigo = document.querySelector('code')
const titulo = document.querySelector('[data-form=titulo]')
const descricao = document.querySelector('[data-form=descricao]')

const botaoSalvar = document.querySelector('[data-form=salvar]')

const criaObjeto = () =>{
  const objeto = {
    'id' : criaId(),
    'descricao': {
      'codigo': codigo.innerText,
      'titulo': titulo.value,
      'descricao': descricao.value,
      'linguagem': linguagem.value,
      'corFundo': inputColor.value
    }
  }
  return objeto
}

const criaId = () => {
  if(localStorage.length == 0){
    return 0
  }

  if (localStorage.length > 0) {
    return localStorage.length
  }
}

const salvarProjeto = (json) => {
  localStorage.setItem(json.id, JSON.stringify(json.descricao))
}

botaoSalvar.addEventListener('click', ()=>{
  salvarProjeto(criaObjeto())
})
