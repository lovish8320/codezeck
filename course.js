// Course categories
const courseCategories = [
    "Programming Languages",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "Artificial Intelligence",
    "Cybersecurity",
    "Computer Networks",
    "Database Management",
    "Software Engineering",
    "Cloud Computing"
];

// Expanded course data
const courses = [
    {
        id: 1,
        title: "Python for Beginners",
        description: "Learn the basics of Python programming.",
        image: "./images/Python.jpg",
        category: "Programming Languages",
        enrolled: false,
        progress: 0,
        lectures: 40,
        rating: 4.5,
        ratingCount: 1250,
        difficulty: "beginner",
        instructor: {
            name: "John Doe",
            avatar: "./images/profile.jpg"
        },
        duration: "6 weeks",
        dateAdded: new Date("2023-01-15")
    },
    {
        id: 2,
        title: "Advanced Java Programming",
        description: "Master advanced Java concepts and techniques.",
        image: "./images/Java.jpg",
        category: "Programming Languages",
        enrolled: false,
        progress: 0,
        lectures: 50,
        rating: 4.7,
        ratingCount: 980,
        difficulty: "advanced",
        instructor: {
            name: "Jane Smith",
            avatar: "./images/profile.jpg"
        },
        duration: "8 weeks",
        dateAdded: new Date("2023-02-20")
    },
    {
        id: 3,
        title: "Full Stack Web Development",
        description: "Build modern web applications from front to back.",
        image: "./images/FullStack.png",
        category: "Web Development",
        enrolled: false,
        progress: 0,
        lectures: 60,
        rating: 4.8,
        ratingCount: 1500,
        difficulty: "intermediate",
        instructor: {
            name: "Alice Johnson",
            avatar: "./images/profile.jpg"
        },
        duration: "12 weeks",
        dateAdded: new Date("2023-03-10")
    },
    {
        id: 4,
        title: "React Native Mobile App Development",
        description: "Create cross-platform mobile apps with React Native.",
        image: "./images/ReactNative.png",
        category: "Mobile Development",
        enrolled: false,
        progress: 0,
        lectures: 45,
        rating: 4.6,
        ratingCount: 820,
        difficulty: "intermediate",
        instructor: {
            name: "Bob Wilson",
            avatar: "./images/profile.jpg"
        },
        duration: "10 weeks",
        dateAdded: new Date("2023-04-05")
    },
    {
        id: 5,
        title: "Machine Learning Fundamentals",
        description: "Introduction to machine learning algorithms and applications.",
        image: "./images/MachineLearning.jpg",
        category: "Artificial Intelligence",
        enrolled: false,
        progress: 0,
        lectures: 55,
        rating: 4.9,
        ratingCount: 2000,
        difficulty: "advanced",
        instructor: {
            name: "Emily Chen",
            avatar: "./images/profile.jpg"
        },
        duration: "10 weeks",
        dateAdded: new Date("2023-05-01")
    },
    {
        id: 6,
        title: "JavaScript ES6+ Features",
        description: "Explore modern JavaScript features and best practices.",
        image: "./images/JavaScript.jpg",
        category: "Programming Languages",
        enrolled: false,
        progress: 0,
        lectures: 35,
        rating: 4.7,
        ratingCount: 1100,
        difficulty: "intermediate",
        instructor: {
            name: "David Brown",
            avatar: "./images/profile.jpg"
        },
        duration: "6 weeks",
        dateAdded: new Date("2023-06-15")
    },
    {
        id: 7,
        title: "Responsive Web Design",
        description: "Create websites that look great on any device.",
        image: "./images/ResponsiveDesign.jpg",
        category: "Web Development",
        enrolled: false,
        progress: 0,
        lectures: 30,
        rating: 4.5,
        ratingCount: 950,
        difficulty: "beginner",
        instructor: {
            name: "Sarah Lee",
            avatar: "./images/profile.jpg"
        },
        duration: "4 weeks",
        dateAdded: new Date("2023-07-01")
    },
    {
        id: 8,
        title: "iOS App Development with Swift",
        description: "Build native iOS applications using Swift.",
        image: "./images/Swift.jpg",
        category: "Mobile Development",
        enrolled: false,
        progress: 0,
        lectures: 55,
        rating: 4.8,
        ratingCount: 1300,
        difficulty: "intermediate",
        instructor: {
            name: "Mike Taylor",
            avatar: "./images/profile.jpg"
        },
        duration: "10 weeks",
        dateAdded: new Date("2023-08-10")
    },
    {
        id: 9,
        title: "Data Analysis with Python",
        description: "Learn to analyze and visualize data using Python libraries.",
        image: "./images/DataAnalysis.jpg",
        category: "Data Science",
        enrolled: false,
        progress: 0,
        lectures: 50,
        rating: 4.6,
        ratingCount: 1050,
        difficulty: "intermediate",
        instructor: {
            name: "Laura Martinez",
            avatar: "./images/profile.jpg"
        },
        duration: "8 weeks",
        dateAdded: new Date("2023-09-05")
    },
    {
        id: 10,
        title: "Deep Learning and Neural Networks",
        description: "Dive into the world of deep learning and neural networks.",
        image: "./images/DeepLearning.png",
        category: "Artificial Intelligence",
        enrolled: false,
        progress: 0,
        lectures: 65,
        rating: 4.9,
        ratingCount: 1800,
        difficulty: "advanced",
        instructor: {
            name: "Alex Wong",
            avatar: "./images/profile.jpg"
        },
        duration: "12 weeks",
        dateAdded: new Date("2023-10-01")
    },
    {
        id: 11,
        title: "Ethical Hacking and Penetration Testing",
        description: "Learn to identify and exploit vulnerabilities in computer systems.",
        image: "./images/EthicalHacking.png",
        category: "Cybersecurity",
        enrolled: false,
        progress: 0,
        lectures: 70,
        rating: 4.8,
        ratingCount: 1600,
        difficulty: "advanced",
        instructor: {
            name: "Chris Black",
            avatar: "./images/profile.jpg"
        },
        duration: "10 weeks",
        dateAdded: new Date("2023-11-15")
    },
    {
        id: 12,
        title: "Network Security Fundamentals",
        description: "Understand the basics of securing computer networks.",
        image: "./images/NetworkSecurity.png",
        category: "Computer Networks",
        enrolled: false,
        progress: 0,
        lectures: 45,
        rating: 4.5,
        ratingCount: 900,
        difficulty: "intermediate",
        instructor: {
            name: "Emma White",
            avatar: "./images/profile.jpg"
        },
        duration: "8 weeks",
        dateAdded: new Date("2023-12-01")
    },
    {
        id: 13,
        title: "SQL and Database Design",
        description: "Master SQL queries and learn to design efficient databases.",
        image: "./images/SQL.png",
        category: "Database Management",
        enrolled: false,
        progress: 0,
        lectures: 40,
        rating: 4.7,
        ratingCount: 1200,
        difficulty: "intermediate",
        instructor: {
            name: "Daniel Kim",
            avatar: "./images/profile.jpg"
        },
        duration: "6 weeks",
        dateAdded: new Date("2024-01-10")
    },
    {
        id: 14,
        title: "DevOps and Continuous Integration",
        description: "Learn to streamline development and deployment processes.",
        image: "./images/DevOps.jpg",
        category: "Software Engineering",
        enrolled: false,
        progress: 0,
        lectures: 55,
        rating: 4.8,
        ratingCount: 1400,
        difficulty: "advanced",
        instructor: {
            name: "Olivia Green",
            avatar: "./images/profile.jpg"
        },
        duration: "10 weeks",
        dateAdded: new Date("2024-02-05")
    },
    {
        id: 15,
        title: "AWS Cloud Practitioner",
        description: "Get started with Amazon Web Services and cloud computing.",
        image: "./images/AWS.png",
        category: "Cloud Computing",
        enrolled: false,
        progress: 0,
        lectures: 50,
        rating: 4.6,
        ratingCount: 1100,
        difficulty: "beginner",
        instructor: {
            name: "Ryan Turner",
            avatar: "./images/profile.jpg"
        },
        duration: "8 weeks",
        dateAdded: new Date("2024-03-01")
    }
];

// Function to create course cards
function createCourseCard(course) {
    return `
<div class="col-md-4 mb-4">
    <div class="card course-card">
        <img src="${course.image}" class="card-img-top" alt="${course.title}">
        <div class="card-body">
            <h5 class="card-title">${course.title}</h5>
            <p class="card-text">${course.description}</p>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <span class="text-muted">${course.category}</span>
                <span class="difficulty difficulty-${course.difficulty}">${course.difficulty}</span>
            </div>
            <div class="instructor">
                <img src="${course.instructor.avatar}" alt="${course.instructor.name}">
                <span>${course.instructor.name}</span>
            </div>
            <div class="d-flex justify-content-between align-items-center">
                <div class="rating">
                    <span class="stars">${createStarRating(course.rating)}</span>
                    <span class="rating-value">${course.rating}</span>
                    <span class="rating-count">(${course.ratingCount})</span>
                </div>
                <span class="text-muted">${course.duration}</span>
            </div>
            <button class="btn btn-primary mt-2 view-course" data-course-id="${course.id}">View Course</button>
        </div>
    </div>
</div>
`;
}

// Function to create star rating HTML
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return `
${'<i class="fas fa-star"></i>'.repeat(fullStars)}
${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
${'<i class="far fa-star"></i>'.repeat(emptyStars)}
`;
}

// Function to display course details
function displayCourseDetails(course) {
    const courseDetails = document.getElementById('courseDetails');
    const courseDetailsContent = courseDetails.querySelector('.course-details-content');

    courseDetailsContent.innerHTML = `
<h2>${course.title}</h2>
<img src="${course.image}" alt="${course.title}" style="max-width: 100%; height: auto; margin-bottom: 1rem;">
<p>${course.description}</p>
<p>Category: ${course.category}</p>
<p>Difficulty: <span class="difficulty difficulty-${course.difficulty}">${course.difficulty}</span></p>
<p>Instructor: ${course.instructor.name}</p>
<p>Duration: ${course.duration}</p>
<p>Number of lectures: ${course.lectures}</p>
<div class="rating mb-3">
    <span class="stars">${createStarRating(course.rating)}</span>
    <span class="rating-value">${course.rating}</span>
    <span class="rating-count">(${course.ratingCount} ratings)</span>
</div>
${course.enrolled ? `
    <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: ${course.progress}%;" aria-valuenow="${course.progress}" aria-valuemin="0" aria-valuemax="100">${course.progress}%</div>
    </div>
    <button class="btn btn-primary continue-course" data-course-id="${course.id}">Continue Course</button>
` : `
    <button class="btn btn-primary enroll-course" data-course-id="${course.id}">Enroll Now</button>
`}
<button class="btn btn-secondary mt-3 close-details">Close</button>
`;

    courseDetails.style.display = 'block';

    // Add event listeners for enroll and close buttons
    const enrollButton = courseDetailsContent.querySelector('.enroll-course');
    if (enrollButton) {
        enrollButton.addEventListener('click', () => enrollCourse(course.id));
    }

    const continueButton = courseDetailsContent.querySelector('.continue-course');
    if (continueButton) {
        continueButton.addEventListener('click', () => continueCourse(course.id));
    }

    const closeButton = courseDetailsContent.querySelector('.close-details');
    closeButton.addEventListener('click', () => {
        courseDetails.style.display = 'none';
    });
}

// Function to enroll in a course
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        course.enrolled = true;
        course.progress = 0;
        alert(`You have successfully enrolled in ${course.title}`);
        displayCourseDetails(course);
    }
}

// Function to continue a course (simulate progress)
function continueCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course && course.enrolled) {
        course.progress = Math.min(course.progress + 10, 100);
        alert(`You've made progress in ${course.title}. Current progress: ${course.progress}%`);
        displayCourseDetails(course);
    }
}

function createCategoryButtons() {
    const categoryContainer = document.getElementById('categoryContainer');
    categoryContainer.innerHTML = `
<button class="btn btn-outline-primary me-2 mb-2" data-category="all">All Courses</button>
${courseCategories.map((category) =>
        `<button class="btn btn-outline-primary me-2 mb-2" data-category="${category}">${category}</button>`
    ).join('')}
`;

    // Add event listeners to category buttons
    const buttons = categoryContainer.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const category = e.target.getAttribute('data-category');

            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active', 'btn-primary'));

            // Add active class to clicked button
            e.target.classList.add('active', 'btn-primary');

            if (category === 'all') {
                // If "All Courses" is clicked, show all courses
                renderCourseList(courses);
            } else {
                // Otherwise, filter by the selected category
                renderCourseList(courses, category);
            }
        });
    });

    // Set "All Courses" as active by default
    const allCoursesButton = categoryContainer.querySelector('[data-category="all"]');
    allCoursesButton.classList.add('active', 'btn-primary');
}

// Update the renderCourseList function to handle null category properly
function renderCourseList(courseList = courses, category = null) {
    const courseListElement = document.getElementById('courseList');
    const filteredCourses = category ? courseList.filter(course => course.category === category) : courseList;

    courseListElement.innerHTML = filteredCourses.map(createCourseCard).join('');

    // Update course count
    document.getElementById('courseCount').textContent = `${filteredCourses.length} courses`;

    // Add event listeners to view course buttons
    const viewButtons = courseListElement.querySelectorAll('.view-course');
    viewButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const courseId = parseInt(e.target.getAttribute('data-course-id'));
            const course = courses.find((c) => c.id === courseId);
            if (course) {
                displayCourseDetails(course);
            }
        });
    });
}

// Function to search courses
function searchCourses() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCourses = courses.filter((course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm)
    );
    renderCourseList(filteredCourses);
}



// Event listener for search button
document.getElementById('searchButton').addEventListener('click', searchCourses);

// Event listener for search input (search as you type)
document.getElementById('searchInput').addEventListener('input', searchCourses);


document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const loginContainer = document.getElementById('loginContainer');
    const profileContainer = document.getElementById('profileContainer');
    const userEmail = document.getElementById('userEmail');
    const logoutButton = document.getElementById('logoutButton');

    function updateLoginState() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            loginContainer.style.display = 'none';
            profileContainer.style.display = 'block';
            userEmail.textContent = loggedInUser;
        } else {
            loginContainer.style.display = 'block';
            profileContainer.style.display = 'none';
        }
    }

    loginButton.addEventListener('click', function () {
        window.location.href = 'login.html';
    });

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        updateLoginState();
        window.location.href = 'course.html';
    });

    // Call updateLoginState when the page loads
    updateLoginState();

    // Check login state every second (for demonstration purposes)
    setInterval(updateLoginState, 1000);
});

// Add this to your login.html page
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you would typically validate the credentials with a server
    // For this example, we'll just check if the email and password are not empty
    if (email && password) {
        localStorage.setItem('loggedInUser', email);
        alert('Login successful!');
        window.location.href = 'course.html';
    } else {
        alert('Please enter both email and password');
    }
}

function logout() {
    localStorage.removeItem('loggedInUser');
    updateLoginState();
    window.location.href = 'course.html'; // Redirect to the home page after logout
}


// Initialize the page
createCategoryButtons();
renderCourseList();

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

// Add price property to each course in the courses array
courses.forEach(course => {
    // Assign prices based on difficulty level
    switch (course.difficulty) {
        case 'beginner':
            course.price = 49.99;
            break;
        case 'intermediate':
            course.price = 79.99;
            break;
        case 'advanced':
            course.price = 99.99;
            break;
        default:
            course.price = 59.99;
    }
});

// Available coupon codes and their discount percentages
const validCoupons = {
    'NEWUSER20': 20,
    'SUMMER25': 25,
    'FLASH15': 15
};

// Function to create and display checkout page
function displayCheckoutPage(course) {
    const courseDetails = document.getElementById('courseDetails');
    courseDetails.style.display = 'none';

    // Create checkout container if it doesn't exist
    let checkoutContainer = document.getElementById('checkoutContainer');
    if (!checkoutContainer) {
        checkoutContainer = document.createElement('div');
        checkoutContainer.id = 'checkoutContainer';
        document.body.appendChild(checkoutContainer);
    }

    const userEmail = localStorage.getItem('loggedInUser') || 'Not logged in';

    checkoutContainer.innerHTML = `
<!-- Checkout Modal -->
<div class="checkout-modal">
<div class="checkout-content">
<h2 class="checkout-title">Course Enrollment Checkout</h2>
<div class="course-summary">
    <h3>Order Summary</h3>
    <div class="course-info">
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <h4 class="course-title">${course.title}</h4>
        <p class="course-instructor">Instructor: ${course.instructor.name}</p>
    </div>
    <div class="price-details">
        <div class="price-row">
            <span>Original Price:</span>
            <span class="price">$${course.price.toFixed(2)}</span>
        </div>
        <div class="coupon-section">
            <input type="text" id="couponCode" placeholder="Enter coupon code" class="form-control">
            <button onclick="applyCoupon('${course.id}')" class="btn btn-secondary">Apply Coupon</button>
            <span id="couponMessage" class="coupon-message"></span>
        </div>
        <div class="price-row discount" style="display: none;">
            <span>Discount:</span>
            <span id="discountAmount">-$0.00</span>
        </div>
        <div class="price-row total">
            <span>Total:</span>
            <span id="totalPrice">$${course.price.toFixed(2)}</span>
        </div>
    </div>
</div>
<div class="user-info">
    <h3>Student Information</h3>
    <p>Email: ${userEmail}</p>
</div>
<div class="checkout-buttons">
    <button onclick="processEnrollment('${course.id}')" class="btn btn-primary">Complete Enrollment</button>
    <button onclick="closeCheckout()" class="btn btn-secondary">Cancel</button>
</div>
</div>
</div>
`;

    // Add styles for checkout page
    const style = document.createElement('style');
    style.textContent = `
.checkout-modal {
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.8);
display: flex;
justify-content: center;
align-items: center;
z-index: 1000;
}
.checkout-content {
background-color: #fff;
padding: 2rem;
border-radius: 10px;
max-width: 600px;
width: 90%;
max-height: 90vh;
overflow-y: auto;
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.checkout-title {
font-size: 1.8rem;
margin-bottom: 1rem;
text-align: center;
color: var(--primary-color);
}
.course-summary {
margin: 1rem 0;
padding: 1rem;
border: 1px solid #ddd;
border-radius: 5px;
background-color: #f9f9f9;
}
.course-image {
max-width: 100px;
border-radius: 5px;
}
.course-title {
font-size: 1.5rem;
margin: 0.5rem 0;
}
.course-instructor {
color: #555;
}
.price-details {
margin: 1rem 0;
}
.price-row {
display: flex;
justify-content: space-between;
margin: 0.5rem 0;
}
.price {
font-size: 1.2rem;
font-weight: bold;
}
.coupon-section {
margin: 1rem 0;
}
.coupon-message {
color: #666;
font-size: 0.9rem;
}
.checkout-buttons {
margin: 1rem 0;
display: flex;
justify-content: space-between;
}
.btn {
padding: 0.5rem 1rem;
border: none;
border-radius: 5px;
font-size: 1.2rem;
cursor: pointer;
}
.btn-primary {
background-color: var(--primary-color);
color: #fff;
}
.btn-secondary {
background-color: #666;
color: #fff;
}
.btn:hover {
opacity: 0.8;
}
`;
    document.head.appendChild(style);
}

// Function to apply coupon code
function applyCoupon(courseId) {
    const couponInput = document.getElementById('couponCode');
    const couponMessage = document.getElementById('couponMessage');
    const discountRow = document.querySelector('.price-row.discount');
    const discountAmount = document.getElementById('discountAmount');
    const totalPrice = document.getElementById('totalPrice');
    const course = courses.find(c => c.id === parseInt(courseId));

    const couponCode = couponInput.value.trim().toUpperCase();

    if (validCoupons.hasOwnProperty(couponCode)) {
        const discountPercentage = validCoupons[couponCode];
        const discount = (course.price * discountPercentage) / 100;
        const finalPrice = course.price - discount;

        discountRow.style.display = 'flex';
        discountAmount.textContent = `-$${discount.toFixed(2)}`;
        totalPrice.textContent = `$${finalPrice.toFixed(2)}`;
        couponMessage.innerHTML = `<span style="color: green;">Coupon applied successfully! ${discountPercentage}% off</span>`;

        // Clear the coupon input field
        couponInput.value = '';
    } else {
        couponMessage.innerHTML = `<span style="color: red;">Invalid coupon code</span>`;
        discountRow.style.display = 'none';
        totalPrice.textContent = `$${course.price.toFixed(2)}`;
    }
}

// Function to process enrollment
function processEnrollment(courseId) {
    const course = courses.find(c => c.id === parseInt(courseId));
    const userEmail = localStorage.getItem('loggedInUser ');

    if (!userEmail) {
        alert('Please log in to enroll in the course');
        window.location.href = 'login.html';
        return;
    }

    // Here you would typically integrate with a payment processing system
    // For now, we'll just simulate a successful enrollment
    course.enrolled = true;
    course.progress = 0;

    alert(`Enrollment successful!\n\nCourse: ${course.title}\nEmail: ${userEmail}`);
    closeCheckout();
    displayCourseDetails(course);
}

// Function to close checkout
function closeCheckout() {
    const checkoutContainer = document.getElementById('checkoutContainer');
    if (checkoutContainer) {
        checkoutContainer.remove();
    }
}

// Update the enrollCourse function to use the new checkout system
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (course) {
        displayCheckoutPage(course);
    }
}

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