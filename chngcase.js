function casechange(chncase){
    chncase = chncase.value;
    var splstr = chncase.split(' ');
    chncase = '';var ls;
    for(i = 0; i < splstr.length; i++){
        for(j = 0; j < splstr[i].length; j++){
            ls = splstr[i][j];
            
            if(ls == ls.toLowerCase()){
                ls = ls.toUpperCase();
                //console.log('inside if ' + j + ls);
            } else {
                ls = ls.toLowerCase();
                //console.log('inside else ' + j + ls);
            }
            
            //splstr[i] = ls;
            if(j == splstr[i].length - 1){
                chncase = chncase + ls + ' ';
            } else{
                chncase = chncase + ls;
            }
            //console.log('inside j ' + j + chncase );
        }
             
    }
    document.getElementById("chngdcase").innerHTML = chncase;
}
//rAr The