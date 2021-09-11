function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["sexo"] = document.getElementById("sexo").value;
    formData["hobby"] = document.getElementById("hobby").value;
    formData["idade"] = document.getElementById("idade").value;
    formData["nascimento"] = document.getElementById("nascimento").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.lenght);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sexo;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.hobby;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.idade;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.nascimento;
    cell5.innerHTML = `<a onClick="onEdit">Editar</a>
                       <a>Deletar</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("hobby").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("nascimento").value = "";
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sexo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("hobby").value = selectedRow.cells[2].innerHTML;
    document.getElementById("idade").value = selectedRow.cells[3].innerHTML;
    document.getElementById("nascimento").value = selectedRow.cells[4].innerHTML;
}