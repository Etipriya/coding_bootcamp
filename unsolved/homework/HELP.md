# Help for the Homework

## A mixture of hints, and guidance:

### General Guidance

This homework will require you to use everything we've learnt about breaking down a problem:

1. Understand the problem and what we're being asked to do.
2. Write down what we need to do and try to visualise the solution (whiteboarding / drawing a flow)
3. Start making the logical blocks in our code such as functions / if statements.
4. Starting filling in the code required to make these blocks work.

> Honestly doing it this way will make this homework much easier to understand.

**You will not need to adjust any of the HTML or the CSS**

All we need to do is write our logic inside of the `script.js`. We don't need to touch any of the other JavaScript, the button is _already hooked up_ on lines 2 and 14.

Inside of the function `writePassword()` on line 6, we declare a variable called 'password', and assign it to the return value of another function called `generatePassword()`.

**THIS** is the function that we need to create. A good start to the boilerplate would be:

```js
// Declare a new function on line 3
function generatePassword() {
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
	...

	// Return our created password
	return password;
}
```

The breakdown of the problem will be available as part of the homework session run through.

**Do not worry about the file structure here, the 3 files loose in your repository will be fine**

Example of special characters to use for password generation:
`@%+\\/'!#$^?:,)(}{][~-_.`

### Specific things for Homework 3:

> **Try to stay away from solutions to this problem on Stack Overflow / GitHub / Google** ... These are likely to be overcomplicated and confusing.

1. This HAS to be deployed just like all of the other homeworks
2. You MUST satisfy all the homework criteria this means prompting for:
   - What password length the user wants?
     > Make use of the `prompt()` function for this.
   - Does the user want lowercase characters?
     > Make use of the `confirm()` function for this.
   - Does the user want uppercase characters?
     > Make use of the `confirm()` function for this.
   - Does the user want special characters?
     > Make use of the `confirm()` function for this.
3. The text box in the HTML SHOULD update with the generated password based on the options selected.
   > Beard in mind providing your `generatePassword()` function returns a password, everything else to update the HTML/CSS is already done.
4. The application MUST NOT allow a user to generate a password LESS THAN 8 characters long.
   > Make use of the `alert()` function to tell the user this
5. The application MUST NOT allow a user to generate a password MORE THAN 128 characters long.
   > Make use of the `alert()` function to tell the user this
6. When you run your application your console inside of 'Inspect Element' in chrome MUST NOT have any errors.
7. You MUST provide error messages if the user does not meet one of the criteria.

   - For example (you can use different messages if you would like):

     - If the user enters a password length of 5. 5 is less than 8, therefore they are told 'Password length must be greater than 8'

     - If the user enters a password length of 135. 135 is greater than 128, therefore they are told 'Password length must be less than 128'

> Make use of the `alert()` function to tell the user this

8. You MUST put comments in your JavaScript to explain what certain code snippets are doing.
