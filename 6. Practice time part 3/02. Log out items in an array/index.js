let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]
const logbuttn = document.getElementById("buttn");
// Create a function that takes a single parameter, an array,
 logbuttn.addEventListener("click", function(nycourses){
    mycourses= myCourses;
    for(i =0; i< mycourses.length; i++)
    {
        console.log(mycourses[i]);
    }
})
   

// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument
