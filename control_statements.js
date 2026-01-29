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


// course price tag labeler
let price = 1299;
if(price<500){
    label="budget course";
}else if(price>=500 && price<=1000){
        label="standard course";
    }else{
        label="premium course";
    }
    console.log("course price label is: "+ label);