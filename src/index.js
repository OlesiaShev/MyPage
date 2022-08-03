function displaySkills()
{
    let SkillsElement = document.querySelector("#display-Skills");
    let skillsHTML = `<div class="container">
            <div class="row">`;
    skillsList = ["About", "Projects", "Skills", "Certificates", "Contacts", "CV"];
    skillsList.forEach(function (skill)
    {
        skillsHTML = skillsHTML +
            `
            <div class="col-4 col-md-2">
            
                <h6>
                <a href="#${skill}" class="links">${skill}</a>
                </h6>
            </div>`       
    });
    SkillsElement.innerHTML = skillsHTML + `</div></div>`;
}
displaySkills();


