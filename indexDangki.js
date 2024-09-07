
let nutdangki = document.getElementById("nutdangki")
nutdangki.onclick = function () {
    let taikhoan = document.getElementById("tkdangki").value
    let pass = document.getElementById("passdangki").value
    if (taikhoan.length < 6 || pass.length < 6) {
        alert("Vui lòng nhập tên Tài khoản & Mật khẩu tối thiểu 6 ký tự")
    }
    else {
        nutdangki.setAttribute("href", "./indexlogin.html")
        sessionStorage.setItem("listtk", taikhoan)
        sessionStorage.setItem("listpass", pass)
    }
}