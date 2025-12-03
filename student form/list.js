function save(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var course = document.getElementById("Course").value;
    var email = document.getElementById("email").value;

    var table = document.getElementById("list");
    var newrow= table.insertRow(-1);

    newrow.insertCell(0).innerHTML = name;
    newrow.insertCell(1).innerHTML = age;
    newrow.insertCell(2).innerHTML = course;
    newrow.insertCell(3).innerHTML = gender;
    newrow.insertCell(4).innerHTML = email;

   var actioncell = newrow.insertCell(5);
   var delbtn = document.createElement("button");
   delbtn.innerHTML = "Delete";
   delbtn.onclick = function(){
    table.deleteRow(newrow.rowIndex);
   };

   actioncell.appendChild(delbtn);

}