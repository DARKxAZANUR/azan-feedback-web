// Feedback System
document.addEventListener('DOMContentLoaded', function() {
    loadFeedbackImages();
    loadFeedbackVideos();
    setupTabs();
});

// Load Feedback Images
function loadFeedbackImages() {
    const imagesGrid = document.getElementById('imagesGrid');
    
    // Tumhare EXACT 3 photo links
    const feedbackLinks = [
        'https://raw.githubusercontent.com/DARKxAZANUR/payment/main/feedback-image1.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/payment/main/feedback-image2.jpg',
        'https://raw.githubusercontent.com/DARKxAZANUR/payment/main/feedback-image3.jpg'
    ];
    
    // Ye 3 photos load karo
    feedbackLinks.forEach((link, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'feedback-item';
        imageItem.innerHTML = `
            <img src="${link}" 
                 alt="Customer Feedback ${index + 1}">
            <div class="item-info">
                <h3>Customer Review #${index + 1}</h3>
                <p>Real user experience</p>
            </div>
        `;
        imagesGrid.appendChild(imageItem);
    });
    
    // 47 placeholder images (total 50)
    for (let i = 4; i <= 50; i++) {
        const imageItem = document.createElement('div');
        imageItem.className = 'feedback-item';
        imageItem.innerHTML = `
            <img src="https://via.placeholder.com/300x200/2563eb/ffffff?text=Coming+Soon+${i}" 
                 alt="Customer Feedback ${i}">
            <div class="item-info">
                <h3>Customer Review #${i}</h3>
                <p>More feedback coming soon</p>
            </div>
        `;
        imagesGrid.appendChild(imageItem);
    }
}

// Load Feedback Videos
function loadFeedbackVideos() {
    const videosGrid = document.getElementById('videosGrid');
    
    // 30 placeholder videos
    for (let i = 1; i <= 30; i++) {
        const videoItem = document.createElement('div');
        videoItem.className = 'feedback-item';
        videoItem.innerHTML = `
            <video controls poster="https://via.placeholder.com/300x200/1e40af/ffffff?text=Video+${i}">
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="item-info">
                <h3>Video Review #${i}</h3>
                <p>Demo video coming soon</p>
            </div>
        `;
        videosGrid.appendChild(videoItem);
    }
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
