When committing, always add a comment: 
Example> git commit -am "example comment"

To open a file in a text editor:
> code . example.md

**SSH in:** 
Once in CS260 directory: ssh -i cs260.pem ubuntu@44.211.39.181

**shell into production environment server**
ssh -i ~mmchy/OneDrive/Desktop/CS260/CS260.pem ubuntu@birdquiz.click

**Public IPv4 address:** 35.171.50.62

**Deploy files:** (in git bash, in correct directory) ./deployReact.sh -k ~/Desktop/CS260/CS260.pem -h birdquiz.click -s simon



**Connection string for mongodb:**
mongodb+srv://cs260:EfYtMZZea3KwAM5F@atlascluster.j3jujvz.mongodb.net/?retryWrites=true&w=majority



Development environment
includes vscode, console, git, github
edit and run code
local to computer
Production environment: 
live code that is on the web
lives on AWS
Should not mess with code here
Console:
Git bash
Control keys:
Ctrl-c: cancel command
Ctrl-r: recall command
Ctrl-z: background command
Console commands:
echo
Output the parameters of the command
cd
Change directory
mkdir
Make directory
rmdir
Remove directory
rm
Remove files
mv 
Move files
cp
Copy files
ls
List files
curl
Command line client url browser
grep
Regular expression search
find
Find files
top
View running processes
df
View disk statistics
cat
Output file
less
Interactive file output
wc
Count words
ps
View process
kill
Kill a process
sudo
Execute as admin
ssh
Remote shell
scp
Securely copy files to a remote computer
history
Show history of commands
ping
Test connection
traceroute
Trace network
dig
DNS information
man
Look in the manual


Editors:
Git: 
Version repository for a directory
Be careful about putting sensitive information online
Keep track of history, allows you to go back to previous state and continue from there
Have to remember to commit regularly (save)
repository collaboration
Mostly using:
Git init
Git add
Git commit
Git clone
Git checkout
Git push
Git pull
Git sha(-1) (for hashing)



Localhost: DNS 127.0.0.1, means don't leave, my computer talks to my computer

Web Servers
Port: door into server, each has a number
443 is always used for https
22 is for ssh
80 is for http 
Use (caddy) gateway to take things from one port to another - bring something in through 443, then gateway takes it to port 3000 for image service 
.click is cheapest gtdl
DNS: Subdomain.secondary.top
Caddy helps with https, security. For example, caddy connects to “let’s encrypt’, which work together for web certification request and verification

HTML - github
DOM - Document object model, tree structure
Root is html, head/body would be branches
A bunch of elements represented by tags “html”, “body”, for example
Open: <html>
Close: </html>
Full list on github
Then <head>, </head> (does not show up on website)
Then <body>, </body>
<br> tag: line break
<div></div> makes a container
1st line is always “<!DOCTYPE html>
2nd line <html lang=”en”>, last line is </html>
Attributes:
class="question"
ID=”sjf*2”
Comments:
<!-- commented text -->
Special characters - see github



CSS
Just a bunch of rules:
Selector “p” selects all <p> things from the html - see more below

Most common way to add CSS to HTML is to add a link to CSS in <head> of HTML, and then add all the rules in that linked file
“<link rel="stylesheet" href="styles.css" />”

Selectors

<div ID = “root”> alksdjflakjdf </div>

Adding Fonts



CSS Display
None
Block
Automatically shares width with parent element
Inline
Flex
Variable, adjusts with changes of parent element (spread out and compress)
Can limit how small/large the element will expand/compress
Grid
Children are displayed in a grid within parent
Dynamic based on parent size


Media queries deals with changing display sizes, phone browser, orientation, etc. (see slides)
Display attribute: Float
Keeps element in the same place relative to its parent even when parent size changes (ex: top left corner)

CSS Display Framework: Use bootstrap (see slides)

Javascript
Manipulates DOM
Console.log
Print something out to the console?
Arrow function: 
(t) => { does something }
This is an anonymous (nameless) function with parameter t, kind of like a lambda
Normal creation of function looks like: function (t) { does something } 
Should use () => myFunction instead of just myFunction when it is being used as a parameter 
Closure: Function within a function, that includes its necessary environment (like needed variables), allows a function to remember variables 


console.log(myFunction(3)(‘again’))
EventListener:
Javascript looks for events, like scrolling, button press, etc.
Events can be added to dom elements
Take in as parameters: event (ex: scroll) and a function (ex: change color)
Ex: window.addEventsListener(...)
Window is part of dom, 
<script>
Used to put javascript directly into HTML

Arrays
for (let entry of numbers {...}
Iterates through values in numbers
For (let entry in numbers) {...}
Get value from key: {myObj[property]}
myArray.map(f)
f is a function
Applies function to all elements of the array, returns new array, does not impact original array
myArray.reduce(f(a, b))
f(a, b) is a function
myArray is reduced according to f, where a is output and b is next value in list
myArray.filter(f)
Apples function to all elements of the array, returns an array with only elements that make function return true
myArray.some(f)
Returns boolean based on whether or not some of the elements in the array make f return true
Objects
Assortment of key-value pairs
Uses {}
Can attach methods to them

Spread
Takes an array/object, spreads into different variables. Kind of like appending if you want to use it for array
Notation: newObj = {a: ‘rat’, b: ‘cat”, …myObj, c: ‘dog’}
Rest
Takes some variables, arranges them into an array
Notation: function myFunc(x, y, …myArray) {...}
Only used as a parameter in a function, and always the last parameter 
Not used as an input to a function
Destructuring
[x, y] = [a, b] 
x = a and y = b
Works for objects too
Kind of like python x, y = a, b
Keep multiple things going at once
JavaScript is single-thread language, you can’t do multi-threading
Instead, use “promise” (3 states): 
Pending, Done (success), Done (failure)
Uses keyword “await”
If something is pending, it stops running, and is put in a queue until there is an opening for it to run

Node.js
V8: a thing in chrome that runs javascript
Node.js: has V8 outside of browser, allowing to run javascript without browser
Allows you to do backend in javascript

Startup Login
Sending from user to server? Ex. login
Possibly allowing user to save their own data, with cookies etc.

Websocket
Changes from client server to peer-to-peer server
Can talk back and forth without refreshing
Event-driven

Convert to react
Clone repo
Reorganize code
Install/configure vite
Install React and React Bootstrap
Create App component
Create view component stubs
Create BrowserRouter
