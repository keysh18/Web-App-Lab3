function showOver(x, y){			
	document.getElementById(x).style.display='block';
	document.getElementById(y).style.display='block';
}
function exit(x, y){
	document.getElementById(x).style.display='none';
	document.getElementById(y).style.display='none';
}	

function addToCart(x)
{
	alert("Item Successfully Added to Cart...");
	document.getElementById("mycart").innerHTML+="<br>"+x;
}