var anonymousFunc=function(email){
   var filter=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
 if (filter.test(email))
testresults=true
else{
testresults=false
}
return (testresults)
    
}
alert(anonymousFunc("chandni"));
console.log(anonymousFunc("chandni@gmail.com"));