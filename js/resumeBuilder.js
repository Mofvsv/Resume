var name = "Mustaf Eli";
var role = "web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);

var bio = {
    "name": "Mustaf Eli",
    "role": "Software Developer",
    "contact info": {
        "mobile": "555-555-55555",
        "github": "@Mofvsv",
        "location": "Seattle"
    },
    "Welcome message": "welcome welcome",
    "skills": ["awesomeness", "delievering things", "cryogenic sleep", "saving the universe"],
    "bio pic": "image/fry.jpg"
};

var work = {};
work.position = "System Integrater";
work.employer = " Udacity";
work.years = 3;

var education = {};
education["name"] =  "Tennessee State Univ";
education["years"] = "2010 - 2014";
education["city"] = "Nashville";

$("#main").append(work["position"]);
$("#main").append(education.name);