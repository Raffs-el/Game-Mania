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