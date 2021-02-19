var names = []
function submit(){
    var student1 = document.getElementById("student_1").value;
    var student2 = document.getElementById("student_2").value;
    var student3 = document.getElementById("student_3").value;
    var student4 = document.getElementById("student_4").value;
    names.push(student1)
    names.push(student2)
    names.push(student3)
    names.push(student4)
    console.log(names)
    document.getElementById("showingface").innerHTML = names

    document.getElementById("submit").style.display = "none"

    document.getElementById("Sort").style.display = "inline-block"
}

function sort(){
    names.sort()
    console.log(names)
    document.getElementById("showingface").innerHTML = names
}