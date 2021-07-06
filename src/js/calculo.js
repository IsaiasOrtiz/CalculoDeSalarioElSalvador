/**
 * Autor: Douglas Valle
 * Desarrolado 05-07-2021
 * 
 * Calculo basado en tabla de retención de renta actuales y vigentes aún en Julio 2021
 */


/**
 * Retorna el ISSS que se le descuenta en base al salario.
 * 
 * @param {Salario a calcular el ISSS} salario 
 * @returns 
 */
function calcularIsss(salario){
    isss=0;
    if (salario >= 1000) {
        isss = 30;
    } else if (salario > 0 && salario < 1000) {
        isss = salario * 0.03;
    }
    return isss;
}
/**
 * Calculo de AFP en base al salario.
 * 
 * @param {Salario a calcular el AFP} salario 
 * @returns 
 */
function calcularAfp(salario)
{
     var afp = 0;
     afp = salario * 0.0725;
     return afp;
}

/**
 * Tabla: http://2.bp.blogspot.com/-ZA1RXiNNfOg/VprImDcFzZI/AAAAAAAAAtg/zHE2iZLEuZM/s640/Nuevas-tablas-de-renta-2016-El-Salvador.png
 * 
 * @param {Calculamos la renta en base al Salario} salario 
 * @returns 
 */
function calcularRenta(salario){
    var renta = 0;
        var salarioMenosAfpIsss = salario - (calcularAfp(salario) + calcularIsss(salario));
        if (salarioMenosAfpIsss < 470) {
            renta = 0;
        } else if (salarioMenosAfpIsss > 470 && salarioMenosAfpIsss < 895.24) {
            renta = ((salarioMenosAfpIsss-472)*0.10)+17.67;
        } else if (salarioMenosAfpIsss > 895.25 && salarioMenosAfpIsss < 2038.1) {
            renta = ((salarioMenosAfpIsss-895.24)*0.20)+60;
        } else if (salarioMenosAfpIsss > 2038.11) {
            renta = ((salarioMenosAfpIsss-2038.10)*0.30)+288.57;
        }
        return renta;
}

/**
 * Calculando salario con todos los decuentos de ley.
 * 
 * @param {Calculamos salario neto en base a el Salario} salario 
 * @returns 
 */
function sueldoNeto(salario)
{
     var salarioN=salario - (calcularIsss(salario)+calcularAfp(salario)+calcularRenta(salario));
     return salarioN;
}