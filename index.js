//Ler elemento no DOM
function $ler_DOM(elemento){
    return document.getElementById(elemento)
}

//Formatar número para Real (BRL)
function $formatar_Dinheiro(elemento){
    
    let elementoFormatado = $ler_DOM(elemento)
    
    let formatarDinheiro = new Intl.NumberFormat('pt-br',{
        style: currency,
        currency: 'BRL',
        minimumFractionDigits: 2
    })
    elementoFormatado.innerHTML = formatarDinheiro.format( $ler_DOM(elemento).value)          
}

//Chamar Modal - Forma de pagamento

let botao = $ler_DOM('btn-fmPagamento')

let myModal = $ler_DOM('mod_fmPagamento')

botao.addEventListener('click',()=>{
    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
      })

} )

//Adicionar opção extra na opção pagamento "misto".

let sel_FormaDePagamento = $ler_DOM('sel_modal_fmPagamento')

sel_FormaDePagamento.addEventListener('change',()=>{
    let div_pagMisto = $ler_DOM('mdl_pagamentoMisto')

    if ( sel_FormaDePagamento.value === '8' ){
        div_pagMisto.style.display = 'block';

    }else{  div_pagMisto.style.display = 'none';}
})

let botaoTabelaHortifruti = $ler_DOM('btn-tbHortifruti')
let tabela_hortifruti = $ler_DOM('tabela_hortifruti')

botaoTabelaHortifruti.addEventListener('click',()=>{
    console.log('teste OK')
    if (tabela_hortifruti.style.display == 'none'){
        tabela_hortifruti.style.display = 'block'
        tabela_hortifruti.style.backgroundColor = 'white'

    }else{
        tabela_hortifruti.style.display = 'none'
    }

})
    
