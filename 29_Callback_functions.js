console.log("This is tutorial of callback function");

// Pretend that this response is coming from the server
const students = [
    {name: "Rijvi", subject: "JavaScript"},
    {name: "Ahmed", subject: "Machine Learning"}
]


function enrollStudent(student, callback){
    setTimeout(function() {
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function() {
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 2000);
}

let newStudent = {name:"Sunny", subject:"Python"}
enrollStudent(newStudent, getStudents);
 getStudents();

