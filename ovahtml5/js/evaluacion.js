alert("Continúa a pesar de que todos esperen que abandones. No dejes que se oxide el hierro que hay en ti. ¡CONCENTRATE EN TU EVALUACION!");

var estudiantes=Object();
var salida='';
function guardarPregunta(){
preguntas.prg= document.getElementById('prg').value;
preguntas.opc1= document.getElementById('opc1').value;
preguntas.opc2= document.getElementById('opc2').value;
preguntas.opc3= document.getElementById('opc3').value;
preguntas.opc4= document.getElementById('opc4').value;
preguntas.respC= document.getElementById('respC').value;
preguntas.respE= 64;
listadosPreguntas();
limpiarCajas();
}
function limpiarCajas(){ document.getElementById('prg').value;
 document.getElementById('prg').value='';
 document.getElementById('opc1').value='';
 document.getElementById('opc2').value='';
 document.getElementById('opc3').value='';
 document.getElementById('opc4').value='';
 document.getElementById('respC').value='';
 document.getElementById('prg').focus();

}
function listadosPreguntas(){
    salida+='<tr><td>'+preguntas.prg+'</td><td>'+preguntas.opc1+'</td><td>'+preguntas.opc2+'</td><td>'+preguntas.opc3+'</td><td>'+preguntas.opc4+'</td><td>'+preguntas.respC+'</td><td>'+preguntas.respE+'</td></tr>'
    document.getElementById('cuerpo').innerHTML=salida;
}