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
searchMenu = document.querySelector(".search-menu");

function searchmenu(value) {
    if (value != "") {
        searchMenu.style.height = "300px";
    } else {
        searchMenu.style.height = "0px";
    };
};

function searchInput(value) {
    const li = document.querySelectorAll(".li"),
    a = document.querySelectorAll("#a");

    for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toLowerCase().indexOf(value) >= 0) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
            searchMenu.style.height = "fit-content";
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
    aside.style.left = "0px";
});
xmark.addEventListener("click", () => {
    aside.style.boxShadow = "0 0 100px transparent";
    aside.style.left = "-1000px";
});