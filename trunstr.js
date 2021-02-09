function trunS(trstr, trstrp){
    //var trstr = document.getElementById('tstr').value;
    //var trstrp = document.getElementById('tstrp').value;
    trstr = trstr.value;
    trstrp = trstrp.value;
    sp = trstr.split(' ');
    //var l = sp.length;
    trstr = '';
    for(i = 0; i < trstrp; i++){
        trstr = trstr + ' ' + sp[i];
        console.log(trstr);
    }
    document.getElementById('trunstr').innerHTML = trstr;
}

//abcdefg hijkl mno pqr stuvw