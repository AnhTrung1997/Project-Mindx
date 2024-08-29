const liMenu = document.querySelector('li.Menu')
const liJs = document.querySelectorAll('li.js')
const ulbodyTop = document.querySelector('ul.bodyTop')
const imgLogo = document.querySelector('img.logoSearch')
let check = false
liMenu.addEventListener('click', () => {
    if (window.innerWidth > 0 && window.innerWidth <= 768) {
        if (check == false) {
            liJs.forEach(element => {
                element.style.display = "flex"
            })
            ulbodyTop.style.flexDirection = "column"
            ulbodyTop.style.alignItems = "unset"

            check = true
        }
        else {
            liJs.forEach(element => {
                element.style.display = "none"
            })
            ulbodyTop.style.flexDirection = "row"
            ulbodyTop.style.alignItems = "center"
            ulbodyTop.style.maxWidth = "unset"
            check = false
        }
    }
})
imgLogo.addEventListener('click', () => {
    if (window.innerWidth > 0 && window.innerWidth <= 768) {
        var boxSearch = prompt('Nhập tên game...')
    }
})
const gameDetail = document.querySelectorAll('#update')
gameDetail.forEach(element => {
    for (let i = 1; i <= 5; i++) {
        element.innerHTML += '<div class="game"> <img src = "./logoGame/update.jpg" alt = "" class="game" ><p>Đang cập nhật...</p><span> <i class="fa-solid fa-user"></i>.........</span></div >'
    }
})