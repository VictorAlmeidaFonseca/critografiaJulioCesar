### Dependencies

Instructions on how to use them in your own application are linked below.

| Dependencies | Repository |
| ------ | ------ |
| Axios | [npmjs.com/package/axios][2] |
| Form-data | [npmjs.com/package/form-data][3] |


# About Caesar cipher

In cryptography, a **Caesar cipher**, also known as **Caesar's cipher**, **the shift cipher**, **Caesar's code** or **Caesar shift**, is one of the simplest and most widely known encryption techniques. 

It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of **3**, **D** would be replaced by **A**, E would become **B**, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

# Example
The transformation can be represented by aligning two alphabets; the cipher alphabet is the plain alphabet rotated left or right by some number of positions. For instance, here is a Caesar cipher using a left rotation of three places, equivalent to a right shift of 23 (the shift parameter is used as the key):

```sh
Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
```

When encrypting, a person looks up each letter of the message in the "plain" line and writes down the corresponding letter in the "cipher" line.

```sh
Plaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
Ciphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD
```

Deciphering is done in reverse, with a right shift of 3.

The encryption can also be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A → 0, B → 1, ..., Z → 25.[2] Encryption of a letter x by a shift n can be described mathematically as,[3]

![Encryption](https://wikimedia.org/api/rest_v1/media/math/render/svg/77b59c7a676a99610ddee4ffc305aa7f9cda3b1a)

Decryption is performed similarly,

![Decryption](https://wikimedia.org/api/rest_v1/media/math/render/svg/8ed607e0202ff8d35aa41559f846cac9d358a362)

(There are different definitions for the modulo operation. In the above, the result is in the range 0 to 25; i.e., if x + n or x − n are not in the range 0 to 25, we have to subtract or add 26.)

The replacement remains the same throughout the message, so the cipher is classed as a type of monoalphabetic substitution, as opposed to polyalphabetic substitution.

From Wikipedia, the free encyclopedia. [Caesar Cipher][1]


[1]: <https://en.wikipedia.org/wiki/Caesar_cipher> "Caesar Cipher"
[2]: <https://www.npmjs.com/package/axios> "axios"
[3]: <https://www.npmjs.com/package/form-data> "form-data"
