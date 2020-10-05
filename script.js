

var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
let clear = document.getElementById('clear');



input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

function myResult(){
	var inputTypeValue =  inputType.value;
	var resultTypeValue =  resultType.value;

	if(inputTypeValue === "NPR" && resultTypeValue === "INR"){
		result.value = Number(input.value) * 0.62;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 0.62 Indian Rupee";
	}else if(inputTypeValue === "NPR" && resultTypeValue === "AUD"){
		result.value = Number(input.value) * 0.012;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 0.012 Australian Dollar";
}else if(inputTypeValue === "NPR" && resultTypeValue === "USD"){
		result.value =Number(input.value) * 0.0085;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 0.0085 US Dollar";
}else if(inputTypeValue === "NPR" && resultTypeValue === "JPY"){
		result.value =Number(input.value) * 0.90;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 0.90 Yen";
}else if(inputTypeValue === "NPR" && resultTypeValue === "SAR"){
		result.value =Number(input.value) * 0.032;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 0.032 Saudi Riyal";
}else if(inputTypeValue === "NPR" && resultTypeValue === "NPR"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 Nepalese Rupee equals to 1 Nepalese Rupee";
}





if(inputTypeValue === "INR" && resultTypeValue === "NPR"){
		result.value = Number(input.value) * 1.60;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 1.60 Nepalese Rupee";
	}else if(inputTypeValue === "INR" && resultTypeValue === "AUD"){
		result.value = Number(input.value) * 0.019;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 0.019  Australian Dollar ";
}else if(inputTypeValue === "INR" && resultTypeValue === "USD"){
		result.value =Number(input.value) * 0.014;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 0.014  US Dollar ";
}else if(inputTypeValue === "INR" && resultTypeValue === "JPY"){
		result.value =Number(input.value) * 1.44;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 1.44  Yen ";
}else if(inputTypeValue === "INR" && resultTypeValue === "SAR"){
		result.value =Number(input.value) * 0.051;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 0.051  Saudi Riyal ";
}else if(inputTypeValue === "INR" && resultTypeValue === "INR"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 Indian Rupee equals to 1 Indian Rupee";
}



if(inputTypeValue === "AUD" && resultTypeValue === "NPR"){
		result.value = Number(input.value) * 84.09;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 84.09 Nepalese Rupee";
	}else if(inputTypeValue === "AUD" && resultTypeValue === "INR"){
		result.value = Number(input.value) * 52.54;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 52.54 Indian Rupee";
}else if(inputTypeValue === "AUD" && resultTypeValue === "USD"){
		result.value =Number(input.value) * 0.72;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 0.72 US Dollar";
}else if(inputTypeValue === "AUD" && resultTypeValue === "JPY"){
		result.value =Number(input.value) * 75.71;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 75.71 Yen";
}else if(inputTypeValue === "AUD" && resultTypeValue === "SAR"){
		result.value =Number(input.value) * 2.69;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 2.69 Saudi Riyal";
}else if(inputTypeValue === "AUD" && resultTypeValue === "AUD"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 Australian Dollar equals to 1 Australian Dollar";
}



if(inputTypeValue === "USD" && resultTypeValue === "NPR"){
		result.value = Number(input.value) * 117.26;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 117.26 Nepalese Rupee";
	}else if(inputTypeValue === "USD" && resultTypeValue === "INR"){
		result.value = Number(input.value) * 73.26;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 73.26 Indian Rupee";
}else if(inputTypeValue === "USD" && resultTypeValue === "AUD"){
		result.value =Number(input.value) * 1.39;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 1.39 Australian Dollar";
}else if(inputTypeValue === "USD" && resultTypeValue === "JPY"){
		result.value =Number(input.value) * 105.59;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 105.59 Yen";
}else if(inputTypeValue === "USD" && resultTypeValue === "SAR"){
		result.value =Number(input.value) * 3.75;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 3.75 Saudi Riyal";
}else if(inputTypeValue === "USD" && resultTypeValue === "USD"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 US Dollar equals to 1 US Dollar";
}




if(inputTypeValue === "JPY" && resultTypeValue === "NPR"){
		result.value = Number(input.value) * 1.11;
		document.getElementById('display').innerHTML = "1 Yen equals to 1.11 Nepalese Rupee";
	}else if(inputTypeValue === "JPY" && resultTypeValue === "INR"){
		result.value = Number(input.value) * 0.69;
		document.getElementById('display').innerHTML = "1 Yen equals to 0.69 Indian Rupee";
}else if(inputTypeValue === "JPY" && resultTypeValue === "AUD"){
		result.value =Number(input.value) * 0.013;
		document.getElementById('display').innerHTML = "1 Yen equals to 0.013  Australian Dollar";
}else if(inputTypeValue === "JPY" && resultTypeValue === "USD"){
		result.value =Number(input.value) * 0.0095;
		document.getElementById('display').innerHTML = "1 Yen equals to 0.0095 US Dollar";
}else if(inputTypeValue === "JPY" && resultTypeValue === "SAR"){
		result.value =Number(input.value) * 0.036;
		document.getElementById('display').innerHTML = "1 Yen equals to 0.036 Saudi Riyal";
}else if(inputTypeValue === "JPY" && resultTypeValue === "JPY"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 Yen equals to 1 Yen";
}




if(inputTypeValue === "SAR" && resultTypeValue === "NPR"){
		result.value = Number(input.value) * 31.27;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 31.27 Nepalese Rupee";
	}else if(inputTypeValue === "SAR" && resultTypeValue === "INR"){
		result.value = Number(input.value) * 19.53;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 19.53 Indian Rupee";
}else if(inputTypeValue === "SAR" && resultTypeValue === "AUD"){
		result.value =Number(input.value) * 0.37;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 0.37 Australian Dollar";
}else if(inputTypeValue === "SAR" && resultTypeValue === "USD"){
		result.value =Number(input.value) * 0.27;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 0.27  US Dollar";
}else if(inputTypeValue === "SAR" && resultTypeValue === "JPY"){
		result.value =Number(input.value) * 28.15;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 28.15 Yen";
}else if(inputTypeValue === "SAR" && resultTypeValue === "SAR"){
		result.value =input.value;
		document.getElementById('display').innerHTML = "1 Saudi Riyal equals to 1 Saudi Riyal";
}



}


clear.addEventListener('click',function(){
	document.getElementById('input').value="";
	document.getElementById('result').value="";
	document.getElementById('display').innerHTML="";
	
})