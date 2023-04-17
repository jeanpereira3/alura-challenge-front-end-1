const conteudoPrincipalComunidade = document.querySelector('.conteudo_principal_comunidade')

for (let i = 0; i < localStorage.length; i++){
  const item = JSON.parse(localStorage.getItem(i)) 

  const card = document.createElement('div')
  card.className = 'card'

  const editorcardFundo = document.createElement('div') 
  editorcardFundo.className = `editor_fundo_card`
  editorcardFundo.style = `background-color: ${item.corFundo};`

  const editorCardContainer = document.createElement('div') 
  editorCardContainer.className = 'editor_container_card'

  const editorCabecalho = document.createElement('div')
  editorCabecalho.className = 'editor_cabecalho'

  const imgEditorCabecalho = document.createElement('img')
  imgEditorCabecalho.src = 'img/Mac_buttons.png'
  imgEditorCabecalho.alt = 'Botoes de pagina do Mac OS'
  
  const editorCorpo = document.createElement('div')
  editorCorpo.className = 'editor_corpo'


  const pre = document.createElement('pre')

  const code = document.createElement('code')
  code.className = `editor_codigo hljs ${item.linguagem}`
  code.innerText = item.codigo

  const infoCard = document.createElement('div')
  infoCard.className = 'info_card'

  const infoProjeto = document.createElement('div')
  infoProjeto.className = 'info_projeto'

  const tituloProjeto = document.createElement('h2')
  tituloProjeto.innerHTML = item.titulo
  const descricaoProjeto = document.createElement('p')
  descricaoProjeto.className = 'texto_principal'
  descricaoProjeto.innerHTML = item.descricao

  const socialCard = document.createElement('div')
  socialCard.className = 'social_card'
  const socialCardBotoes = document.createElement('div')
  socialCardBotoes.className = 'social_card_botoes'

  const comentarioTestoPrincipal = document.createElement('div')
  comentarioTestoPrincipal.className = 'comentario texto_principal'
  const likeTextoPincipal = document.createElement('div')
  likeTextoPincipal.className = 'like texto_principal'

  const iconeComentario = document.createElement('i')
  iconeComentario.className = 'fa-solid fa-comment'
  iconeComentario.style = 'color: #ffffff;'


  const iconeLike = document.createElement('i')
  iconeLike.className = 'fa-solid fa-heart'
  iconeLike.style = 'color: #ffffff;'
                  
  const usuarioLogado = document.createElement('div')
  usuarioLogado.className = 'usuario_logado_card texto_principal'

  const imgUsuarioLogado = document.createElement('img')
  imgUsuarioLogado.className = 'suario_logado_img'
  imgUsuarioLogado.src = 'img/Photo.png'
  imgUsuarioLogado.alt = 'Imagem do usuario logado'




  conteudoPrincipalComunidade.appendChild(card)

  card.appendChild(editorcardFundo)
  editorcardFundo.appendChild(editorCardContainer)
  editorCardContainer.appendChild(editorCabecalho)
  editorCabecalho.appendChild(imgEditorCabecalho)
  editorCardContainer.appendChild(editorCorpo)
  editorCorpo.appendChild(pre)
  pre.appendChild(code)

  card.appendChild(infoCard)
  infoCard.appendChild(infoProjeto)
  infoProjeto.appendChild(tituloProjeto)
  infoProjeto.appendChild(descricaoProjeto)
  infoCard.appendChild(socialCard)
  socialCard.appendChild(socialCardBotoes)
  socialCardBotoes.appendChild(comentarioTestoPrincipal)
  comentarioTestoPrincipal.appendChild(iconeComentario)
  comentarioTestoPrincipal.append('9') 
  socialCardBotoes.appendChild(likeTextoPincipal)
  likeTextoPincipal.appendChild(iconeLike)
  likeTextoPincipal.append('9')

  socialCard.appendChild(usuarioLogado)
  usuarioLogado.appendChild(imgUsuarioLogado)
  usuarioLogado.append('Henry')
}



