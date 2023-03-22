function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
         
    if (num.value.length == 0 || end.value.length == 0) {
        window.alert('[ERRO] Os campos devem estar preenchidos!')
    } else { 

        var n = Number(num.value)
        var e = Number(end.value)
        var r = ''
        var x = 0

        var res = window.document.getElementById('resposta')
        res.innerHTML = `A tabuada do ${n} é:`

            
        do{
            r = n*x
            res.innerHTML += `<br> ${x} x ${n} =  ${r} `
            x++
        } while (x<=e) 
    }    

}