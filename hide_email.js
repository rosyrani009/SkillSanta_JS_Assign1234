function hideemail(){
    var emailid,dmnnm,em1;
    emailid = document.getElementById('email').value;
    //document.write(emailid);
    var s = emailid.split('@');
    em1 = s[0];
    dmnnm = s[1];
    var a = em1.length / 2;
    em1 = em1.substring(0, (em1.length - a));
    emailid = em1 + '.....@' + dmnnm;
    document.getElementById('emailid').innerHTML = emailid;
    //return em1 + '.....@' + dmnnm;
    //document.write(emailid);

}