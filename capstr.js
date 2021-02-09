function capS(str){
    //var str = document.getElementById('str').value;
    str = str.value;
    var sr = str.split(' ');
    var le= sr.length;
    for(i = 0; i < le; i++){
        console.log('inside i ' + sr[i] + '<br>');
        var f = sr[i][0].toUpperCase();
        sr[i] = f + sr[i].slice(1);
        console.log('inside '+ i + sr[i] + '<br>');
    }
    str='';
    for(i = 0; i < le; i++){
        str = str + ' ' + sr[i];
        console.log('inside '+ str + '<br>');  
    }  
    document.getElementById('capstr').innerHTML = str;
}