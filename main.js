var pets = [];

function addPet() {
    event.preventDefault();
    let newPet = {
        "petName": document.getElementById("fname").value,
        "petBreed": document.getElementById("fbreed").value,
        "petOwner": document.getElementById("fowner").value,
        "phone": document.getElementById("fphone").value
    }
    resetForm();
    pets.push(newPet);
    renderTable();
}

function removePet(index){
    pets.splice(index,1);
    renderTable();
}

function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML =  `             <tr>
    <th>ID</th>
    <th>Nome do Pet</th>
    <th>Raça</th>
    <th>Dono Do Pet</th>
    <th>Telefone</th>
    <th>Remover</th>

</tr>`;

    console.log(pets.length);

    for(let i = 0; i < pets.length; i++)
    {

        
        table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${pets[i].petName}</td>
        <td>${pets[i].petBreed}</td>
        <td>${pets[i].petOwner}</td>
        <td>${pets[i].phone}</td>
        <td><img src="img/remove.png" width="25px" height="25px" onclick="removePet(${i})"></td>
    </tr>`
    }
}

function resetForm(){
    document.getElementById("fname").value = "";
    document.getElementById("fbreed").value = "";
    document.getElementById("fowner").value = "";
    document.getElementById("fphone").value = "";
}

renderTable();