function outerFunc(param) {
	function innerFunc(input) {
		return input * 4;
	}
	return 'The result is ' + innerFunc(param);
}
alert(outerFunc(12));