
            // Initialize Ace editors
            let problemEditor, playgroundEditor;

            function initializeEditors() {
                problemEditor = ace.edit("editor");
                problemEditor.setTheme("ace/theme/monokai");
                problemEditor.session.setMode("ace/mode/python");

                playgroundEditor = ace.edit("playground-editor");
                playgroundEditor.setTheme("ace/theme/monokai");
                playgroundEditor.session.setMode("ace/mode/python");
            }

            // Lazy load Ace editor
            window.addEventListener('load', function () {
                setTimeout(initializeEditors, 1000);
            });

            // Handle language selection for playground
            document.getElementById('playground-language-select').addEventListener('change', function (e) {
                let language = e.target.value;
                playgroundEditor.session.setMode(`ace/mode/${language}`);
            });

            // Handle language selection for problems
            document.getElementById('problem-language-select').addEventListener('change', function (e) {
                let language = e.target.value;
                problemEditor.session.setMode(`ace/mode/${language}`);
            });

            // Updated runCode function
            function runCode(code, language, outputElement) {
                outputElement.innerHTML = `Running ${language} code...\n`;

                try {
                    let output;
                    switch (language) {
                        case 'python':
                            output = interpretPython(code);
                            break;
                        case 'javascript':
                            output = interpretJavaScript(code);
                            break;
                        case 'java':
                            output = interpretJava(code);
                            break;
                        case 'c':
                            output = interpretC(code);
                            break;
                        case 'cpp':
                            output = interpretCPP(code);
                            break;
                        default:
                            output = "Language not supported for execution in this demo.";
                    }
                    outputElement.innerHTML = `Output:\n${output}`;
                } catch (error) {
                    outputElement.innerHTML = `Error:\n${error.message}`;
                }
            }

            // Python interpreter
            function interpretPython(code) {
                let output = '';
                let lines = code.split('\n');
                for (let line of lines) {
                    if (line.trim().startsWith('print(')) {
                        let content = line.substring(6, line.length - 1);
                        output += eval(content) + '\n';
                    }
                }
                return output;
            }

            // JavaScript interpreter
            function interpretJavaScript(code) {
                let output = '';
                console.log = function (msg) { output += msg + '\n'; };
                eval(code);
                return output;
            }

            // Java interpreter (simplified)
            function interpretJava(code) {
                let output = '';
                if (code.includes('System.out.println')) {
                    let match = code.match(/System\.out\.println\((.*?)\)/);
                    if (match) {
                        output = eval(match[1]) + '\n';
                    }
                }
                return output;
            }

            // C interpreter (simplified)
            function interpretC(code) {
                let output = '';
                if (code.includes('printf')) {
                    let match = code.match(/printf\s*\((["'])(.*?)\1/);
                    if (match) {
                        output = match[2] + '\n';
                    }
                }
                return output;
            }

            // C++ interpreter (simplified)
            function interpretCPP(code) {
                let output = '';
                if (code.includes('cout <<')) {
                    let match = code.match(/cout\s*<<\s*(.*?)\s*;/);
                    if (match) {
                        output = eval(match[1]) + '\n';
                    }
                }
                return output;
            }

            let pyodide;

        // Initialize Pyodide
        async function initPyodide() {
            pyodide = await loadPyodide();
        }

        initPyodide();

        // Updated runCode function
        async function runCode(code, language, outputElement) {
            outputElement.innerHTML = `Running ${language} code...\n`;
            
            try {
                let output;
                switch (language) {
                    case 'python':
                        output = await executePython(code);
                        break;
                    case 'javascript':
                        output = await executeJavaScript(code);
                        break;
                    case 'java':
                        output = executeJava(code);
                        break;
                    case 'c':
                        output = executeC(code);
                        break;
                    case 'cpp':
                        output = executeCPP(code);
                        break;
                    default:
                        output = "Language not supported for execution in this demo.";
                }
                outputElement.innerHTML = `Output:\n${output}`;
            } catch (error) {
                outputElement.innerHTML = `Error:\n${error.message}`;
            }
        }

        // Python execution using Pyodide
        async function executePython(code) {
            await pyodide.loadPackagesFromImports(code);
            return await pyodide.runPythonAsync(code);
        }

        // JavaScript execution
        async function executeJavaScript(code) {
            let output = '';
            const originalLog = console.log;
            console.log = (...args) => {
                output += args.join(' ') + '\n';
            };
            
            try {
                const asyncFunction = new Function('return (async () => { ' + code + ' })()');
                await asyncFunction();
            } finally {
                console.log = originalLog;
            }
            
            return output;
        }

        // Java execution (simplified)
        function executeJava(code) {
            // This is a very simplified Java execution. In reality, you'd need a Java VM or transpiler.
            let output = '';
            const printRegex = /System\.out\.println\((.*?)\);/g;
            let match;
            while ((match = printRegex.exec(code)) !== null) {
                output += eval(match[1]) + '\n';
            }
            return output;
        }

        // C execution (simplified)
        function executeC(code) {
            // This is a very simplified C execution. In reality, you'd need a C compiler or WebAssembly.
            let output = '';
            const printfRegex = /printf\s*\(\s*"([^"]*)"\s*\)\s*;/g;
            let match;
            while ((match = printfRegex.exec(code)) !== null) {
                output += match[1] + '\n';
            }
            return output;
        }

        // C++ execution (simplified)
        function executeCPP(code) {
            // This is a very simplified C++ execution. In reality, you'd need a C++ compiler or WebAssembly.
            let output = '';
            const coutRegex = /cout\s*<<\s*(.*?)\s*;/g;
            let match;
            while ((match = coutRegex.exec(code)) !== null) {
                output += eval(match[1]) + '\n';
            }
            return output;
        }

        // Update the event listeners for run buttons
        document.getElementById('run-btn').addEventListener('click', function () {
            let code = problemEditor.getValue();
            let language = document.getElementById('problem-language-select').value;
            let output = document.getElementById('output');
            runCode(code, language, output);
        });

        document.getElementById('playground-run-btn').addEventListener('click', function () {
            let code = playgroundEditor.getValue();
            let language = document.getElementById('playground-language-select').value;
            let output = document.getElementById('playground-output');
            runCode(code, language, output);
        });

            // Simple syntax highlighting function
            function highlightSyntax(code, language) {
                const keywords = {
                    'python': ['def', 'class', 'for', 'while', 'if', 'else', 'elif', 'import', 'from', 'as'],
                    'javascript': ['function', 'var', 'let', 'const', 'if', 'else', 'for', 'while', 'return'],
                    'java': ['public', 'private', 'class', 'interface', 'extends', 'implements', 'void', 'int', 'String'],
                    'c': ['int', 'char', 'float', 'double', 'if', 'else', 'for', 'while', 'return'],
                    'cpp': ['int', 'char', 'float', 'double', 'class', 'public', 'private', 'if', 'else', 'for', 'while']
                };

                let highlightedCode = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

                // Highlight keywords
                keywords[language].forEach(keyword => {
                    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
                    highlightedCode = highlightedCode.replace(regex, `<span class="keyword">${keyword}</span>`);
                });

                // Highlight strings
                highlightedCode = highlightedCode.replace(/(["'])(?:(?=(\\?))\2.)*?\1/g, '<span class="string">$&</span>');

                // Highlight numbers
                highlightedCode = highlightedCode.replace(/\b\d+\b/g, '<span class="number">$&</span>');

                // Highlight functions
                highlightedCode = highlightedCode.replace(/\b(\w+)\(/g, '<span class="function">$1</span>(');

                // Highlight comments (basic, doesn't cover all cases)
                if (language === 'python') {
                    highlightedCode = highlightedCode.replace(/#.+$/gm, '<span class="comment">$&</span>');
                } else {
                    highlightedCode = highlightedCode.replace(/\/\/.+$/gm, '<span class="comment">$&</span>');
                }

                return highlightedCode;
            }

            // Simulated error handling function
            function simulateError(language, outputElement) {
                let errorMessage;
                switch (language) {
                    case 'python':
                        errorMessage = "Traceback (most recent call last):\n  File \"<string>\", line 1, in <module>\nNameError: name 'undefined_variable' is not defined";
                        break;
                    case 'javascript':
                        errorMessage = "Uncaught ReferenceError: undefined_variable is not defined\n    at <anonymous>:1:1";
                        break;
                    case 'java':
                        errorMessage = "Exception in thread \"main\" java.lang.RuntimeException: Uncompilable source code - Erroneous tree type: <any>";
                        break;
                    case 'c':
                    case 'cpp':
                        errorMessage = "error: 'undefined_variable' was not declared in this scope";
                        break;
                    default:
                        errorMessage = "An error occurred.";
                }
                outputElement.innerHTML = `<span class="error">${errorMessage}</span>`;
            }

            // Handle problem selection
            document.querySelectorAll('.problem-list a').forEach(item => {
                item.addEventListener('click', event => {
                    event.preventDefault();
                    let problemName = event.target.textContent.trim().split(' ')[0];
                    let difficulty = event.target.getAttribute('data-difficulty');
                    document.getElementById('problem-description').innerHTML = `
            <h2>${problemName}</h2>
            <p>Difficulty: <span class="badge bg-${difficulty === 'Easy' ? 'success' : difficulty === 'Medium' ? 'warning' : 'danger'}">${difficulty}</span></p>
            <p>This is a placeholder for the problem description. In a real application, you would load the actual problem description here.</p>
        `;
                    document.getElementById('problem-editor').style.display = 'block';
                    startTimer();
                });
            });

            // Handle navigation
            document.querySelectorAll('.navbar-nav a').forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();
                    let target = this.getAttribute('href').substring(1);
                    document.querySelectorAll('.content > div').forEach(div => {
                        div.style.display = div.id === target ? 'block' : 'none';
                    });
                });
            });

            // Set playground as default view
            document.querySelector('a[href="#playground"]').click();

            // Dark mode toggle
            const darkModeToggle = document.getElementById('darkModeToggle');
            darkModeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-mode');
                const icon = darkModeToggle.querySelector('i');
                icon.classList.toggle('fa-moon');
                icon.classList.toggle('fa-sun');
            });

            // Font size controls
            const increaseFontSize = document.getElementById('increaseFontSize');
            const decreaseFontSize = document.getElementById('decreaseFontSize');
            let currentFontSize = 16;

            increaseFontSize.addEventListener('click', () => {
                currentFontSize += 2;
                updateFontSize();
            });

            decreaseFontSize.addEventListener('click', () => {
                currentFontSize = Math.max(12, currentFontSize - 2);
                updateFontSize();
            });

            function updateFontSize() {
                document.body.style.fontSize = `${currentFontSize}px`;
                problemEditor.setFontSize(`${currentFontSize}px`);
                playgroundEditor.setFontSize(`${currentFontSize}px`);
            }

            // Timer functionality
            let timerInterval;
            let seconds = 0;

            function startTimer() {
                clearInterval(timerInterval);
                seconds = 0;
                updateTimerDisplay();
                timerInterval = setInterval(updateTimer, 1000);
            }

            function updateTimer() {
                seconds++;
                updateTimerDisplay();
            }

            function updateTimerDisplay() {
                const minutes = Math.floor(seconds / 60);
                const remainingSeconds = seconds % 60;
                document.getElementById('timer').textContent = `Time: ${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
            }

            // Code sharing functionality
            document.getElementById('shareCode').addEventListener('click', () => {
                const code = playgroundEditor.getValue();
                const language = document.getElementById('playground-language-select').value;
                const shareableLink = generateShareableLink(code, language);
                alert(`Share this link: ${shareableLink}`);
            });

            function generateShareableLink(code, language) {
                // In a real application, you would send this data to a server and get a unique ID
                // For this example, we'll just encode it in the URL (not recommended for production)
                const encodedCode = encodeURIComponent(code);
                return `https://codzeck.com/share?lang=${language}&code=${encodedCode}`;
            }

            // Function to save a code snippet
            function saveCodeSnippet() {
                const code = playgroundEditor.getValue();
                const language = document.getElementById('playground-language-select').value;
                const snippetName = prompt("Enter a name for your snippet:");

                if (snippetName) {
                    const snippet = {
                        name: snippetName,
                        code: code,
                        language: language,
                        timestamp: new Date().toISOString()
                    };

                    let savedSnippets = JSON.parse(localStorage.getItem('savedSnippets')) || [];
                    savedSnippets.push(snippet);
                    localStorage.setItem('savedSnippets', JSON.stringify(savedSnippets));

                    alert("Snippet saved successfully!");
                    updateSavedSnippetsList();
                }
            }

            // Function to load a saved snippet
            function loadCodeSnippet(index) {
                const savedSnippets = JSON.parse(localStorage.getItem('savedSnippets')) || [];
                const snippet = savedSnippets[index];

                if (snippet) {
                    playgroundEditor.setValue(snippet.code);
                    document.getElementById('playground-language-select').value = snippet.language;
                    playgroundEditor.session.setMode(`ace/mode/${snippet.language}`);
                }
            }

            // Function to update the list of saved snippets
            function updateSavedSnippetsList() {
                const savedSnippets = JSON.parse(localStorage.getItem('savedSnippets')) || [];
                const snippetList = document.getElementById('saved-snippets-list');
                snippetList.innerHTML = '';

                savedSnippets.forEach((snippet, index) => {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
                    listItem.innerHTML = `
            ${snippet.name} 
            <span class="badge bg-primary rounded-pill">${snippet.language}</span>
            <button class="btn btn-sm btn-outline-secondary load-snippet" data-index="${index}">Load</button>
        `;
                    snippetList.appendChild(listItem);
                });

                // Add event listeners to load buttons
                document.querySelectorAll('.load-snippet').forEach(button => {
                    button.addEventListener('click', (e) => {
                        loadCodeSnippet(e.target.getAttribute('data-index'));
                    });
                });
            }

            // Event listener for the save button
            document.getElementById('playground-save-btn').addEventListener('click', saveCodeSnippet);

            // Call this function when the page loads to display any previously saved snippets
            updateSavedSnippetsList();

            // Edit Profile Functionality
            function editProfile() {
                // Simulate opening a modal for editing profile
                const editModal = document.createElement('div');
                editModal.innerHTML = `
        <div style="background-color: #fff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);">
            <h4>Edit Profile</h4>
            <label for="username">Username:</label>
            <input type="text" id="username" value="John Doe" style="width: 100%; margin-bottom: 10px;">
            <label for="completedChallenges">Completed Challenges:</label>
            <input type="number" id="completedChallenges" value="15" style="width: 100%; margin-bottom: 10px;">
            <button onclick="saveProfile()">Save</button>
            <button onclick="closeModal()">Cancel</button>
        </div>
    `;
                document.body.appendChild(editModal);
            }

            function saveProfile() {
                alert("Profile updated successfully!");
                // Here you would typically save the updated profile data.
                closeModal();
            }

            function closeModal() {
                const modal = document.querySelector('div[style*="padding: 20px"]');
                if (modal) {
                    document.body.removeChild(modal);
                }
            }

            // Logout Functionality
            function logout() {
                alert("You have been logged out.");
                // Here you would typically handle user session management.
                // For example, you could redirect the user to a login page:
                window.location.href = "login.html";
            } 
            let courseData;

document.addEventListener('DOMContentLoaded', async function() {
    const chatButton = document.getElementById('chat-button');
    const chatContainer = document.getElementById('chat-container');
    const closeChat = document.getElementById('close-chat');
    const sendMessage = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    // Fetch course data from hypothetical API
    courseData = await fetchCourseData();

    chatButton.addEventListener('click', () => {
        chatContainer.style.display = 'flex';
        chatButton.style.display = 'none';
    });

    closeChat.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        chatButton.style.display = 'flex';
    });

    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    async function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage(message, 'user-message');
            userInput.value = '';
            const botReply = await getBotReply(message);
            addMessage(botReply, 'bot-message');
        }
    }

    function addMessage(message, className) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function getBotReply(message) {
        const lowerMessage = message.toLowerCase();
        let reply;

        // Greetings
        if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
            reply = "Hello there! How can I assist you today?";
        }
        // Farewells
        else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
            reply = "Goodbye! If you have any more questions, feel free to ask anytime.";
        }
        // General inquiries about EduTech
        else if (lowerMessage.includes('about edutech') || lowerMessage.includes('what is edutech')) {
            reply = "EduTech is a leading online education platform dedicated to empowering learners worldwide. We offer a wide range of courses in various fields like technology, business, and more.";
        }
        // Course information
        else if (lowerMessage.includes('course') || lowerMessage.includes('class')) {
            reply = "We offer a variety of courses including Web Development, Data Science, Digital Marketing, Artificial Intelligence, and Business Analytics. Which area are you interested in?";
        }
        // Pricing inquiries
        else if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            reply = "Our course prices vary depending on the program. We offer flexible payment options and financial aid for eligible students. Would you like information on a specific course's pricing?";
        }
        // Course duration
        else if (lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
            reply = "Course duration varies from a few weeks to several months, depending on the program and your pace of learning. Can you tell me which course you're interested in for more specific information?";
        }
        // Certificates
        else if (lowerMessage.includes('certificate') || lowerMessage.includes('certification')) {
            reply = "Yes, upon successful completion of your chosen program, you'll receive a verified certificate that you can share with employers or add to your resume.";
        }
        // Career prospects
        else if (lowerMessage.includes('job') || lowerMessage.includes('career')) {
            reply = "Many of our graduates have successfully transitioned into new careers or advanced in their current roles. We also offer career services and job placement assistance for eligible programs.";
        }
        // How to enroll
        else if (lowerMessage.includes('enroll') || lowerMessage.includes('sign up') || lowerMessage.includes('register')) {
            reply = "Enrolling in a course is easy! Simply choose your desired course, click on the 'Enroll Now' button, and follow the registration process. Would you like me to suggest a course?";
        }
        // Support or help
        else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
            reply = "Our support team is always ready to help! You can reach out to us at support@edutech.com or through the 'Help' section on our website. What kind of assistance do you need?";
        }
        // Gratitude
        else if (lowerMessage.includes('thank')) {
            reply = "You're welcome! I'm glad I could help. Is there anything else you'd like to know?";
        }
        // Default response for unrecognized queries
        else {
            reply = "I'm not sure I understand. Could you please rephrase your question or ask about our courses, pricing, enrollment process, or support services?";
        }

        // Suggest courses based on user message
        const suggestedCourse = await suggestCourse(message);
        if (suggestedCourse) {
            reply += `\n\nBased on your interest, you might like our ${suggestedCourse.title} course. Would you like more information about it?`;
            addCourseSuggestion(suggestedCourse);
        }

        return reply;
    }

    async function suggestCourse(message) {
        const lowerMessage = message.toLowerCase();
        const keywords = {
            'web': 'Web Development',
            'data': 'Data Science',
            'marketing': 'Digital Marketing',
            'ai': 'Artificial Intelligence',
            'business': 'Business Analytics'
        };

        for (let [keyword, course] of Object.entries(keywords)) {
            if (lowerMessage.includes(keyword)) {
                return courseData.find(c => c.title === course);
            }
        }

        return null;
    }

    function addCourseSuggestion(course) {
        const suggestionElement = document.createElement('div');
        suggestionElement.classList.add('course-suggestion');
        suggestionElement.innerHTML = `
            <h4>${course.title}</h4>
            <p>${course.description}</p>
            <button onclick="enrollCourse('${course.id}')">Enroll Now</button>
        `;
        chatMessages.appendChild(suggestionElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Initial bot message
    addMessage("Hello! How can I assist you today?", 'bot-message');
});

async function fetchCourseData() {
    // In a real implementation, this would be an API call
    return [
        { id: 1, title: 'Web Development', description: 'Learn full-stack web development from scratch.' },
        { id: 2, title: 'Data Science', description: 'Master the basics of data analysis and machine learning.' },
        { id: 3, title: 'Digital Marketing', description: 'Learn to create and execute effective marketing strategies.' },
        { id: 4, title: 'Artificial Intelligence', description: 'Dive into the world of AI and machine learning.' },
        { id: 5, title: 'Business Analytics', description: 'Learn to make data-driven business decisions.' }
    ];
}

function enrollCourse(courseId) {
    // In a real implementation, this would initiate the enrollment process
    alert(`Enrolling in course with ID: ${courseId}`);
}
        