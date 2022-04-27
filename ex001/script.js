function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    
    
    msg.innerHTML =`São ${hora}h:${min}min`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#E5D3AD'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#E19267'
    } else {
         img.src = 'noite.png'
         document.body.style.background = '#523C58'
    }
}