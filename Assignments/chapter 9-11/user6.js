var marksObtained = prompt("Please enter marks obtained")
var totalMarks = prompt("Enter your total Marks");
var result = (marksObtained/totalMarks)*100
if (result >= 80){
    document.write("<h1>Marks Sheet</h1></b></br>");
    document.write("Total Marks = " + totalMarks + "</br>");
    document.write("Marks Obtained = " + marksObtained + "</br>");
    document.write("Percentage: " + result + "%" + "</br>");
    document.write("Grade: A-one </br>");
    document.write("Remarks: Excellent </br>");
}
else if (result >=   70) {
    document.write("<h1>Marks Sheet</h1></b></br>");
    document.write("Total Marks = " + totalMarks + "</br>");
    document.write("Marks Obtained = " + marksObtained + "</br>");
    document.write("Percentage: " + result + "%" + "</br>");
    document.write("Grade A </br>")
    document.write("Remarks: Good </br>")
}
else if (result >=   60) {
    document.write("<h1>Marks Sheet</h1></b></br>");
    document.write("Total Marks = " + totalMarks + "</br>");
    document.write("Marks Obtained = " + marksObtained + "</br>");
    document.write("Percentage: " + result + "%" + "</br>");
    document.write("Grade B </br>")
    document.write("Remarks: You need to improve </br>")
}
else if (result < 60) {
    document.write("<h1>Marks Sheet</h1></b></br>");
    document.write("Total Marks = " + totalMarks + "</br>");
    document.write("Marks Obtained = " + marksObtained + "</br>");
    document.write("Percentage: " + result + "%" + "</br>");
    document.write("Grade Fail </br>")
    document.write("Remarks: Sorry </br>")

}
