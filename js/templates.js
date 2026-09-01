document.addEventListener("DOMContentLoaded", function () {

    const templateCards = document.querySelectorAll(
        ".template-card"
    );

    const selectButtons = document.querySelectorAll(
        ".select-template"
    );

    const continueButton = document.getElementById(
        "continueButton"
    );

    const selectedMessage = document.getElementById(
        "selectedMessage"
    );


    let selectedTemplate = localStorage.getItem(
        "resumeTemplate"
    ) || "";


    function formatTemplateName(name) {

        const names = {
            classic: "Classic",
            modern: "Modern",
            minimal: "Minimal",
            executive: "Executive",
            creative: "Creative",
            ats: "ATS Friendly"
        };

        return names[name] || name;

    }


    function selectTemplate(templateName) {

        selectedTemplate = templateName;


        // Save selected template

        localStorage.setItem(
            "resumeTemplate",
            selectedTemplate
        );


        // Remove old selection

        templateCards.forEach(function (card) {

            card.classList.remove("selected");

        });


        // Add selection

        const selectedCard = document.querySelector(
            '.template-card[data-template="' +
            templateName +
            '"]'
        );


        if (selectedCard) {

            selectedCard.classList.add("selected");

        }


        // Enable continue button

        continueButton.disabled = false;


        // Update message

        selectedMessage.textContent =
            formatTemplateName(templateName) +
            " template selected ✓";

    }


    // Template card click

    templateCards.forEach(function (card) {

        card.addEventListener("click", function () {

            const templateName = this.getAttribute(
                "data-template"
            );

            selectTemplate(templateName);

        });

    });


    // Select button click

    selectButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            event.stopPropagation();

            const templateName = this.getAttribute(
                "data-template"
            );

            selectTemplate(templateName);

        });

    });


    // Load saved template

    if (selectedTemplate) {

        selectTemplate(selectedTemplate);

    }


    // Continue

    continueButton.addEventListener("click", function () {

        if (selectedTemplate) {

            window.location.href = "personal.html";

        }

    });

});