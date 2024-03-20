// start darkmood and Day mode
const moon = document.querySelector("#moon"),
sun = document.querySelector("#sun");

if (localStorage.length !== "") {
    document.body.classList.add(localStorage.white);
    moon.style.display = localStorage.moon;
    sun.style.display = localStorage.sun;
} else {
    document.body.classList.remove("white");
    moon.style.display = "none";
    sun.style.display = "block";
}

sun.addEventListener("click", () => {
    document.body.classList.add("white");
    moon.style.display = "block";
    sun.style.display = "none";
    localStorage.setItem("sun", "none");        
    localStorage.setItem("moon", "block");      
    localStorage.setItem("white", "white");     
});

moon.addEventListener("click", () => {
    document.body.classList.remove("white");
    moon.style.display = "none";
    sun.style.display = "block";
    localStorage.clear();
});

// start search
function searchlALL() {
    const search = document.querySelector("#search").value.toUpperCase(),
    // home = document.querySelector(".home"),
    box = document.querySelectorAll(".box"),
    h3 = document.querySelectorAll(".box-title h3");

    for (let i = 0; i < h3.length; i++) {
        if (h3[i].innerHTML.toUpperCase().indexOf(search) >= 0) {
            box[i].style.display = "";
            home.style.display = "";
        } else {
            box[i].style.display = "none";
            home.style.display = "none";
        };
    };
};

// start Information box
const pragrafHeight = document.querySelectorAll("#pragraf-height"),
minus = document.querySelectorAll("#minus"),
plus = document.querySelectorAll("#plus");

for (let i = 0; i < pragrafHeight.length; i++) {
    plus[i].addEventListener("click", () => {
        pragrafHeight[i].style.height = "250px";
        minus[i].style.display = "block";
        plus[i].style.display = "none";
    });

    minus[i].addEventListener("click", () => {
        pragrafHeight[i].style.height = "0px";
        plus[i].style.display = "block";
        minus[i].style.display = "none";
    });
};

// start btn scroll
window.addEventListener("scroll", () => {
    let arrow = document.querySelector(".arrow");
    if (scrollY >= 400) {
        arrow.style.transform = "scale(1.1)";
    } else {
        arrow.style.transform = "scale(0.0)";
    };
    arrow.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

// start media
const aside = document.querySelector("#aside"),
xmark = document.querySelector("#xmark"),
bars = document.querySelector("#bars");

bars.addEventListener("click", () => {
    aside.style.boxShadow = "0 0 100px #000";
    aside.style.right = "0px";
});
xmark.addEventListener("click", () => {
    aside.style.boxShadow = "0 0 100px transparent";
    aside.style.right = "-1000px";
});