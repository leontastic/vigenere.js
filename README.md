# vigenere.js

A script written in JavaScript that enciphers and deciphers text using the Vigenère cipher. Written based on an explanation from 

### What is the Vigenère cipher?

The Vigenère cipher is a substitution cipher, which uses a keyword to encrypt a given piece of text by substituting each letter in the character set (usually A-Z) for another letter in the same character set. [Wikipedia's explanation](http://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher):

> The **Vigenère cipher** is a method of [encrypting](http://en.wikipedia.org/wiki/Encryption) [alphabetic](http://en.wikipedia.org/wiki/Alphabet) text by using a series of different [Caesar ciphers](http://en.wikipedia.org/wiki/Caesar_cipher) based on the letters of a keyword. It is a simple form of [polyalphabetic substitution](http://en.wikipedia.org/wiki/Polyalphabetic_cipher).

### How does the Vigenère cipher work?

The basic idea behind the Vigenère cipher is not complex. Like many other substitution ciphers, it first assigns an integer to each letter of the given character set:

| A | B | C | D | E | F | G | H | I | J | K  | L  | M  | N  | O  | P  | Q  | R  | S  | T  | U  | V  | W  | X  | Y  | Z  |
|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

Then we choose a key, which is a string composed of any of the letters above:

| H | E | R  | M  | A | N  |
|---|---|----|----|---|----|
| 7 | 4 | 17 | 12 | 0 | 13 |

We take the text to be encrypted:

```CALL ME ISHMAEL```

But we remove the spacing so opponents have a hard time guessing word-length patterns, and block it into groups of five characters so it's still easy to scan by eye:

```CALLM EISHM AEL```

Then we add the key to that text:

| C | A | L | L | M |   | E | I | S | H | M |   | A | E | L |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| H | E | R | M | A |   | N | H | E | R | M |   | A | N | H |
| J | E | C | X | M |   | R | P | W | Y | Y |   | A | R | S |

And we get the result ```JECXM RPWYY ARS```. To get there, we used the following arithmetic:

|   | 2 | 0 | 11 | 11 | 12 |   | 4  | 8  | 18 | 7  | 12 |   | 0 | 4  | 11 |
|---|---|---|----|----|----|---|----|----|----|----|----|---|---|----|----|
| + | 7 | 4 | 17 | 12 | 0  |   | 13 | 7  | 4  | 17 | 12 |   | 0 | 13 | 7  |
| = | 9 | 4 | 2  | 23 | 12 |   | 17 | 15 | 22 | 24 | 24 |   | 0 | 17 | 18 |

Note that we subtracted 26 from numbers greater than 25, so we could get a number that corresponded to a letter in our defined character set. Using modular arithmetic, the function encrypt (E) with the key (K) can be expressed as a congruence relation:

<p align="center">
  <img src="http://upload.wikimedia.org/math/a/8/6/a8693a20966b33fbdf5967cf253085e2.png"/>
</p>

### When to use the Vigenère cipher

The Vigenère cipher is good to use under the following conditions:

1. The message needs to be encrypted.
2. The information in the message is not extremely valuable. (Do NOT use the Vigenère cipher to encrypt terrorist plots or military secrets. Or credit card info.)
3. You would not expect an opponent to have the abilities to guess the enciphering method or spend a significant amount of time attempting to crack your message.

### How safe is the Vigenère cipher?

The Vigenère cipher is not unbreakable, but the longer the key and more random the key, the harder it is for an opponent to crack the cipher. The opposite is true for the message: the longer the message, the easier it is for an opponent to crack the cipher, because the opponent has more to work with in terms of finding language patterns.

If you use a key that is completely random **and** is as long as the message you are encrypting, then the Vigenère cipher is theoretically unbreakable. However, in this case, the strength of the cipher depends on the randomness of the key (whether or not an opponent can guess the algorithm used to produce the random number), and in any case would make the Vigenère cipher just as unbreakable as any other encryption method.

Furthermore, you would have to secure the key from interception while transmitting it to the receiver. [Public key cryptography](http://en.wikipedia.org/wiki/Public_key_cryptography), which is the current cryptographic scheme used to encrypt and authenticate digital communications, avoids these problems.

## Credits

### Authors

[Leon Li](https://github.com/li-cn)