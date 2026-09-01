document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById(
        "personalForm"
    );

    const backButton = document.getElementById(
        "backButton"
    );

    const photoInput = document.getElementById(
        "profilePhoto"
    );

    const photoPreview = document.getElementById(
        "photoPreview"
    );


    // Load saved personal data

    const savedData = JSON.parse(
        localStorage.getItem("resumePersonal")
    ) || {};


    document.getElementById("fullName").value =
        savedData.fullName || "";

    document.getElementById("jobTitle").value =
        savedData.jobTitle || "";

    document.getElementById("email").value =
        savedData.email || "";

    document.getElementById("phone").value =
        savedData.phone || "";

    document.getElementById("location").value =
        savedData.location || "";

    document.getElementById("linkedin").value =
        savedData.linkedin || "";

    document.getElementById("portfolio").value =
        savedData.portfolio || "";

    document.getElementById("summary").value =
        savedData.summary || "";


    // Load saved photo

    if (savedData.photo) {

        photoPreview.innerHTML =
            '<img src="' +
            savedData.photo +
            '" alt="Profile Photo">';

    }


    // Photo upload

    photoInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {

            const photoData = event.target.result;

            photoPreview.innerHTML =
                '<img src="' +
                photoData +
                '" alt="Profile Photo">';

            photoPreview.dataset.photo =
                photoData;

        };

        reader.readAsDataURL(file);

    });


    // If old saved photo exists

    if (savedData.photo) {

        photoPreview.dataset.photo =
            savedData.photo;

    }


    // Back button

    backButton.addEventListener("click", function () {

        window.location.href =
            "templates.html";

    });


    // Form submit

    form.addEventListener("submit", function (event) {

        event.preventDefault();


        const personalData = {

            fullName:
                document.getElementById("fullName").value.trim(),

            jobTitle:
                document.getElementById("jobTitle").value.trim(),

            email:
                document.getElementById("email").value.trim(),

            phone:
                document.getElementById("phone").value.trim(),

            location:
                document.getElementById("location").value.trim(),

            linkedin:
                document.getElementById("linkedin").value.trim(),

            portfolio:
                document.getElementById("portfolio").value.trim(),

            summary:
                document.getElementById("summary").value.trim(),

            photo:
                photoPreview.dataset.photo ||
                savedData.photo ||
                ""

        };


        // Save data

        localStorage.setItem(
            "resumePersonal",
            JSON.stringify(personalData)
        );


        // Next page

        window.location.href =
            "education.html";

    });

});