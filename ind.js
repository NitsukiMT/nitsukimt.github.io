function validateLogin() {
    const username = document.querySelector('input[placeholder="Username"]').value.trim();
    const password = document.querySelector('input[placeholder="Password"]').value.trim();

    if (username === "" || password === "") {
        alert("Bạn cần phải đăng nhập");
        return false;
    }

    // Đăng nhập thành công, chuyển hướng
    window.location.href = "Home.html";
    return false;
}
