document.addEventListener("click",function(e){
    if(e.target.classList.contains("gallery-item")){
        const src=e.target.getAttribute("src");
        const title=e.target.getAttribute("alt");
        document.querySelector(".modal-title").innerHTML=title;
        document.querySelector(".modal-img").src=src;

        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});
