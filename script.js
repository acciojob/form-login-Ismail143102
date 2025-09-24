function getFormvalue() {
    //Write your code here
	event.preventDefault();
	 const fname = document. queryselector('input[name="fname"]').value.trim();
	const lname = document. queryselector('input[name="lname"]').value.trim();

alert(fname + " " + lname);

}
