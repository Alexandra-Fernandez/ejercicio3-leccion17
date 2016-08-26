var num = parseInt(prompt("Ingresa un número"));

if (num > 101) {
	window.alert("numeros del 1 al 100");    
}
else{
	if (num % 2! = 0) 
        window.alert("odd!");    
	else {
		if (num >= 2 && num < 5) 
       	 	window.alert("good");
		else {
			if (num <= 6 && num <= 20)
        		window.alert("great");
    		else {
    			if(num > 20) 
					window.alert("perfect");
			}
		}
	}
}