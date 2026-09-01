document.addEventListener("DOMContentLoaded", function () {

    const educationList = document.getElementById(
        "educationList"
    );

    const addEducationButton = document.getElementById(
        "addEducation"
    );

    const backButton = document.getElementById(
        "backButton"
    );

    const nextButton = document.getElementById(
        "nextButton"
    );


    let educationData = JSON.parse(
        localStorage.getItem("resumeEducation")
    ) || [];


    function createEducationCard(data = {}) {

        const card = document.createElement("div");

        card.className = "education-card";


        card.innerHTML = `

            <div class="entry-header">

                <h2>Education</h2>

                <button type="button"
                    class="remove-entry">

                    Remove

                </button>

            </div>


            <div class="entry-grid">


                <div class="form-group">

                    <label>School / College *</label>

                    <input type="text"
                        class="institution"
                        placeholder="School or College Name"
                        value="${data.institution || ""}">

                </div>


                <div class="form-group">

                    <label>Degree / Course *</label>

                    <input type="text"
                        class="degree"
                        placeholder="Example: Bachelor of Science"
                        value="${data.degree || ""}">

                </div>


                <div class="form-group">

                    <label>Field of Study</label>

                    <input type="text"
                        class="field"
                        placeholder="Example: Computer Science"
                        value="${data.field || ""}">

                </div>


                <div class="form-group">

                    <label>Grade / Percentage</label>

                    <input type="text"
                        class="grade"
                        placeholder="Example: 85%"
                        value="${data.grade || ""}">

                </div>


                <div class="form-group">

                    <label>Start Year</label>

                    <input type="text"
                        class="startYear"
                        placeholder="2022"
                        value="${data.startYear || ""}">

                </div>


                <div class="form-group">

                    <label>End Year</label>

                    <input type="text"
                        class="endYear"
                        placeholder="2025"
                        value="${data.endYear || ""}">

                </div>


            </div>

        `;


        const removeButton = card.querySelector(
            ".remove-entry"
        );


        removeButton.addEventListener(
            "click",
            function () {

                card.remove();

            }
        );


        educationList.appendChild(card);

    }


    // Load saved education

    if (educationData.length > 0) {

        educationData.forEach(function (item) {

            createEducationCard(item);

        });

    } else {

        createEducationCard();

    }


    // Add education

    addEducationButton.addEventListener(
        "click",
        function () {

            createEducationCard();

        }
    );


    // Back

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "personal.html";

        }
    );


    // Save and continue

    nextButton.addEventListener(
        "click",
        function () {

            const cards = document.querySelectorAll(
                ".education-card"
            );


            const education = [];


            cards.forEach(function (card) {

                const item = {

                    institution:
                        card.querySelector(
                            ".institution"
                        ).value.trim(),

                    degree:
                        card.querySelector(
                            ".degree"
                        ).value.trim(),

                    field:
                        card.querySelector(
                            ".field"
                        ).value.trim(),

                    grade:
                        card.querySelector(
                            ".grade"
                        ).value.trim(),

                    startYear:
                        card.querySelector(
                            ".startYear"
                        ).value.trim(),

                    endYear:
                        card.querySelector(
                            ".endYear"
                        ).value.trim()

                };


                // Save only filled entries

                if (
                    item.institution ||
                    item.degree ||
                    item.field
                ) {

                    education.push(item);

                }

            });


            localStorage.setItem(
                "resumeEducation",
                JSON.stringify(education)
            );


            window.location.href =
                "experience.html";

        }
    );

});