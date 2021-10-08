const work = document.querySelector(".workHeading");
const skill = document.querySelector(".skillHeading");
const projects = document.querySelector(".projects");
const skillSet = document.querySelector(".skillSet")
const workExpandButton = document.getElementById("workRotateButton");
const skillExpandButton = document.getElementById("skillRotateButton");
let workActiveBar = 0;

work.onclick = function() {
    if(workActiveBar === 0) {
        let elementHeight = document.querySelector('.projects').scrollHeight;
        projects.style.height = elementHeight + "px";
        
        workActiveBar = 1;
        workExpandButton.style.transform = "rotate(90deg)";
    }
    else {
        workActiveBar = 0;
        projects.style.height = "0";
        workExpandButton.style.transform = "rotate(0deg)";
    } 
    workExpandButton.style.transition = "transform 0.5s 0s";
    projects.style.transition = "height 0.5s ease-out"
}

let skillActiveBar = 0;

let allSkillChild = skillSet.children;

skill.onclick = function() {
    if(skillActiveBar === 0) {
        let elementHeight = document.querySelector('.skillSet').scrollHeight;
        skillSet.style.height = elementHeight + "px";
        skillActiveBar = 1;
        skillExpandButton.style.transform = "rotate(90deg)";
    }
    else {
        skillActiveBar = 0;
        skillSet.style.height = "0";
        skillExpandButton.style.transform = "rotate(0deg)";
    } 
    skillExpandButton.style.transition = "transform 0.35s 0s";
    skillSet.style.transition = "height 0.35s ease-out"
}

skillSet.ontransitionend = () => {
    if(skillActiveBar === 0) {
        for(var i = 0; i < allSkillChild.length; i++) {
            allSkillChild[i].style.backgroundSize = "0% 100%";
        }
    }
    else {
        for(var i = 0; i < allSkillChild.length; i++) {
            allSkillChild[i].style.color = "var(--fc-bg)";
        }

        allSkillChild[0].style.backgroundSize = "80% 100%";
        allSkillChild[1].style.backgroundSize = "65% 100%";
        allSkillChild[2].style.backgroundSize = "70% 100%";
        allSkillChild[3].style.backgroundSize = "60% 100%";
    }
}