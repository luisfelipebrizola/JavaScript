function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Agora são ${hora}:${min} da manhã`
    } else if (hora <= 18) {
        msg.innerHTML = `Agora são ${hora}:${min} da tarde`
    }else {
        msg.innerHTML = `Agora são ${hora}:${min} da noite`
    }

    if (hora >= 0 && hora < 6 ){
        img.src = "madruga.png"
        document.body.style.background = "#38251e"
    } else if (hora < 12) {
        img.src = "fotomanha1.png"
        document.body.style.background = "#9fd6ea"
    } else if (hora <= 18){
        img.src = "fototarde.png"
        document.body.style.background = "#cfba50"
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#5a2501"
    }
}




