function oddeven(){
    document.getElementById("numdiv").innerHTML='';
    var n = document.getElementById('n').value;
    var j,pr;
    for(j = 0; j < n; j++) {
    //document.write(j + "<br>");
    if(j % 2 == 0){
        pr = primechk(j);
        //document.write(j +' is even' + pr + "<br>");
        document.getElementById("numdiv").innerHTML += j +' is even' + pr + "<br>";
        } else {
            pr = primechk(j);
            //document.write(j +' is odd' + pr + "<br>");
            document.getElementById("numdiv").innerHTML += j +' is odd' + pr + "<br>";
        }
    }
    
}

function primechk(j) {
    var k,p,flag = true;
    if(j != 0 && j != 1){
        for(k = 2; k <= j - 1; k++){
            if(j % k == 0){
                flag = false;
                break;
            }
        }
    } else{
        flag = false;
    }
    if(flag == true){
        p = " and prime";
    } else{
        p = "";
    }
        
    return p;
}