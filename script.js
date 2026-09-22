/* =========================
   WHATSAPP
========================= */

function openWhatsApp(productName) {

    const phoneNumber = "8801929138625";

    const message =
        `আসসালামু আলাইকুম, আমি FR Premium Store থেকে "${productName}" সম্পর্কে জানতে চাই। মূল্য, মেয়াদ ও বিস্তারিত জানালে উপকৃত হব।`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );
}


/* =========================
   PAGE READY
========================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* Close menu after navigation */

        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    menuToggle.querySelector("i");


                if (icon) {

                    icon.classList.remove("fa-xmark");

                    icon.classList.add("fa-bars");

                }

            });

        });

    }


    /* =========================
       FAQ ACCORDION
    ========================= */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");


        if (!question || !answer) {
            return;
        }


        question.addEventListener("click", function () {

            const isActive =
                item.classList.contains("active");


            /* Close all other FAQ items */

            faqItems.forEach(function (otherItem) {

                if (otherItem !== item) {

                    otherItem.classList.remove("active");


                    const otherAnswer =
                        otherItem.querySelector(".faq-answer");


                    if (otherAnswer) {

                        otherAnswer.style.maxHeight = null;

                    }

                }

            });


            /* Open / close selected FAQ */

            if (isActive) {

                item.classList.remove("active");

                answer.style.maxHeight = null;

            } else {

                item.classList.add("active");

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            }

        });

    });


    /* =========================
       ESCAPE KEY
    ========================= */

    document.addEventListener("keydown", function (event) {

        if (event.key !== "Escape") {
            return;
        }


        if (mainNav) {

            mainNav.classList.remove("active");

        }


        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });

});
