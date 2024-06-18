window.addEventListener("load", () => {
    //to Up
    const up = document.querySelector("#up");
    up.addEventListener("click", () => {
        document.documentElement.scroll({
            top: 0,
            behavior: "smooth"
        });
    });
    //to UP


    //modalWindow Logic 

    const modalTrigger = document.querySelectorAll("[data-modal]");
    const modal = document.querySelector(".modal");
    const modalCloseBtn = document.querySelector("[data-close]")

    modalTrigger.forEach(btn => btn.addEventListener("click", openModal));

    modalCloseBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })


    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.matches(".show")) {
           closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal,1500);

    function openModal() {
        modal.classList.add("show");
        modal.classList.remove("hide");
        document.body.style.overflow = "hidden";
        clearTimeout(modalTimerId);

    };

    function closeModal() {
        modal.classList.remove("show");
        modal.classList.add("hide");
        document.body.removeAttribute("style");

    };

    //modalWindow Logic












})