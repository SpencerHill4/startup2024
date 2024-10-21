# GitHub
GitHub is a useful way to store your files for a project all together. It allows you to work on projects together, and have backups in case things go wrong.
## Common Git Commands:
```
git status
git pull
git add
git commit -am "Commit message goes here"
git push
```

# AWS
## SSHing into website
```
ssh -i ../keyFileLocation ubuntu@IpAddress
```

# Midterm
1. <link> is used to link external resources to the HTML document (i.e. CSS stylesheets) and is self-closing and usually placed in the <head> section.
2. <div> is a block-level container that is used to group HTML elements together.
3. #title targets an element with the specific id title, while .grid targets elements witht the class grid.
4. Padding is the space between the content and the border of an element, while margin is the space outside the border, between the element and neighboring elements.
5. With a flexbox, images inside a flex container can be arranged in a row or column, and can be aligned and justified in various ways.
- .flex-container {
    display: flex;
    flex-direction: row; /* or alignment */
    justify-content: center; /* alignment */
    align-items: center; /* alignment */
  }
6. padding: 10px 20px 15px 5px
- Top padding: 10px
- Right padding: 20px
- Bottom padding: 15px
- Left padding: 5px
7. const add = (a, b) => a + b -- declares a function add that takes two parameters and returns their sum.
8. Map with an array:
- const numbers = [1, 2, 3];
- const doubled = numbers.map(n => n * 2);
- console.log(doubled);
- Output: [2, 4, 6]
9. Using getElementByID and addEventListener:
- document.getElementById('button').addEventListener('click', function() {
    console.log('Button clicked');
- });
- When the button is clicked, it logs "Button clicked" to the console.
10. Line of JavaScript using a # selector:
- document.querySelector('#elementId').style.color = 'blue';
- This selects the element with the id elementId and changes its text color to blue.
11. DOM questions:
- The DOM represents the document structure as objects.
- You can dynamically manipulate the DOM with JavaScript.
12. Default CSS display property value of the span element: Inline
13. Changing all div elements' background color to red in CSS:
- div {
    background-color: red;
  }
14. Displaying an image with a hyperlink in HTML:
- <a href="https://example.com">
    <img src="image.jpg" alt="Example Image">
  </a>
15. CSS box model layers ordering:
- Content
- Padding
- Border
- Margin
16. Setting the text "trouble" to green:
- <p><span style="color: green;"></span>double</p>
17. For loop and console.log output:
- for (let i = 0; i < 3; i++) {
    console.log(i);
  }
- Output: 0, 1, 2
18. JavaScript to select an element with id "byu" and change text color to green:
- document.getElementById('byu').style.color = 'green';
19. Opening HTML tags:
- Paragraph: <p>
- Ordered list: <ol>
- Unordered list: <ul>
- Second level heading: <h2>
- First level heading: <h1>
- Thrid level heading: <h3>
20. Declaring document type to be HTML: <!DOCTYPE html>
21. Valid JavaScript syntax for control structures:
- if (condition) {
  } else {
  }
- for (let i = 0; i < 10; i++) {}
- while (condition) {}
- switch (expression) {
      case value1:
          break;
      case value2:
          break;
      default:
  }
22. Creating a JavaScript object:
- const obj = {
    key1: 'value1',
    key2: 'value2'
  };
23. Adding new properties to JavaScript objects: Yes, you can add new properties dynamically: obj.newKey = 'newValue';
24. Including JavaScript on an HTML page: <script src="script.js"></script>
25. Setting text "animal" to "crow" using JavaScript:
- <p id="animal">fish</p>
  <script>
    document.getElementById('animal').innerText = 'crow';
  </script>
26. Describing JSON: JSON is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
27. Common console commands:
- chmod: Change file permissions
- pwd: Print working directory
- cd: Change directory
- ls: List directory contents
- vim: Text editor
- nano: Text editor
- mkdir: Make directory
- mv: Move/rename files
- rm: Remove files/directories
- man: Manual pages
- ssh: Secure Shell
- ps: Process
- wget: Downloads files from the web
- sudo: Executes commands with superuser privileges
28. Remote shell session creation: ssh
29. -la parameter with ls: Lists all files, including hidden ones, with detailed information.
30. Domain name breakdown:
- Top-level domain: .click
- Subdomain: banana.fruit.bozo
- Root domain: bozo.click
31. Web certificate for HTTPS: Yes, necessary
32. DNS A record: Points to an IP address, not to another A record
33. Reserved ports:
- 443: HTTPS
- 80: HTTP
- 22: SSH
34. Promises output: Without the specific code snippet, this is hard to say, but Promises handle asynchronous operations, so the output will depend on whether the promise is resolved or rejected.
