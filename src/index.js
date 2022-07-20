function displaySkills()
{
    let SkillsElement = document.querySelector("#display-Skills");
    let skillsHTML = "";
    skillsList = ["About me", "Projects", "Skills", "Sertificates", "Contacts", "CV"];
    skillsList.forEach(function (skill)
    {
        skillsHTML = skillsHTML +
            `<div class="col-4 col-sm-2">
                <h6>
                    ${skill}
                </h6>
            </div>`       
    });
    SkillsElement.innerHTML = skillsHTML;
}
displaySkills();
