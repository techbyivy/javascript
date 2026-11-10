
function calculateGrade() {
    let studentName = document.getElementById("studentName").value.trim();
    let marksInput = document.getElementById("marks").value.trim();

    //console.log(typeof(marksInput)) //string
    let marks = Number(marksInput) //type conversion 
    //console.log(typeof(marks)) //number

    //input validation

    //checking if the student name is empty
    if (studentName === "") {
        alert("Please Enter the STudent name!!")
        return;
    }

    //checking is the marks input is empty
    if (marksInput === "") {
        alert("enter student marks")
        return;
    }
    //check if the marks are in range
    if (marks < 0 || marks > 100) {
        alert("Marks out of range!!")
        return;
    }
    /**
     * 0-49 => not yet 
     * 50 - 60 => competent
     * 61-70 => proficiency
     * 71-100 => mastery
     */

    if (marks < 50) {
        alert(`${studentName} is Not yet Competent`) //use this
        //alert(studentName + "is not yet Competent");
    } else if (marks >= 50 && marks <= 60) {
        alert(`${studentName} is competent`);
    } else if (marks >= 61 && marks <= 70) {
        alert(`${studentName} is proficient`)
    } else {
        alert(`${studentName} is a Master`)
    }





}