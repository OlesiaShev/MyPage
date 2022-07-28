function displaySkills()
{
    let SkillsElement = document.querySelector("#display-Skills");
    let skillsHTML = "";
    skillsList = ["About", "Projects", "Skills", "Sertificates", "Contacts", "CV"];
    skillsList.forEach(function (skill)
    {
        skillsHTML = skillsHTML +
            `<div class="categories">
                <h6>
                <a href="#${skill}" class="links">${skill}</a>
                </h6>
            </div>`       
    });
    SkillsElement.innerHTML = skillsHTML;
}
displaySkills();
function showLanguageSign(event){
event.preventDefault();
    alert("hello!");
}

let currentLanguage = document.querySelector("languageChange");
currentLanguage.addEventListener("click", showLanguageSign);

