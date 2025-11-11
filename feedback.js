// Feedback System
document.addEventListener('DOMContentLoaded', function() {
    loadFeedbackImages();
    loadFeedbackVideos();
    setupTabs();
});

// Load Feedback Images (15 Photos)
function loadFeedbackImages() {
    const imagesGrid = document.getElementById('imagesGrid');
    
    // 15 Photo links
    const feedbackLinks = [
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image1.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image2.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image3.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image4.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image5.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image6.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image7.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image8.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image9.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image10.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image11.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image12.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image13.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image14.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-image15.jpg'
    ];
    
    // Saari 15 photos load karo
    feedbackLinks.forEach((link, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'feedback-item';
        imageItem.innerHTML = `
            <img src="${link}" 
                 alt="Customer Feedback ${index + 1}"
                 onerror="this.src='https://via.placeholder.com/300x200/2563eb/ffffff?text=Image+${index + 1}'">
            <div class="item-info">
                <h3>Customer Review #${index + 1}</h3>
                <p>Real user experience</p>
            </div>
        `;
        imagesGrid.appendChild(imageItem);
    });
}

// Load Feedback Videos (10 Videos)
function loadFeedbackVideos() {
    const videosGrid = document.getElementById('videosGrid');
    
    // 10 Video links
    const videoLinks = [
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video1.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video2.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video3.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video4.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video5.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video6.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video7.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video8.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video9.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/feedback-video10.mp4'
    ];
    
    // Saari 10 videos load karo
    videoLinks.forEach((link, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'feedback-item';
        videoItem.innerHTML = `
            <video controls>
                <source src="${link}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="item-info">
                <h3>Video Review #${index + 1}</h3>
                <p>Real user demo</p>
            </div>
        `;
        videosGrid.appendChild(videoItem);
    });
}

// Tab Switching
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.feedback-section');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            // Remove active class from all
            tabBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to current
            this.classList.add('active');
            document.querySelector(`.${tabName}-section`).classList.add('active');
        });
    });
}
