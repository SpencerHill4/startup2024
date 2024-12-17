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
1. < link> is used to link external resources to the HTML document (i.e. CSS stylesheets) and is self-closing and usually placed in the <head> section.
2. < div> is a block-level container that is used to group HTML elements together.
3. #title targets an element with the specific id title, while .grid targets elements witht the class grid.
4. Padding is the space between the content and the border of an element, while margin is the space outside the border, between the element and neighboring elements.
5. With a flexbox, images inside a flex container can be arranged in a row or column, and can be aligned and justified in various ways.
- .flex-container {
-     display: flex;
-     flex-direction: row; /* or column */
-     justify-content: center; /* alignment */
-     align-items: center; /* alignment */
- }
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
-     console.log('Button clicked');
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
-     background-color: red;
- }
14. Displaying an image with a hyperlink in HTML:
- < a href="https://example.com">
-     < img src="image.jpg" alt="Example Image">
- < /a>
15. CSS box model layers ordering:
- Content
- Padding
- Border
- Margin
16. Setting the text "trouble" to green:
- < p>< span style="color: green;">< /span>double< /p>
17. For loop and console.log output:
- for (let i = 0; i < 3; i++) {
-     console.log(i);
- }
- Output: 0, 1, 2
18. JavaScript to select an element with id "byu" and change text color to green:
- document.getElementById('byu').style.color = 'green';
19. Opening HTML tags:
- Paragraph: < p>
- Ordered list: < ol>
- Unordered list: < ul>
- Second level heading: < h2>
- First level heading: < h1>
- Thrid level heading: < h3>
20. Declaring document type to be HTML: <!DOCTYPE html>
21. Valid JavaScript syntax for control structures:
- if (condition) {
- } else {
- }
- for (let i = 0; i < 10; i++) {}
- while (condition) {}
- switch (expression) {
-     case value1:
-         break;
-     case value2:
-         break;
-     default:
- }
22. Creating a JavaScript object:
- const obj = {
-   key1: 'value1',
-   key2: 'value2'
- };
23. Adding new properties to JavaScript objects: Yes, you can add new properties dynamically: obj.newKey = 'newValue';
24. Including JavaScript on an HTML page: <script src="script.js"></script>
25. Setting text "animal" to "crow" using JavaScript:
- < p id="animal">fish</p>
- < script>
-   document.getElementById('animal').innerText = 'crow';
- < /script>
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

# Final
1. What is the default port for HTTP/HTTPS/SSH?
- HTTP: 80
- HTTPS: 443
- SSH: 22
2. What does an HTTP status code in the range of 300/400/500 indicate?
- 300 Range: Redirection (e.g., 301 Moved Permanently)
- 400 Range: Client Error (e.g., 404 Not Found)
- 500 Range: Server Error (e.g., 500 Internal Server Error)
3. What does the HTTP header content-type allow you to do?
- It specifies the media type of the resource (e.g., text/html, application/json) and tells the client how to interpret the data.
4. What does a “Secure cookie”/”Http-only cookie”/”Same-site cookie” do?
- Secure Cookie: Only sent over HTTPS connections.
- Http-Only Cookie: Not accessible via JavaScript, reducing XSS vulnerabilities.
- Same-Site Cookie: Restricts how cookies are sent with cross-site requests, providing protection against CSRF attacks.
5. Assuming the following Express middleware, what would be the console.logoutput for an HTTP GET request with a URL path of /api/document?
- You'd need to provide the middleware code to answer this accurately. However, typically, middleware logs request information (e.g., console.log('GET /api/document')).
6. Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
- You'd need to provide the Express service code and the front-end fetch code for a specific answer. Generally, fetch returns a Promise that resolves to a Response object.
7. Given the following MongoDB query, select all of the matching documents {name: Mark}
- This query will return all documents in the collection where the name field is "Mark".
8. How should user passwords be stored?
- User passwords should be stored as hashed values using a strong hashing algorithm (e.g., bcrypt) to ensure security.
9. Assuming the following node.jswebsocket code in the back end, and the following front end websocket code, what will the front end log to the console?
- Provide the WebSocket code snippets for an accurate prediction. WebSockets typically log connection status or messages exchanged.
10. What is the websocket protocol intended to provide?
- The WebSocket protocol provides full-duplex communication channels over a single TCP connection, enabling real-time data exchange.
11. What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
- JSX: JavaScript XML
- JS: JavaScript
- AWS: Amazon Web Services
- NPM: Node Package Manager
- NVM: Node Version Manager
12. Assuming an HTML document with a body element. What text content will the following React component generate?
- Without the specific React component code, it’s difficult to say. Generally, the component will render text content based on its parameters and state.
13. Given a set of React components that include each other, what will be generated?
- It will depend on the specific structure and relationships between the components. Typically, the root component will render its child components in a nested fashion.
14. What does a React component with React.useState do?
- React.useState is a Hook that allows you to add state to functional components. It returns an array with the current state and a function to update it.
15. What are React Hooks used for?
- React Hooks are used to manage state and side effects in functional components, allowing them to have features previously only available to class components.
16. What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?
- State Hook: Manages state in functional components (useState).
- Context Hook: Consumes context within functional components (useContext).
- Ref Hook: Accesses DOM elements and persists values (useRef).
- Effect Hook: Performs side effects in functional components (useEffect).
- Performance Hook: Optimizes performance-related functionality (useMemo, useCallback).
17. Given React Router code, select statements that are true.
- React Router statements will typically relate to route matching and rendering components based on URL paths. Examples might include < Route path="/home" component={Home} />.
18. What does the package.jsonfile do?
- It contains metadata about the project and its dependencies, scripts, version, and other configurations.
19. What does the fetch function do?
- It makes network requests to retrieve resources (e.g., data from an API) and returns a Promise that resolves to a Response object.
20. What does node.js do?
- Node.jsis a JavaScript runtime that allows you to execute JavaScript on the server side, outside of a web browser.
21. What does pm2 do?
- PM2 is a process manager for Node.jsapplications, used to manage and keep applications running in production.
22. What does Vite do?
- Vite is a build tool that provides a faster and leaner development experience for modern web projects by leveraging native ES modules.
