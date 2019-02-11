var gotName = false;

while (gotName==false) {
	var userName = prompt("Please input your name?");

	if (confirm("Are you sure you are " + userName + "?")) {
		alert("Hi " + userName + "!");
		gotName==true;
	}

}