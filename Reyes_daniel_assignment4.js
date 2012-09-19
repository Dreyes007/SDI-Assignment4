//Daniel Reyes
//SDI-1209
//Project 4
//Library of Functions

var myLibrary = function(){

	//Check numeric function
	var checkNumeric = function(val){
		
		if(isNaN(val)){
			return false;
		} else {
			return true;
			
		};
			
	};
	//Phone # Function
	var checkPhone = function (tryNumber) {
        var phoneNumber = tryNumber;
        var pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
        if (pattern.test(phoneNumber)) { 
            var validPhoneNumber = phoneNumber.replace(pattern, "($1) $2-$3");
            return console.log("This phone number is valid!"); 
        } else {
            return console.log("Sorry! this phone number is invalid!"); 
        };
    };
    
    //Email check function
    var emailCheck = function (email) {
    	
    	var emailAddress = email
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    
    	if (emailPattern.test(emailAddress)) {
        console.log("This email address is valid!");
        } else {
        console.log("Sorry! This is an invalid email address!");
        
        };
    };
    
		
	//Name function
	var areYouDaniel = function(val){
		if (val === "Daniel") {
			return true;
		} else {
			return false;
		};
	};
	
	//Check URL function
	var checkURL = function(val){
		var first = val.substring(0,val.indexOf(":"));
		if((first === "http") || (first === "https")){
			return true;
		} else {
			return false;
		};
	};
	
	return {
		"checkNumeric": checkNumeric,
		"areYouDaniel": areYouDaniel,
		"checkURL": checkURL,
		"checkPhone": checkPhone,
		"emailCheck": emailCheck
	};	

};


var newLib = new myLibrary();

console.log(newLib.checkNumeric(15));
console.log(newLib.areYouDaniel("Daniel"));
console.log(newLib.checkURL("Fullsail.com"));
console.log(newLib.checkPhone("321-745-7444"));
console.log(newLib.emailCheck("Dreyes007@gmail.com"));


