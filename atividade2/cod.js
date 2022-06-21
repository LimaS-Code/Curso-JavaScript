function ver() {
        var msg = document.getElementById('msg')
        var img = document.getElementById('foto')
        var data = new Date()
        var hora = data.getHours()
        msg.innerHTML = `Agora são ${hora} horas`


        if  (hora >= 0 && hora < 12) {
            img.innerHTML = '<img src="fotomanha.png">'

        } if (hora >= 12 && hora <= 18) {
            img.innerHTML = '<img src="fototarde.png">'

        } else {
            img.innerHTML = '<img src="fotonoite.png">'

        }

}

