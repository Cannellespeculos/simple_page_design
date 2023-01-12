const content = document.getElementsByClassName("carousel_content")

document.getElementById("btn_1").addEventListener("click", (ev) => {
    content[0].style.tranform = `translateX(100%)`;
    console.log(content[0]);
})