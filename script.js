var hamburguer=document.querySelector('.hamburguer')
var btnFechar=document.querySelector('#btn-fechar')

hamburguer.addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('show-menu')
    hamburguer.classList.toggle('show-menu')
    

})
btnFechar.addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('show-menu')
    hamburguer.classList.toggle('show-menu')
})

function recolhe(){
    document.querySelector('.sidebar').classList.toggle('show-menu')
    hamburguer.classList.toggle('show-menu')
}

    let lblValor=document.querySelector('#valor')
    let js=document.querySelector('#js')

    document.querySelector("#qtde").addEventListener('change',atualizarPreço)
    document.querySelector("#js").addEventListener('change',atualizarPreço)
    document.querySelector("#layout-sim").addEventListener('change',atualizarPreço)
    document.querySelector("#layout-nao").addEventListener('change',atualizarPreço)
    document.querySelector("#prazo").addEventListener('change',()=>{
        let prazo =document.querySelector('#prazo').value
        
        document.querySelector("label[for=prazo]").textContent=`Prazo ${prazo} semanas`
        atualizarPreço()})

    function atualizarPreço(){
        
        let inputPaginas=document.querySelector("#qtde").value
        let js=document.querySelector('#js')
        let lSim=document.querySelector('#layout-sim')
        let prazo =document.querySelector('#prazo').value
        
        let valor =inputPaginas*100
        if(js.checked==true){
            valor=valor*1.1
        }
        if (lSim.checked==true){
            valor+=500
        }
        let taxa = 1 - prazo*0.1
        valor*=1+taxa
        
        prazo.textContent=prazo
        lblValor.textContent=`R$ ${valor.toFixed(2)}`
}


    



