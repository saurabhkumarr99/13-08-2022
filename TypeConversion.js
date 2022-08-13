let str = "12345 ";
document.write("let str = 12345 \n");
document.write("\n");
document.write("str is "+typeof str );

//String to number conversion

document.write("String to number \n");
let num = Number(str); 
document.write("str is "+typeof num );

//Number to String conversion
document.write("  number to String\n");
let str2 = String(num); 
document.write("str is "+typeof str );

let value = true;
document.write(" value = true\n");
document.write("value is "+typeof value );

//boolean to String conversion 
document.write(" boolean to string\n");
value = String(value); // now value is a string "true"
document.write("value is "+typeof value );


