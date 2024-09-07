let nutlogin = document.getElementById("nutlogin")
nutlogin.onclick = function () {
    let boxlogin = document.getElementById("boxlogin").value
    let boxpass = document.getElementById("boxpass").value
    if (boxlogin != sessionStorage.getItem("listtk") || boxpass != sessionStorage.getItem("listpass")) {
        alert("Sai tên tài khoản hoặc mật khẩu, vui lòng nhập lại")
    }
    else {
        nutlogin.setAttribute("href", "./index.html")

    }
}