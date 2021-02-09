//var a = -1;
//var b = 4;
//var c = 0;

function sortnumb(a,b,c) {
//document.write(a + ',' + b + ',' + c);
    a = parseInt(a.value);
    b = parseInt(b.value);
    c = parseInt(c.value);
    ty = typeof a;
    console.log(ty);
    
    
    for(i = 0; i < 3; i++){
        if(a<b){
            temp=a;
            a=b;
            b=temp;
            console.log(i + ' if ' + a +' ' + b + ' ' + c);
        } else if(b < c) {
                temp=b;
                b=c;
                c=temp;
                console.log(i + ' elseif ' + a +' ' + b + ' ' + c);
            } else {
                    console.log(i + 'else ' + a +' ' + b + ' ' + c);
                }
     }
                    
    

    alert('Numbers in sorted order :- ' + a +' ' + b + ' ' + c);
}
