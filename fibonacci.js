function fib(n){
 n = n.value;
 console.log(n);
 var arr = [0, 1];
 for(i = 0; i < n - 2; i++){
     
     arr[i + 2] = arr[i] + arr[i + 1];
 }
 document.getElementById("fiboser").innerHTML = arr;
}