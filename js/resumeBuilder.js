// var name = "Mustaf Eli";
// var role = "web Developer";
// var formattedName = HTMLheaderName.replace("%data%", name);
// $("#header").prepend(formattedName);
// $("#header").append(formattedRole);

var work = {
    "jobs": [
        {
            "employer": "boeing",
            "title": "system integrator",
            "location": "Bellevue",
            "dates": "2014 - 2015"
        }
    ]
}
var projects = {
    "projects": [
        {
            "title": "",
            "dates": ""
        }
    ]
}
var bio = {
    "name": "Mustaf Eli",
    "role": "Software Developer",
    "contact info": {
        "mobile": "555-555-55555",
        "github": "@Mofvsv",
        "Email": "elimustaf@gmail.com",
        "location": "Seattle"
    },
    "Welcome message": "Eager to help with your next project",
    "skills": ["Python", "C#", "Javascript", "awesomeness", "delievering things", "cryogenic sleep", "saving the universe"],
    "bio pic": "image/fry.jpg"

}

var education = {
    "school": [
        {
            "name": "Tennessee State Univ",
            "Location": "Nashville",
            "major": "Information System"
        }
    ],
    "online courses": [
        {
            "name": "JavaScript",
            "school": "Udacity",
        }
    ]
}

if (bio.name) {
    var formattedName = HTMLheaderName.replace('%data%', bio.name)
    $('#header').prepend(formattedName);
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedskill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedskill);
    formattedskill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedskill);
    formattedskill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedskill);
    formattedskill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedskill);
}