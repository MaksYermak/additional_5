module.exports = function check(str, bracketsConfig) {
	var stack = [];
	var balanced = true;

	for(var i = 0; i < str.length && balanced; i++){
		var symbol = str[i];

		for(var j = 0; j < bracketsConfig.length; j++){
			if (symbol == bracketsConfig[j][0]){
				if (symbol == bracketsConfig[j][1]){
					if(stack.length == 0 || stack[stack.length-1] != symbol){
						stack.push(symbol);
						break;
					}else{
						stack.pop();
						balanced = true;
						break;
					}
				}
				stack.push(symbol);
				break;
			}
			else{
				if (j + 1 != bracketsConfig.length)
					continue;
				if(stack.length == 0){
					balanced = false;
				}
				else{
					for(var k = 0; k < bracketsConfig.length; k++){
						if(stack[stack.length-1] == bracketsConfig[k][0] && symbol == bracketsConfig[k][1]){
							stack.pop();
							balanced =true;
							break;
						}else{
							balanced = false;
						}
					}
				}
			}
		}
	}

	if(balanced && stack.length == 0)
		return true;
	else
		return false;
}
