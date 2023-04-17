const codigoEditorPrincipal = document.querySelector('[data-editor=editor-principal]')

const botaoExportar = document.querySelector('#exportar')

const exportar = (formato) => {

  html2canvas(codigoEditorPrincipal).then((canvas)=>{
    const image = canvas.toDataURL(`image/${formato}`)
    var link = document.createElement('a')
    link.href = image 
    link.download = `meu-codigo.${formato}`
    link.click()
    link.remove()
  })

}

botaoExportar.addEventListener('change', () => {
  const formato = document.querySelector('#exportar').value
  if (formato === 'png' || formato === 'jpg' || formato === 'svg'){
    exportar(formato)
  }
  console.log(formato);
})