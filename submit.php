<?php

if (isset($_POST['employee']) && !empty($_POST['employee'])) {
    $employee = $_POST['employee'];
    $employeeObj = json_decode($employee);

    $employeeEcho = array();
    $employeeEcho[0] = $employeeObj->name;
    $employeeEcho[1] = $employeeObj->department;
    $employeeEcho[2] = $employeeObj->empId;
    $employeeEcho[3] = $employeeObj->hireDate;
    $employeeEcho[4] = $employeeObj->totalEmps;

    echo json_encode($employeeEcho);
}
