document.addEventListener("DOMContentLoaded", () => {
 const images = document.querySelectorAll(".rimg img");
    const navi1 = document.getElementById("navi1");
    const naviimg = document.getElementById("naviimg");
    const clsbtn = document.getElementById("clsbtn");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

    let idx = 0;
    const arr = Array.from(images);

    images.forEach((img, indx) => {
        img.addEventListener("click", () => {
            idx = indx;
            navi1.style.display = "flex";
            naviimg.src = arr[idx].src;
        });
    });

    clsbtn.addEventListener("click", () => {
        navi1.style.display = "none";
    });

    next.addEventListener("click", () => {
        idx = (idx + 1) % arr.length;
        naviimg.src = arr[idx].src;
    });

    prev.addEventListener("click", () => {
        idx = (idx - 1 + arr.length) % arr.length;
        naviimg.src = arr[idx].src;
    });
});
