function showComingSoon(event) {
    event.preventDefault();
    const toast = document.getElementById("toast");
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // 3 giây tự ẩn
  }