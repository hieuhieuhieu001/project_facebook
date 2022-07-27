function read_more() {
    let dots = document.getElementById("dots")
    let read_moreText = document.getElementById("see-more");
    let readmoretext = document.getElementById("read-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        readmoretext.innerHTML = "read-more";
        read_moreText.style.display = "none";
    }else{
        dots.style.display = "none";
        readmoretext.innerHTML = "read-less";
        read_moreText.style.display = "inline";
    }
}