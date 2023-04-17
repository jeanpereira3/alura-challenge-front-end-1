const codigoEditorPrincipal = document.querySelector('[data-editor=editor-principal]')

const botaoExportar = document.querySelector('#exportar')

const exportarImagem = (formato) => {

  html2canvas(codigoEditorPrincipal).then((canvas) => {
    const image = canvas.toDataURL(`image/${formato}`)
    var link = document.createElement('a')
    link.href = image
    link.download = `meu-codigo.${formato}`
    link.click()
    link.remove()
  })

}

const exportarCodigo = () => {
  const linguagemExportacao = document.querySelector('#texto_select').value
  const codigoTexto = document.querySelector('code').innerHTML
  const arquivo = new Blob([codigoTexto], { type: `text/${linguagemExportacao}` });
  const url = URL.createObjectURL(arquivo);

  const link = document.createElement('a');
  link.href = url;
  link.download = `meu-arquivo.${formatoCodigo[linguagemExportacao]}`;
  link.click();

  URL.revokeObjectURL(url);

}

botaoExportar.addEventListener('change', () => {
  const formato = document.querySelector('#exportar').value
  if (formato === 'png' || formato === 'jpg') {
    exportarImagem(formato)
  }

  if (formato === 'codigo') {
    exportarCodigo(formato)
  }
})

const formatoCodigo = {
  'javascript': 'js',
  'html': 'html'
}