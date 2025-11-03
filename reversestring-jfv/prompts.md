# Original prompt
You are an expert HTML and javascript programmer.
I need you to create an HTML page that allows me to introduce a test and get the reverse of that text.

For example, if I introduce "3 Patatas and 4 Potatoes" I should get "seotatoP 4 dna satataP"

The page should be based in the index.html file I have provided. The javascript code should go to a separate script.js file

The page should contain a textbox for the user to introduce the text and a button below the textbox. 

When the user clicks the button, the reverse of the string he has introduced should appear below the button.

Below the text, another button should appear to copy the reversed text to the clipboard.

There is no need of much UI design for this, but keep at least the elements well organized, with some space between them and a tidy aspect. You can take the reversstring-example.png as a guide for the design.

Apply javscript good practices and naming conventions.

Give me the output as an index.html and a script.js files, the first with the HTML content and the second with the javacript content.


# Hide the button
Now, let's make a change. Keep the reverse button hidden until the user has introduced at least three characters. Hide it again if the user removes characters and keep less than three

# Continuous reversing
Now, one last twist: Get rid of the reverse button Update and show the reversed string with every character the user adds or removes Show the copy button if there are at least three characters in the string. Hide it again if there are less or none. Remove any unneeded javascript code