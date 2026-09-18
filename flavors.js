// =============================
// SCOOP FLAVOURS - JAVASCRIPT
// =============================


// =============================
// VARIABLES
// =============================

const cards = document.querySelectorAll(".icecream-card");

const searchInput = document.getElementById("search");

const sortSelect = document.querySelector(".sort");

const priceSelect = document.querySelector(".price");

const filterButton = document.querySelector(".filter");

const cartButtons = document.querySelectorAll(".cart");

const favoriteButtons = document.querySelectorAll(".favorite");

const cartCount = document.getElementById("cartCount");

const categories = document.querySelectorAll(".category");

const sidenav = document.getElementById("sidenav");

const menuicon = document.getElementById("menuicon");

const closenav = document.getElementById("closenav");

const newsletterForm =
    document.getElementById("newsletterForm");

const seasonalBtn =
    document.getElementById("seasonalBtn");


let cart = 0;

let selectedCategory = "all";


// =============================
// SEARCH
// =============================

searchInput.addEventListener("input", function () {

    filterCards();

});


// =============================
// PRICE FILTER
// =============================

priceSelect.addEventListener("change", function () {

    filterCards();

});


// =============================
// CATEGORY FILTER
// =============================

categories.forEach(function (category) {

    category.addEventListener("click", function () {

        // Remove active from all categories

        categories.forEach(function (item) {

            item.classList.remove("active");

        });


        // Add active to clicked category

        category.classList.add("active");


        // Get selected category

        selectedCategory =
            category.dataset.category;


        // Filter cards

        filterCards();

    });

});


// =============================
// FILTER BUTTON
// =============================

filterButton.addEventListener("click", function () {

    filterCards();


    filterButton.textContent = "✓ Filtered";


    setTimeout(function () {

        filterButton.textContent = "☷ Filter";

    }, 1200);

});


// =============================
// FILTER FUNCTION
// =============================

function filterCards() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const priceValue =
        priceSelect.value;


    cards.forEach(function (card) {

        const name =
            card
                .querySelector("h2")
                .textContent
                .toLowerCase();


        const description =
            card
                .querySelector(".icecream-card > p")
                .textContent
                .toLowerCase();


        const category =
            card.dataset.category;


        const price =
            Number(card.dataset.price);


        // =============================
        // SEARCH
        // =============================

        const matchesSearch =
            name.includes(searchValue) ||
            description.includes(searchValue);


        // =============================
        // CATEGORY
        // =============================

        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        // =============================
        // PRICE
        // =============================

        let matchesPrice = true;


        if (priceValue === "low") {

            matchesPrice =
                price < 130;

        }


        else if (priceValue === "mid") {

            matchesPrice =
                price >= 130 &&
                price <= 149;

        }


        // =============================
        // FINAL RESULT
        // =============================

        if (
            matchesSearch &&
            matchesCategory &&
            matchesPrice
        ) {

            card.style.display = "";

        }

        else {

            card.style.display = "none";

        }

    });

}


// =============================
// SORT
// =============================

sortSelect.addEventListener("change", function () {

    const container =
        document.querySelector(".icecream-container");


    const visibleCards =
        Array.from(cards).filter(function (card) {

            return card.style.display !== "none";

        });


    if (sortSelect.value === "low") {

        visibleCards.sort(function (a, b) {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        });

    }


    else if (sortSelect.value === "high") {

        visibleCards.sort(function (a, b) {

            return (
                Number(b.dataset.price) -
                Number(a.dataset.price)
            );

        });

    }


    else {

        visibleCards.sort(function (a, b) {

            return (
                Number(b.dataset.rating) -
                Number(a.dataset.rating)
            );

        });

    }


    visibleCards.forEach(function (card) {

        container.appendChild(card);

    });

});


// =============================
// FAVORITE BUTTON
// =============================

favoriteButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.classList.toggle("active");


        if (
            button.classList.contains("active")
        ) {

            button.textContent = "♥";

        }

        else {

            button.textContent = "♡";

        }

    });

});


// =============================
// CART
// =============================

cartButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        cart++;


        // Update cart number

        cartCount.textContent = cart;


        // Change button

        button.textContent = "✓";


        setTimeout(function () {

            button.textContent = "🛒";

        }, 800);

    });

});


// =============================
// NEWSLETTER
// =============================

newsletterForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const email =
            newsletterForm
                .querySelector("input")
                .value
                .trim();


        if (email === "") {

            alert(
                "Please enter your email address."
            );

            return;

        }


        alert(
            "Thank you for subscribing to Scoop! 🍦"
        );


        newsletterForm.reset();

    }
);


// =============================
// SEASONAL BUTTON
// =============================

seasonalBtn.addEventListener(
    "click",
    function () {

        // Reset filters

        searchInput.value = "";

        priceSelect.value = "all";

        sortSelect.value = "popular";


        // Select all category

        selectedCategory = "all";


        categories.forEach(function (category) {

            category.classList.remove("active");

        });


        document
            .querySelector(
                '.category[data-category="all"]'
            )
            .classList.add("active");


        // Show all cards

        filterCards();


        // Scroll to cards

        document
            .querySelector(".icecream-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


// =============================
// MOBILE SIDE NAV
// =============================

menuicon.addEventListener(
    "click",
    function () {

        sidenav.style.right = "0";

    }
);


closenav.addEventListener(
    "click",
    function () {

        sidenav.style.right = "-100%";

    }
);


// =============================
// CLOSE SIDE NAV AFTER LINK CLICK
// =============================

const sidenavLinks =
    sidenav.querySelectorAll("a");


sidenavLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            sidenav.style.right = "-100%";

        }
    );

});


// =============================
// INITIAL FILTER
// =============================

filterCards();