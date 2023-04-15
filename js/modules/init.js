async function fetchEmployees() {
    try {
        const response = await fetch('../data/employees.json');
        const employees = await response.json();
        console.log(employees);
        return employees;
    }
    catch (error) {
        console.log(error);
    }
}

export default fetchEmployees