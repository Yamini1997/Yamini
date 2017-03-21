<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>
var person = new Object();
person.firstName = "Ed";
person.lastName = "Sheeran";
person.course1 = "Math";
person.course2 = "English";
person.Marks1 = "65";
person.Marks2 = "80";

document.getElementById("demo").innerHTML =
" Name: " + person.firstName + "  " + person.lastName + " Course: " + person.course1 + " Marks: " + person.Marks1  + " Course: " + person.course2 + " Marks: " + person.Marks2;
</script>
</body>
</html>
