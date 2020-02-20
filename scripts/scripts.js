var employees = [];
// 0 name
// 1 Department
// 2 emp id
// 3 hire date

function addEmp() {
  "use strict";
  var name = document.getElementById("lastname").value + ", " + document.getElementById("firstname").value;
  var departmentSelect = document.getElementById("select-department");
  var department = departmentSelect.options[departmentSelect.selectedIndex].value;
  var empId = Math.random()
    .toString()
    .slice(2, 10);

  while (employees.includes(empId)) {
    empId = Math.random()
      .toString()
      .slice(2, 10);
  }

  var d = new Date();
  var week = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayOfWeek = week[d.getDay()];
  var month = month[d.getMonth()];
  var date = d.getDate();
  var year = d.getFullYear();

  var hireDate = dayOfWeek + " " + month + " " + date + " " + year;

  employees.push(name);
  employees.push(department);
  employees.push(empId);
  employees.push(hireDate);

  var totalEmps = employees.length / 4;

  var jsonEmp = '{ "name":"' + name + '" , "department":"' + department + '" , "empId":"' + empId + '" , "hireDate":"' + hireDate + '" , "totalEmps":"' + totalEmps + '" }';

  $.ajax({
    url: "submit.php",
    data: { employee: jsonEmp },
    type: "post",
    success: function(data) {
      var empObj = JSON.parse(data);

      document.getElementById("name").innerHTML = empObj[0];
      document.getElementById("department").innerHTML = empObj[1];
      document.getElementById("emp-id").innerHTML = empObj[2];
      document.getElementById("hire-date").innerHTML = empObj[3];

      document.getElementById("total-emps").innerHTML = empObj[4];
    }
  });

  document.getElementById("echo-result").classList.remove("display-none");

  return false;
}

function init() {
  "use strict";
  document.getElementById("user-browser").innerHTML = navigator.userAgent;
  document.getElementById("theForm").onsubmit = addEmp;
} // End of init() function.
window.onload = init;
