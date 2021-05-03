# Help for the Homework 9

## A mixture of hints, and guidance:

### General Guidance

Go through the Professional README Guide as referenced in the homework's README.md!

One of these 'professional' READMEs needs to be output by the node application you're going to be creating.

---

**THIS HOMEWORK REQUIRES A VIDEO RECORDING OF YOUR APPLICATION RUNNING.**

There is a tutorial in the prework for using the _chrome extension_

**Download Screencastify: https://www.screencastify.com/**

**Screencastify Tutorial: https://coding-bootcamp-fsf-prework.readthedocs-hosted.com/en/latest/modules/screencastify-record-save-to-your-google-drive-and-share-your-video/#screencastify-tutorial**

This tool is super easy to use - PLEASE REACH OUT IF YOU CAN'T GET THIS WORKING.

This homework is marked mostly off of the video demonstration. Failure to submit a suitable video will mean an F.

---

A suggested file/folder structure:

```
	readme-generator-repo/
      utils/
        generateMarkdown.js
      index.js
      .gitignore
      README.md // The standard README we have for every homework
      GENERATED_README.md //The README we've generated from our application in `index.js`
```

---

Suggested Licenses for your generater:

```
choices: ['MIT', 'APACHE_2.0', 'GPL_3.0', 'BSD_3', 'None']

// Note instead of a space there's an underscore e.g. `BSD_3` instead of `BSD 3`
```

You can find more information about License 'badges' here at: https://shields.io/category/license

---

When using the generateMarkdown() function, it would be best to start with getting it to build a completely static README first, no dynamic content.

THEN move onto replacing the static sections like the title and replace it with the dynamic equivalent: `${data.title}`.

---

### Specific things for Homework 6:

1. You MUST submit a sample / generated README from your application.

2. You MUST submit a walkthrough video for your README.

   - This video MUST demonstrate how to use your application
   - This video MUST showcase all the prompts.
   - This video MUST show the generated README against the user inputs in the terminal
   - This video MUST have a FUNCTIONING table of contents.

3. This application MUST generate a README.md (or whatever you decide to call it GENERATED_README / SAMPLE_README / OUTPUT_README)

4. The README MUST have a Table of Contents that works

5. The README MUST include:
   - Title
   - Badge (For the license)
   - Description
   - Installation instructions
   - Usage information
   - License
     - Example:
       ```
       `This project is licensed under the ${license} license.`
       ```
   - Contributing guidelines
   - Tests
     - Are there tests? How do you run them?
     - Example:
       ```
       To run the tests use the 'test' script in the package.json
       ```
   - Questions
     - Link to the user's email and github profile
     - Example:
       ```
       `If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${githubUsername}.`
       ```
