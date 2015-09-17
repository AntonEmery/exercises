/* 
Anton Emery
Extra Credit - Apartment Therapy Jr Front End Engineer position
*/

var code = 'Fraq hf gur pbqr lbh hfrq gb qrpbqr guvf zrffntr';

for(var n = 1; n < 27; n++) {
	code2 = '';

	for(var i = 0; i < code.length; i++) {
		if(code[i] !== ' ') {		
			var charAscii = code.charCodeAt(i);
			if(charAscii + n > 122) {
				charAscii = (charAscii + n) - 26;
			} else if(charAscii + n > 90 && charAscii + n < 97) {
				charAscii = (charAscii + n) - 26;
			} else {
				charAscii += n;
				}
			code2 += String.fromCharCode(charAscii);
		} else {
			code2 += code[i];
			}
	}	
console.log(code2);
}
