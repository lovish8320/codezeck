// Global variable to store current certificate ID
let currentCertId = '';

// Sample certificate database (in real application, this would be server-side)
const certificateDatabase = {
    'CERT001': {
        name: 'John Doe',
        course: 'Web Development',
        date: '2024-01-15',
        status: 'valid'
    },
    'CERT002': {
        name: 'Jane Smith',
        course: 'Data Science',
        date: '2024-02-20',
        status: 'valid'
    }
};

// Handle form submission
document.getElementById('verificationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const certId = document.getElementById('certificationId').value.trim().toUpperCase();
    verifyCertificate(certId);
});

// Verify certificate function
function verifyCertificate(certId) {
    const resultDiv = document.getElementById('verificationResult');
    resultDiv.style.display = 'block';

    if (certificateDatabase[certId]) {
        const cert = certificateDatabase[certId];
        currentCertId = certId;
        
        resultDiv.className = 'verification-result alert alert-success';
        resultDiv.innerHTML = `
            <h4 class="alert-heading"><i class="fas fa-check-circle me-2"></i>Certificate Verified!</h4>
            <p>Name: ${cert.name}<br>
            Course: ${cert.course}<br>
            Issue Date: ${cert.date}</p>
            <button class="btn btn-primary mt-2" onclick="showCertificatePreview('${certId}')">
                <i class="fas fa-eye me-2"></i>Preview Certificate
            </button>
        `;
    } else {
        resultDiv.className = 'verification-result alert alert-danger';
        resultDiv.innerHTML = `
            <h4 class="alert-heading"><i class="fas fa-times-circle me-2"></i>Certificate Not Found</h4>
            <p>The certificate ID you entered is not valid. Please check the ID and try again.</p>
        `;
    }
}

// Show certificate preview
function showCertificatePreview(certId) {
    currentCertId = certId;
    const modal = new bootstrap.Modal(document.getElementById('certificatePreviewModal'));
    modal.show();
}

// Download certificate function
function downloadCertificate(certId) {
    // In a real application, this would trigger a server request to generate and download the PDF
    alert(`Downloading certificate ${certId}... This would typically generate a PDF file.`);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});