document.addEventListener("DOMContentLoaded", function () {

    const skillInput = document.getElementById(
        "skillInput"
    );

    const addSkillButton = document.getElementById(
        "addSkill"
    );

    const skillsList = document.getElementById(
        "skillsList"
    );


    const languageInput = document.getElementById(
        "languageInput"
    );

    const addLanguageButton = document.getElementById(
        "addLanguage"
    );

    const languagesList = document.getElementById(
        "languagesList"
    );


    const certificationsList = document.getElementById(
        "certificationsList"
    );

    const addCertificationButton =
        document.getElementById(
            "addCertification"
        );


    const achievementsList =
        document.getElementById(
            "achievementsList"
        );

    const addAchievementButton =
        document.getElementById(
            "addAchievement"
        );


    const backButton = document.getElementById(
        "backButton"
    );

    const nextButton = document.getElementById(
        "nextButton"
    );


    let skills = JSON.parse(
        localStorage.getItem("resumeSkills")
    ) || [];


    let languages = JSON.parse(
        localStorage.getItem("resumeLanguages")
    ) || [];


    let certifications = JSON.parse(
        localStorage.getItem("resumeCertifications")
    ) || [];


    let achievements = JSON.parse(
        localStorage.getItem("resumeAchievements")
    ) || [];


    /* =========================
       RENDER TAGS
    ========================= */

    function renderSkills() {

        skillsList.innerHTML = "";


        skills.forEach(function (skill, index) {

            const tag =
                document.createElement("div");

            tag.className = "skill-tag";


            tag.innerHTML = `
                <span>${skill}</span>
                <button data-index="${index}">
                    ×
                </button>
            `;


            tag.querySelector("button")
                .addEventListener(
                    "click",
                    function () {

                        skills.splice(
                            index,
                            1
                        );

                        renderSkills();

                    }
                );


            skillsList.appendChild(tag);

        });

    }


    function renderLanguages() {

        languagesList.innerHTML = "";


        languages.forEach(
            function (language, index) {

                const tag =
                    document.createElement("div");

                tag.className =
                    "skill-tag";


                tag.innerHTML = `
                    <span>${language}</span>
                    <button data-index="${index}">
                        ×
                    </button>
                `;


                tag.querySelector("button")
                    .addEventListener(
                        "click",
                        function () {

                            languages.splice(
                                index,
                                1
                            );

                            renderLanguages();

                        }
                    );


                languagesList.appendChild(tag);

            }
        );

    }


    /* =========================
       ADD SKILL
    ========================= */

    function addSkill() {

        const value =
            skillInput.value.trim();


        if (
            value &&
            !skills.includes(value)
        ) {

            skills.push(value);

            skillInput.value = "";

            renderSkills();

        }

    }


    addSkillButton.addEventListener(
        "click",
        addSkill
    );


    skillInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                addSkill();

            }

        }
    );


    /* =========================
       ADD LANGUAGE
    ========================= */

    function addLanguage() {

        const value =
            languageInput.value.trim();


        if (
            value &&
            !languages.includes(value)
        ) {

            languages.push(value);

            languageInput.value = "";

            renderLanguages();

        }

    }


    addLanguageButton.addEventListener(
        "click",
        addLanguage
    );


    languageInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                event.preventDefault();

                addLanguage();

            }

        }
    );


    /* =========================
       CERTIFICATION
    ========================= */

    function createCertification(data = {}) {

        const item =
            document.createElement("div");

        item.className =
            "dynamic-entry";


        item.innerHTML = `

            <input type="text"
                class="certification-name"
                placeholder="Certificate Name"
                value="${data.name || ""}">

            <input type="text"
                class="certification-org"
                placeholder="Organization"
                value="${data.organization || ""}">

            <input type="text"
                class="certification-year"
                placeholder="Year"
                value="${data.year || ""}">

            <button type="button"
                class="remove-dynamic">

                Remove

            </button>

        `;


        item.querySelector(
            ".remove-dynamic"
        ).addEventListener(
            "click",
            function () {

                item.remove();

            }
        );


        certificationsList.appendChild(item);

    }


    addCertificationButton.addEventListener(
        "click",
        function () {

            createCertification();

        }
    );


    /* =========================
       ACHIEVEMENT
    ========================= */

    function createAchievement(data = {}) {

        const item =
            document.createElement("div");

        item.className =
            "dynamic-entry achievement-entry";


        item.innerHTML = `

            <input type="text"
                class="achievement-title"
                placeholder="Achievement Title"
                value="${data.title || ""}">

            <textarea
                class="achievement-description"
                rows="3"
                placeholder="Short description">${data.description || ""}</textarea>

            <button type="button"
                class="remove-dynamic">

                Remove

            </button>

        `;


        item.querySelector(
            ".remove-dynamic"
        ).addEventListener(
            "click",
            function () {

                item.remove();

            }
        );


        achievementsList.appendChild(item);

    }


    addAchievementButton.addEventListener(
        "click",
        function () {

            createAchievement();

        }
    );


    /* =========================
       LOAD DATA
    ========================= */

    renderSkills();

    renderLanguages();


    certifications.forEach(
        function (item) {

            createCertification(item);

        }
    );


    achievements.forEach(
        function (item) {

            createAchievement(item);

        }
    );


    /* =========================
       BACK
    ========================= */

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "experience.html";

        }
    );


    /* =========================
       SAVE & PREVIEW
    ========================= */

    nextButton.addEventListener(
        "click",
        function () {


            certifications = [];


            document.querySelectorAll(
                ".dynamic-entry:not(.achievement-entry)"
            ).forEach(
                function (item) {

                    const data = {

                        name:
                            item.querySelector(
                                ".certification-name"
                            ).value.trim(),

                        organization:
                            item.querySelector(
                                ".certification-org"
                            ).value.trim(),

                        year:
                            item.querySelector(
                                ".certification-year"
                            ).value.trim()

                    };


                    if (
                        data.name ||
                        data.organization
                    ) {

                        certifications.push(
                            data
                        );

                    }

                }
            );


            achievements = [];


            document.querySelectorAll(
                ".achievement-entry"
            ).forEach(
                function (item) {

                    const data = {

                        title:
                            item.querySelector(
                                ".achievement-title"
                            ).value.trim(),

                        description:
                            item.querySelector(
                                ".achievement-description"
                            ).value.trim()

                    };


                    if (
                        data.title ||
                        data.description
                    ) {

                        achievements.push(
                            data
                        );

                    }

                }
            );


            // Save everything

            localStorage.setItem(
                "resumeSkills",
                JSON.stringify(skills)
            );


            localStorage.setItem(
                "resumeLanguages",
                JSON.stringify(languages)
            );


            localStorage.setItem(
                "resumeCertifications",
                JSON.stringify(certifications)
            );


            localStorage.setItem(
                "resumeAchievements",
                JSON.stringify(achievements)
            );


            window.location.href =
                "preview.html";

        }
    );

});