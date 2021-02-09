function wrdsrch(strsrh, wsrch){
    strsrh = strsrh.value;
    wsrch = wsrch.value;
    var ssrch;
    var b = strsrh.includes(',');

    if (b == true){
        strsrh = strsrh.replace(/,/g, ' ');
    }
    
    ssrch = strsrh.split(' ');
    wsrch = wsrch.trim();
    var count = 0;
    for(i = 0; i < strsrh.length; i++){
        if(ssrch[i] == wsrch){
            count++;
        }
    }
    var msg = wsrch + ' was found ' + count + ' times';
    document.getElementById("wrdserch").innerHTML = msg;
}
//the quick brown fox