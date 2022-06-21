function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro! Tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-m.png')
                //criança
            }else if (idade < 18) {
                img.setAttribute('src', 'foto-jovem-m.png')
                //Adolescente
            }else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
                //adulto
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
                //Idoso
            }


        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'foto-bebe-f.png')
                    //criança
            }else if (idade < 18) {
                img.setAttribute('src', 'foto-jovem-f.png')
                    //Adolescente
            }else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-f.png')
                    //adulto
            } else {
                img.setAttribute('src', 'foto-idoso-f.png')
                    //Idoso
             }

          }
          res.style.textAlign = 'center'
          res.innerHTML = `Detectamos genero ${genero} com idade ${idade} anos.`
 
          res.appendChild(img)
 
    }

}
