// HANDS-ON 1: Smart Login Status Engine
let isLoggedIn = true;
let isProfileComplete = false;
if (isLoggedIn) {
    if (isProfileComplete) {
        console.log("welcome back");
    } else {
        console.log("complete your profile");
    }
} else {
    console.log("please log in");
}

//HANDS-ON 2: Course Price Tag Labeler
let price = 1299;
if(price<500){
    label="budget course";
}else if(price>=500 && price<=1000){
        label="standard course";
    }else{
        label="premium course";
    }
    console.log("course price label is: "+ label);

//HANDS-ON 3: Enrollment Eligibility Checker
let hasPaid = true;
let hasCompletedBasics = false;
let enroll_msg = (hasPaid&&hasCompletedBasics)?"enroll now":"complete requriements"
console.log(enroll_msg)