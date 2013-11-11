var charset = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz,.';

// Converts string into array of numbers representing the location of each character in the given character set.
function mapNumbers(str) {
	var plainMap = new Array();
	for (var i = 0; i < str.length; i++) {
		plainMap[i] = charset.indexOf(str[i]);
	}
	return plainMap;
};

// Enciphers a given plaintext using a given key
function encipher(plaintext, key) {
	var cipherText = new Array();
	for (var i = 0; i < plaintext.length; i++) {
		cipherText[i] = charset[(mapNumbers(plaintext)[i] + mapNumbers(key)[i%key.length])%charset.length];
	}
	return cipherText.join("");
};

// Deciphers a given ciphertext using a given key
function decipher(ciphertext, key) {
	var plainText = new Array();
	for (var i = 0; i < ciphertext.length; i++) {
		plainText[i] = charset[(mapNumbers(ciphertext)[i] - mapNumbers(key)[i%key.length] + charset.length)%charset.length];
	}
	return plainText.join("");
};