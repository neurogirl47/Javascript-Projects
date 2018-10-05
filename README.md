# Javascript-Projects
Solutions to problems at https://jsworkshops.firebaseapp.com/js101.html

Exercise 1: Restaurant Tip Calculator

1) Define a function named calculateTip and give it two arguments: total and percent

2) Inside your function, use the return keyword to output a tip according to the percent argument.

Extra Credit: Want to shave off the extra decimal places? Click here to learn about the .toFixed() function and how to use it.

In the example below, your function should output 7.965.
calculateTip(44.25, 18)
Exercise 2: Picking apart a URL

1) Define a function named removePrefix and give it one argument: url

2) Inside your function, return the url without "www." included. Hint: Use .slice

Hint: Don't forget to wrap quotes around your strings!

In the example below, your function should output google.com.
removePrefix('www.google.com')
Exercise 3: Random Number Generator

1) Define a function named randomNumberGen with no arguments.

2) Inside your function, return a random number between 1 and 10. Hint: Use Math.random() and Math.floor(number)

In the example below, your function should output a whole number between 1 and 10.
randomNumberGen()
Super Extra Credit: "Sentence Reverser"

1) Define a function named reverseSentence with one argument: sentence

2) Inside your function, return the reversed copy of the sentence that is passed in as an argument. Hint: Use String.split() Array.reverse() and Array.join()

In the example below, your function should output "!ecnetnes emosewa na si sihT".
reverseSentence('This is an awesome sentence!')
