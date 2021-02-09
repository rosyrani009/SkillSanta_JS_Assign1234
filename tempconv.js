function convtoF(tempc){
    console.log(tempc);
    tempc = tempc.value;
    console.log(tempc);
    var ftemp = tempc * 9 / 5 + 32;
    console.log(tempc + ' ' + ftemp);
    document.getElementById('t').innerHTML = tempc + '&#8451; is ' + ftemp + '&#8457;';

}
function convtoC(tempf){
    tempf = tempf.value;
    console.log(tempf);
    var ctemp = (tempf - 32) * 5 / 9;
    console.log(tempf + ' ' + ctemp);
    document.getElementById('t').innerHTML = tempf + '&#8457; is ' + ctemp + '&#8451;';
}