document.addEventListener("DOMContentLoaded", function () {

    const experienceList = document.getElementById(
        "experienceList"
    );

    const addExperienceButton = document.getElementById(
        "addExperience"
    );

    const backButton = document.getElementById(
        "backButton"
    );

    const nextButton = document.getElementById(
        "nextButton"
    );


    let experienceData = JSON.parse(
        localStorage.getItem("resumeExperience")
    ) || [];


    function createExperienceCard(data = {}) {

        const card = document.createElement("div");

        card.className = "experience-card";


        card.innerHTML = `

            <div class="entry-header">

                <h2>Work Experience</h2>

                <button type="button"
                    class="remove-entry">

                    Remove

                </button>

            </div>


            <div class="entry-grid">


                <div class="form-group">

                    <label>Job Title</label>

                    <input type="text"
                        class="jobTitle"
                        placeholder="Example: Web Developer"
                        value="${data.jobTitle || ""}">

                </div>


                <div class="form-group">

                    <label>Company Name</label>

                    <input type="text"
                        class="company"
                        placeholder="Company Name"
                        value="${data.company || ""}">

                </div>


                <div class="form-group">

                    <label>Location</label>

                    <input type="text"
                        class="jobLocation"
                        placeholder="City, State"
                        value="${data.location || ""}">

                </div>


                <div class="form-group">

                    <label>Start Date</label>

                    <input type="text"
                        class="startDate"
                        placeholder="Jan 2024"
                        value="${data.startDate || ""}">

                </div>


                <div class="form-group">

                    <label>End Date</label>

                    <input type="text"
                        class="endDate"
                        placeholder="Present / Dec 2025"
                        value="${data.endDate || ""}">

                </div>


                <div class="form-group full-entry">

                    <label>Job Description</label>

                    <textarea class="jobDescription"
                        rows="5"
                        placeholder="Describe your responsibilities and achievements...">${data.description || ""}</textarea>

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


        experienceList.appendChild(card);

    }


    // Load saved experience

    if (experienceData.length > 0) {

        experienceData.forEach(function (item) {

            createExperienceCard(item);

        });

    }


    // Add experience

    addExperienceButton.addEventListener(
        "click",
        function () {

            createExperienceCard();

        }
    );


    // Back

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "education.html";

        }
    );


    // Save

    nextButton.addEventListener(
        "click",
        function () {

            const cards = document.querySelectorAll(
                ".experience-card"
            );


            const experience = [];


            cards.forEach(function (card) {

                const item = {

                    jobTitle:
                        card.querySelector(
                            ".jobTitle"
                        ).value.trim(),

                    company:
                        card.querySelector(
                            ".company"
                        ).value.trim(),

                    location:
                        card.querySelector(
                            ".jobLocation"
                        ).value.trim(),

                    startDate:
                        card.querySelector(
                            ".startDate"
                        ).value.trim(),

                    endDate:
                        card.querySelector(
                            ".endDate"
                        ).value.trim(),

                    description:
                        card.querySelector(
                            ".jobDescription"
                        ).value.trim()

                };


                // Save only filled entries

                if (
                    item.jobTitle ||
                    item.company ||
                    item.description
                ) {

                    experience.push(item);

                }

            });


            localStorage.setItem(
                "resumeExperience",
                JSON.stringify(experience)
            );


            window.location.href =
                "skills.html";

        }
    );

});