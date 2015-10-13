function outerFunc(param){
	var privateVar = 5;
  var innerFunc = function (input){
        var product = privateVar*input*param;
     alert('Multiplication result is '+product);

  }
  return innerFunc;
}
var closureFunc = outerFunc(12);
closureFunc(4);
