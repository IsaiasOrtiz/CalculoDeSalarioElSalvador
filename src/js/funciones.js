function calcularSalario(){
    let salario = document.getElementById("idSalario").value;
    if(salario == ""){}
    console.log("Salario: " + salario);
    document.getElementById("idIsss").innerHTML = "$"+ Math.round(calcularIsss(salario) * 100) / 100; 
    document.getElementById("idAfp").innerHTML = "$"+ Math.round(calcularAfp(salario) * 100) / 100; 
    document.getElementById("idRenta").innerHTML = "$"+ Math.round(calcularRenta(salario) * 100) / 100;
    document.getElementById("idSalarioMes").innerHTML =  "$"+ Math.round(sueldoNeto(salario) * 100) / 100;
    document.getElementById("idSalario15").innerHTML =  "$"+ (Math.round((sueldoNeto(salario)/2) * 100) / 100);
    document.getElementById("idCalculoFinal").style.display = 'block';
}
function cerrar(){
    document.getElementById("idError").style.display = 'none';
}

//data-bs-toggle="modal" data-bs-target="#exampleModal
var botonCalcular = document.getElementById("idCalcular");
var botonCerrarError = document.getElementById("btnCerrar");
botonCerrarError.addEventListener("click",cerrar, false );
botonCalcular.addEventListener("click", calcularSalario , false);
document.getElementById("idCalculoFinal").style.display = 'none';



