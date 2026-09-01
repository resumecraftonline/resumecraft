document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       GET DATA
    ========================= */

    const template =
        localStorage.getItem(
            "resumeTemplate"
        ) || "classic";


    const personal =
        JSON.parse(
            localStorage.getItem(
                "resumePersonal"
            )
        ) || {};


    const education =
        JSON.parse(
            localStorage.getItem(
                "resumeEducation"
            )
        ) || [];


    const experience =
        JSON.parse(
            localStorage.getItem(
                "resumeExperience"
            )
        ) || [];


    const skills =
        JSON.parse(
            localStorage.getItem(
                "resumeSkills"
            )
        ) || [];


    const languages =
        JSON.parse(
            localStorage.getItem(
                "resumeLanguages"
            )
        ) || [];


    const certifications =
        JSON.parse(
            localStorage.getItem(
                "resumeCertifications"
            )
        ) || [];


    const achievements =
        JSON.parse(
            localStorage.getItem(
                "resumeAchievements"
            )
        ) || [];


    const resume =
        document.getElementById("resume");


    /* =========================
       SAFE TEXT
    ========================= */

    function escapeHTML(text) {

        if (!text) {
            return "";
        }

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }


    /* =========================
       CREATE CONTACT
    ========================= */

    const contactItems = [];


    if (personal.email) {

        contactItems.push(
            escapeHTML(personal.email)
        );

    }


    if (personal.phone) {

        contactItems.push(
            escapeHTML(personal.phone)
        );

    }


    if (personal.location) {

        contactItems.push(
            escapeHTML(personal.location)
        );

    }


    if (personal.linkedin) {

        contactItems.push(
            escapeHTML(personal.linkedin)
        );

    }


    if (personal.portfolio) {

        contactItems.push(
            escapeHTML(personal.portfolio)
        );

    }


    /* =========================
       EDUCATION HTML
    ========================= */

    let educationHTML = "";


    education.forEach(function (item) {

        const years =
            [
                item.startYear,
                item.endYear
            ]
            .filter(Boolean)
            .join(" - ");


        educationHTML += `

            <div class="resume-entry">

                <div class="entry-main">

                    <h4>
                        ${escapeHTML(item.degree)}
                    </h4>

                    <strong>
                        ${escapeHTML(item.institution)}
                    </strong>

                    <p>
                        ${escapeHTML(item.field)}
                    </p>

                    <p>
                        ${item.grade ?
                            "Grade: " +
                            escapeHTML(item.grade)
                            : ""
                        }
                    </p>

                </div>

                <span class="entry-date">
                    ${escapeHTML(years)}
                </span>

            </div>

        `;

    });


    /* =========================
       EXPERIENCE HTML
    ========================= */

    let experienceHTML = "";


    experience.forEach(function (item) {

        const dates =
            [
                item.startDate,
                item.endDate
            ]
            .filter(Boolean)
            .join(" - ");


        experienceHTML += `

            <div class="resume-entry">

                <div class="entry-main">

                    <h4>
                        ${escapeHTML(item.jobTitle)}
                    </h4>

                    <strong>
                        ${escapeHTML(item.company)}
                    </strong>

                    <p>
                        ${escapeHTML(item.location)}
                    </p>

                    <p class="description">
                        ${escapeHTML(item.description)}
                    </p>

                </div>

                <span class="entry-date">
                    ${escapeHTML(dates)}
                </span>

            </div>

        `;

    });


    /* =========================
       SKILLS HTML
    ========================= */

    let skillsHTML = "";


    if (skills.length > 0) {

        skillsHTML = `

            <div class="resume-section">

                <h3>Skills</h3>

                <div class="resume-tags">

                    ${skills.map(function (skill) {

                        return `
                            <span>
                                ${escapeHTML(skill)}
                            </span>
                        `;

                    }).join("")}

                </div>

            </div>

        `;

    }


    /* =========================
       LANGUAGES HTML
    ========================= */

    let languagesHTML = "";


    if (languages.length > 0) {

        languagesHTML = `

            <div class="resume-section">

                <h3>Languages</h3>

                <div class="resume-tags">

                    ${languages.map(function (language) {

                        return `
                            <span>
                                ${escapeHTML(language)}
                            </span>
                        `;

                    }).join("")}

                </div>

            </div>

        `;

    }


    /* =========================
       CERTIFICATIONS HTML
    ========================= */

    let certificationsHTML = "";


    if (certifications.length > 0) {

        certificationsHTML = `

            <div class="resume-section">

                <h3>Certifications</h3>

                ${certifications.map(function (item) {

                    return `

                        <div class="simple-entry">

                            <strong>
                                ${escapeHTML(item.name)}
                            </strong>

                            <span>
                                ${escapeHTML(
                                    [
                                        item.organization,
                                        item.year
                                    ]
                                    .filter(Boolean)
                                    .join(" • ")
                                )}
                            </span>

                        </div>

                    `;

                }).join("")}

            </div>

        `;

    }


    /* =========================
       ACHIEVEMENTS HTML
    ========================= */

    let achievementsHTML = "";


    if (achievements.length > 0) {

        achievementsHTML = `

            <div class="resume-section">

                <h3>Achievements</h3>

                ${achievements.map(function (item) {

                    return `

                        <div class="simple-entry">

                            <strong>
                                ${escapeHTML(item.title)}
                            </strong>

                            <p>
                                ${escapeHTML(item.description)}
                            </p>

                        </div>

                    `;

                }).join("")}

            </div>

        `;

    }


    /* =========================
       CREATE RESUME
    ========================= */

    resume.className =
        "resume " + template;


    resume.innerHTML = `

        <div class="resume-header">


            <div class="resume-profile">

                ${personal.photo
                    ? `
                        <img
                            src="${personal.photo}"
                            alt="Profile Photo">
                    `
                    : ""
                }

            </div>


            <div class="resume-name-area">

                <h1>
                    ${escapeHTML(
                        personal.fullName ||
                        "Your Name"
                    )}
                </h1>

                <h2>
                    ${escapeHTML(
                        personal.jobTitle
                    )}
                </h2>


                <div class="resume-contact">

                    ${contactItems.join(
                        '<span>•</span>'
                    )}

                </div>

            </div>


        </div>


        ${personal.summary
            ? `

                <div class="resume-section">

                    <h3>
                        Professional Summary
                    </h3>

                    <p class="summary">

                        ${escapeHTML(
                            personal.summary
                        )}

                    </p>

                </div>

            `
            : ""
        }


        ${educationHTML
            ? `

                <div class="resume-section">

                    <h3>
                        Education
                    </h3>

                    ${educationHTML}

                </div>

            `
            : ""
        }


        ${experienceHTML
            ? `

                <div class="resume-section">

                    <h3>
                        Work Experience
                    </h3>

                    ${experienceHTML}

                </div>

            `
            : ""
        }


        ${skillsHTML}


        ${languagesHTML}


        ${certificationsHTML}


        ${achievementsHTML}

    `;


    /* =========================
       EDIT BUTTON
    ========================= */

    document.getElementById(
        "editResume"
    ).addEventListener(
        "click",
        function () {

            window.location.href =
                "personal.html";

        }
    );


    /* =========================
       PRINT / PDF
    ========================= */

    function printResume() {

        window.print();

    }


    document.getElementById(
        "printResume"
    ).addEventListener(
        "click",
        printResume
    );


    document.getElementById(
        "downloadPDF"
    ).addEventListener(
        "click",
        printResume
    );


    document.getElementById(
        "downloadPDFTop"
    ).addEventListener(
        "click",
        printResume
    );


    document.getElementById(
        "downloadPDFBottom"
    ).addEventListener(
        "click",
        printResume
    );


    /* =========================
       CREATE NEW
    ========================= */

    document.getElementById(
        "createNew"
    ).addEventListener(
        "click",
        function () {

            const confirmNew =
                confirm(
                    "Create a new resume? Current resume data will be removed."
                );


            if (confirmNew) {

                localStorage.removeItem(
                    "resumeTemplate"
                );

                localStorage.removeItem(
                    "resumePersonal"
                );

                localStorage.removeItem(
                    "resumeEducation"
                );

                localStorage.removeItem(
                    "resumeExperience"
                );

                localStorage.removeItem(
                    "resumeSkills"
                );

                localStorage.removeItem(
                    "resumeLanguages"
                );

                localStorage.removeItem(
                    "resumeCertifications"
                );

                localStorage.removeItem(
                    "resumeAchievements"
                );


                window.location.href =
                    "templates.html";

            }

        }
    );

});