$(document).ready(function () {

    let slideAtual = 1
    let listaSlides = ["banner-1", "banner-2", "banner-3"]

    setInterval(mudarSlide, 4000);

    function mudarSlide() {
        //remover o slider anterior
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        }
        else {
            $("#carrossel").removeClass(listaSlides[listaSlides.length - 1])
        }

        //exibir o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual])

        //indicar qual o slide atual
        console.log("Slide atual é: ", slideAtual)
        slideAtual++

        if (slideAtual > listaSlides.length - 1) {
            slideAtual = 0
        }
    }

    $("#enviar").click(function () {
        alert("Logado com sucesso!")
    })

})




function buscarItens() {
    let busca = document.getElementById("buscar").value
    alert(busca)
}

function inscrever() {
    let inscrever = document.getElementById("cadastro").value
    alert(inscrever)
}

function showMenu($event) {
    let menu = document.getElementById("sub-menu")

    if (getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    }
    else {
        menu.style.display = "none"
    }

    event.preventDefault();
}