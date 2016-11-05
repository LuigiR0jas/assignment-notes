var id = document.getElementById('id'),
    namae = document.getElementById('namae'),
    lastname = document.getElementById('lastname'),
    address = document.getElementById('address'),
    save = document.getElementById('save'),
    list = document.getElementById('list'),
    registro;

 function fetchRegisters(){
   let XHR = new XMLHttpRequest();
   XHR.open('get', 'https://glacial-eyrie-58697.herokuapp.com/', 'true');
   XHR.onload = fetchRegistersSuccessful;
   XHR.send();
 }

 function fetchRegistersSuccessful(response){
    registro = JSON.parse(response.target.response);
    console.log(registro);
    render();
}

function render(){
   console.log('fuck');
   let tablebody = document.querySelector('#listTable tbody');
   registro.forEach(function(registros, index){
      tablebody.insertRow(index);

      for(let i=0; i < 5; i++){
         tablebody.rows[index].insertCell(i);
      }
      tablebody.row[index].cells[0].textContent = registro.cedula;
      tablebody.rows[index].cells[1].textContent = registro.nombres;
      tablebody.rows[index].cells[2].textContent = registro.apellidos;
      tablebody.rows[index].cells[3].textContent = registro.fecha_nacimiento;
      tablebody.rows[index].cells[4].textContent = registro.dirección;
      console.log(index);
   });
}
fetchRegisters();

function calculate(){
   var a = id.value;
   var b = namae.value;
   console.log(id.value);
   console.log(namae.value);
   var err = [1];
   var root = [];
   var lel = true;
   var i = 0;

   for (i = 0; err[i] >= 0.01 ; i++) {
      root[i] = (a + b)/2;
      console.log(root[i]);

      if (err[i-1] !== undefined) {
         err[i] = ((root[i] - root[i-1])/ root[i]) * 100;
         console.log(err[i]);
      } else {

      }
      if(lel){
         a = root[i];
         lel = false;
      } else {
         b = root[i];
         lel = true;
      }
   }
}

save.onclick = calculate;
