// Add this script to all your HTML pages (index.html, course.html, etc.)
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('loginContainer');
    const profileContainer = document.getElementById('profileContainer');
    const userEmail = document.getElementById('userEmail');
    const logoutButton = document.getElementById('logoutButton');
    const profileDropdown = document.getElementById('profileDropdown');

    function updateLoginState() {
        const loggedInUser = localStorage.getItem('loggedInUser');

        // Check if elements exist before trying to access them
        if (loginContainer && profileContainer) {
            if (loggedInUser) {
                loginContainer.style.display = 'none';
                profileContainer.style.display = 'block';
                if (userEmail) {
                    userEmail.textContent = loggedInUser;
                }
            } else {
                loginContainer.style.display = 'block';
                profileContainer.style.display = 'none';
            }
        }
    }

    // Login function
    function login() {
        const email = document.getElementById('email')?.value;
        const password = document.getElementById('password')?.value;

        if (email && password) {
            // Remove the extra space in the key name
            localStorage.setItem('loggedInUser', email.trim());
            updateLoginState();
            alert('Login successful!');
            window.location.href = 'index.html';
        } else {
            alert('Please enter both email and password');
        }
    }

    // Logout function
    function logout() {
        localStorage.removeItem('loggedInUser');
        updateLoginState();
        window.location.href = 'index.html';
    }

    // Add event listeners if elements exist
    if (loginButton) {
        loginButton.addEventListener('click', function () {
            window.location.href = 'login.html';
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }

    if (profileDropdown) {
        profileDropdown.addEventListener('click', function (event) {
            event.stopPropagation();
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function () {
            const dropdowns = document.getElementsByClassName('dropdown-menu');
            Array.from(dropdowns).forEach(dropdown => {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            });
        });
    }

    // Initialize login state when page loads
    updateLoginState();

    // Make login function available globally
    window.login = login;
    window.logout = logout;
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



// Global variables
let currentCourse = null;
let currentPrice = 0;
let purchasedCourses = [];

function enrollCourse(courseId) {
    if (!localStorage.getItem('loggedInUser')) {
        alert("Please sign in to enroll in a course.");
        window.location.href = 'login.html';
        return;
    }

    currentCourse = courseData.find(c => c.id == courseId);
    if (currentCourse) {
        currentPrice = currentCourse.price;
        document.getElementById('course-title').textContent = currentCourse.title;
        document.getElementById('course-description').textContent = currentCourse.description;
        document.getElementById('course-price').textContent = currentPrice.toFixed(2);
        document.getElementById('course-enrollment').style.display = 'block';
        document.getElementById('courses').style.display = 'none';
        document.getElementById('coupon-message').textContent = '';
        document.getElementById('enrollment-message').textContent = '';
    }
}

document.getElementById('coupon-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const couponCode = document.getElementById('coupon-code').value.trim().toUpperCase();
    const couponMessage = document.getElementById('coupon-message');

    // Simulate coupon validation
    if (couponCode === 'SAVE20') {
        currentPrice = currentCourse.price * 0.8; // 20% discount
        couponMessage.textContent = 'Coupon applied successfully! 20% discount.';
        couponMessage.style.color = 'green';
        document.getElementById('course-price').textContent = currentPrice.toFixed(2);
    } else {
        couponMessage.textContent = 'Invalid coupon code.';
        couponMessage.style.color = 'red';
    }
});

document.getElementById('enroll-button').addEventListener('click', function () {
    const enrollmentMessage = document.getElementById('enrollment-message');
    enrollmentMessage.textContent = 'Processing your enrollment...';

    // Simulate enrollment process
    setTimeout(() => {
        purchasedCourses.push({
            id: currentCourse.id,
            title: currentCourse.title,
            description: currentCourse.description,
            price: currentPrice,
            progress: 0
        });
        localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));

        enrollmentMessage.textContent = 'Congratulations! You have successfully enrolled in the course.';
        enrollmentMessage.style.color = 'green';

        // Show the "Go to My Courses" button
        const goToMyCoursesButton = document.createElement('button');
        goToMyCoursesButton.textContent = 'Go to My Courses';
        goToMyCoursesButton.className = 'btn btn-primary mt-3';
        goToMyCoursesButton.onclick = showMyCourses;
        enrollmentMessage.appendChild(document.createElement('br'));
        enrollmentMessage.appendChild(goToMyCoursesButton);
    }, 2000); // Simulate a 2-second enrollment process
});

function showMyCourses() {
    const myCourses = document.getElementById('my-courses');
    const coursesContainer = document.getElementById('courses-container');
    myCourses.style.display = 'block';
    document.getElementById('courses').style.display = 'none';
    document.getElementById('course-enrollment').style.display = 'none';

    coursesContainer.innerHTML = '';
    purchasedCourses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
    <img src="/api/placeholder/400/200" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${course.progress}%"></div>
    </div>
    <p>Progress: ${course.progress}%</p>
    <button onclick="viewCourseLectures(${index})">View Lectures</button>
`;
        coursesContainer.appendChild(courseCard);
    });
}

function viewCourseLectures(courseIndex) {
    alert('Viewing lectures for ' + purchasedCourses[courseIndex].title);
    // Simulate progress update
    purchasedCourses[courseIndex].progress = Math.min(100, purchasedCourses[courseIndex].progress + 10);
    localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
    showMyCourses(); // Refresh the display
}

document.addEventListener('DOMContentLoaded', function () {
    const storedCourses = localStorage.getItem('purchasedCourses');
    if (storedCourses) {
        purchasedCourses = JSON.parse(storedCourses);
    }
});

// Update the profile dropdown to include My Courses
const profileDropdown = document.querySelector('.dropdown-menu');
const myCoursesLink = document.createElement('li');
myCoursesLink.innerHTML = '<a class="dropdown-item" href="#" onclick="showMyCourses()">My Courses</a>';
profileDropdown.insertBefore(myCoursesLink, profileDropdown.children[1]);

// Update course data to include prices
courseData = [
    { id: 1, title: 'Web Development', description: 'Learn full-stack web development from scratch.', price: 99.99 },
    { id: 2, title: 'Data Science', description: 'Master the basics of data analysis and machine learning.', price: 129.99 },
    { id: 3, title: 'Digital Marketing', description: 'Learn to create and execute effective marketing strategies.', price: 79.99 },
    { id: 4, title: 'Artificial Intelligence', description: 'Dive into the world of AI and machine learning.', price: 149.99 },
    { id: 5, title: 'Business Analytics', description: 'Learn to make data-driven business decisions.', price: 89.99 }
];

// Update the existing course cards to use the new enrollCourse function
document.querySelectorAll('.card .btn-primary').forEach((button, index) => {
    button.onclick = () => enrollCourse(courseData[index].id);
});

document.addEventListener('DOMContentLoaded', function () {
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterEmail = document.getElementById('newsletter-email');
    const newsletterSubmit = document.getElementById('newsletter-submit');

    newsletterForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const email = newsletterEmail.value.trim();

        if (email) {
            // Disable the submit button to prevent multiple submissions
            newsletterSubmit.disabled = true;
            newsletterSubmit.textContent = 'Subscribing...';

            // Simulate sending an email (this would normally be done server-side)
            setTimeout(() => {
                alert(`Thank you for subscribing! An email has been sent to ${email}.`);
                newsletterEmail.value = '';
                newsletterSubmit.disabled = false;
                newsletterSubmit.textContent = 'Subscribe';
            }, 1500);

            // In a real-world scenario, you would send this data to your server
            console.log(`Newsletter subscription for: ${email}`);
        }
    });
});

document.getElementById('back-to-courses').addEventListener('click', function () {
    document.getElementById('course-enrollment').style.display = 'none';
    document.getElementById('courses').style.display = 'block';
    document.getElementById('home').style.display = 'block';
    document.getElementById('features').style.display = 'block';
    document.getElementById('about').style.display = 'block';
    document.getElementById('testimonials').style.display = 'block';
});
// Add the chat UI elements
const chatHTML = `
<div class="chat-button" id="chatButton">
<i class="fas fa-comments"></i>
</div>

<div class="chat-container" id="chatContainer">
<div class="chat-header">
<h3>Course Assistant</h3>
<button id="close-chat">&times;</button>
</div>
<div class="chat-messages" id="chatMessages"></div>
<div class="chat-input">
<input type="text" id="user-input" placeholder="Ask me anything...">
<button id="send-message">Send</button>
</div>
</div>
`;

// Add the chat HTML to the body
document.body.insertAdjacentHTML('beforeend', chatHTML);

// Chat functionality
class CourseBot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.chatButton = document.getElementById('chatButton');
        this.chatContainer = document.getElementById('chatContainer');
        this.closeChat = document.getElementById('close-chat');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-message');

        this.initializeEventListeners();
        this.previousMessages = [];
    }

    initializeEventListeners() {
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.closeChat.addEventListener('click', () => this.toggleChat());
        this.sendButton.addEventListener('click', () => this.handleUserMessage());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserMessage();
            }
        });
    }

    toggleChat() {
        const isVisible = this.chatContainer.style.display === 'flex';
        this.chatContainer.style.display = isVisible ? 'none' : 'flex';
        if (!isVisible && this.previousMessages.length === 0) {
            this.addBotMessage("Hello! I'm your course assistant. I can help you find courses, answer questions about our programs, or provide recommendations. How can I help you today?");
        }
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        this.previousMessages.push({ role: 'user', content: message });
    }

    addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message bot-message';
        messageDiv.textContent = message;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        this.previousMessages.push({ role: 'bot', content: message });
    }

    async handleUserMessage() {
        const message = this.userInput.value.trim();
        if (message) {
            this.addUserMessage(message);
            this.userInput.value = '';

            const response = await this.generateResponse(message);
            this.addBotMessage(response);

            // If the response includes course suggestions, add them
            const suggestions = this.findCourseSuggestions(message);
            if (suggestions.length > 0) {
                this.addCourseSuggestions(suggestions);
            }
        }
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        // Basic response logic
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
            return "Hello! How can I help you with your course selection today?";
        }

        if (lowerMessage.includes('recommend') || lowerMessage.includes('suggestion')) {
            if (lowerMessage.includes('beginner')) {
                return "I recommend starting with our 'Python for Beginners' or 'Responsive Web Design' courses. Would you like to learn more about either of these?";
            }
            if (lowerMessage.includes('advanced')) {
                return "For advanced learners, I recommend 'Advanced Java Programming' or 'Deep Learning and Neural Networks'. Would you like details about these courses?";
            }
        }

        if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
            return "Our courses range from $49.99 for beginner courses to $99.99 for advanced courses. We also offer regular discounts and promotional codes. Would you like to know about our current offers?";
        }

        if (lowerMessage.includes('duration') || lowerMessage.includes('how long')) {
            return "Most of our courses range from 4 to 12 weeks in duration, depending on the complexity and depth of the content. Would you like to know about a specific course's duration?";
        }

        if (lowerMessage.includes('certificate')) {
            return "Yes, you'll receive a certificate of completion for all our courses once you finish the curriculum. These certificates can be shared on LinkedIn and other professional platforms.";
        }

        if (lowerMessage.includes('refund') || lowerMessage.includes('money back')) {
            return "We offer a 30-day money-back guarantee if you're not satisfied with your course. Would you like more details about our refund policy?";
        }

        // Default response with course categories
        return "I can help you find courses in various categories including Programming, Web Development, Data Science, AI, and more. What subject interests you the most?";
    }

    findCourseSuggestions(message) {
        const lowerMessage = message.toLowerCase();
        return courses.filter(course => {
            const relevantText = `${course.title} ${course.description} ${course.category}`.toLowerCase();
            return relevantText.includes(lowerMessage);
        }).slice(0, 3); // Limit to 3 suggestions
    }

    addCourseSuggestions(suggestions) {
        suggestions.forEach(course => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.className = 'course-suggestion';
            suggestionDiv.innerHTML = `
        <h4>${course.title}</h4>
        <p>${course.description}</p>
        <button onclick="viewCourse(${course.id})">View Course</button>
    `;
            this.chatMessages.appendChild(suggestionDiv);
        });
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize chatbot
const chatbot = new CourseBot();

// Function to view course from chat suggestions
function viewCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        displayCourseDetails(course);
    }
}