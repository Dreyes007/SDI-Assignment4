//Daniel Reyes
//SDI-1209
//Project 4
//Library of Functions

var myLibrary = function(){


	//Number format
	var decNumber = function (val) {
    	var number = val
    	number.toFixed(2)
    	return console.log(number.toFixed(2));
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
        return phoneNumber;
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
        return emailAddress;
    };	
        			
		
	//Days Difference
	var daysLeft = function (checkDate) {
    	var vacationDays = checkDate;
    	today = new Date(2012, 8, 20);
    	var one_day = 1000 * 60 * 60 * 24;
    	return (Math.ceil((vacationDays.getTime() - today.getTime()) / (one_day)) + " days untill Thanks Giving breaks starts! ");
    };

	//URL Check Function
	var UrlCheck = function (UrlTest) {
    	var url = UrlTest
    	
    	
    	var exp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;    
    	var thisUrl = exp.test(url);    	  

    	if (url.charAt(4) == "s") {
        return ("This is a https url");
        } if (url.charAt(4) == ":") {
        return ("This is a http url");
    	
    	};
 
    };

	//Title-case Function
	var upperCase = function (val) {
 
 
    	String.prototype.toProperCase = function () {
 
        return this.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });

        };
    	val.toProperCase();
    	return (val.toProperCase()); 
    };
	
	return {

		"decNumber": decNumber,
		"checkPhone": checkPhone,
		"emailCheck": emailCheck,
		"daysLeft": daysLeft,
		"UrlCheck": UrlCheck,
		"upperCase": upperCase								
		
	};	

};

var newLib = new myLibrary();

console.log(newLib.decNumber(2.1));
console.log(newLib.checkPhone("321-745-7444"));
console.log(newLib.emailCheck("Dreyes007@gmail.com"));
console.log(newLib.daysLeft(new Date(2012, 10, 22)));
console.log(newLib.UrlCheck("https://orgsync.com/"));
console.log(newLib.upperCase("daniel a reyes"));
