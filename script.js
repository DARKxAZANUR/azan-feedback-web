// Automatic videos loading from videos folder
document.addEventListener('DOMContentLoaded', function() {
    loadVideos();
    loadImages();
    setupTelegramLinks();
    setupShareButtons();
});

// Videos automatically load karega
function loadVideos() {
    const videosGrid = document.getElementById('videosGrid');
    
    // Pehle existing videos clear karo
    videosGrid.innerHTML = '';
    
    // GitHub se demo video links
    const videoFiles = [
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/demo_video1.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/demo_video2.mp4',
        'https://raw.githubusercontent.com/DARKxAZANUR/azan-feedback-web/main/demo_video3.mp4'
    ];

    videoFiles.forEach((videoPath, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        videoItem.innerHTML = `
            <video controls>
                <source src="${videoPath}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="video-info">
                <h4>Demo Video ${index + 1}</h4>
                <p>Watch the app in action</p>
                
                <!-- Video share buttons -->
                <div class="video-share-buttons">
                    <button class="share-btn-small whatsapp" data-type="video" data-name="Demo Video ${index + 1}">
                        <i class="fab fa-whatsapp"></i>
                    </button>
                    <button class="share-btn-small telegram" data-type="video" data-name="Demo Video ${index + 1}">
                        <i class="fab fa-telegram"></i>
                    </button>
                    <button class="share-btn-small facebook" data-type="video" data-name="Demo Video ${index + 1}">
                        <i class="fab fa-facebook"></i>
                    </button>
                </div>
                
                <button class="telegram-btn video-telegram-btn">
                    <i class="fab fa-telegram"></i>
                    Join Telegram Channel
                </button>
            </div>
        `;
        
        videosGrid.appendChild(videoItem);
    });
}

// Images ke liye error handling
function loadImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/300x200/1e293b/cbd5e1?text=Image+Not+Found';
        };
    });
}

// Sabhi buttons pe Telegram link setup karo
function setupTelegramLinks() {
    // Sabhi download buttons pe
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://t.me/kalajadusetup', '_blank');
        });
    });
    
    // Video ke Telegram buttons pe
    document.addEventListener('click', function(e) {
        if (e.target.closest('.video-telegram-btn')) {
            e.preventDefault();
            window.open('https://t.me/kalajadusetup', '_blank');
        }
    });
    
    // Features pe bhi Telegram link
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('click', function() {
            window.open('https://t.me/kalajadusetup', '_blank');
        });
    });
}

// Share buttons setup karo
function setupShareButtons() {
    // Product share buttons
    document.addEventListener('click', function(e) {
        const shareBtn = e.target.closest('.share-btn-small');
        if (shareBtn) {
            const platform = shareBtn.classList[1]; // whatsapp, telegram, facebook
            const type = shareBtn.getAttribute('data-type'); // product, video
            const name = shareBtn.getAttribute('data-name'); // product/video name
            
            shareContent(platform, type, name);
        }
    });
}

// Share content function
function shareContent(platform, type, name) {
    const currentUrl = window.location.href;
    let text = '';
    
    if (type === 'product') {
        text = `Check out this amazing app: ${name}\nDownload now: ${currentUrl}`;
    } else if (type === 'video') {
        text = `Watch this demo video: ${name}\n${currentUrl}`;
    } else {
        text = `Check out this amazing content: ${name}\n${currentUrl}`;
    }
    
    switch(platform) {
        case 'whatsapp':
            shareOnWhatsApp(text);
            break;
        case 'telegram':
            shareOnTelegram(text);
            break;
        case 'facebook':
            shareOnFacebook(text);
            break;
        case 'twitter':
            shareOnTwitter(text);
            break;
    }
}

// Share functions
function shareOnWhatsApp(text) {
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function shareOnTelegram(text) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function shareOnFacebook(text) {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
}

function shareOnTwitter(text) {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
}

// === THEME TOGGLE ===
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            this.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    });
}

// === LANGUAGE SWITCH ===
const languageSwitch = document.getElementById('languageSwitch');
if (languageSwitch) {
    languageSwitch.addEventListener('change', function() {
        const lang = this.value;
        changeLanguage(lang);
    });
}

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

const translations = {
    en: {
        download: "DOWNLOAD",
        purchase: "PURCHASE", 
        features: "Free Features",
        home: "Home",
        search: "Search"
    },
    hi: {
        download: "डाउनलोड",
        purchase: "खरीदें",
        features: "मुफ्त सुविधाएं", 
        home: "होम",
        search: "खोजें"
    }
};

// WhatsApp Order Function
function orderOnWhatsApp(productName, price) {
    // Tumhara WhatsApp link
    const whatsappLink = 'https://spoo.me/bWsDRx';
    
    // Random order ID generate karo
    const orderId = 'ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Message template
    const message = `Hello! I want to order:%0A%0A🛒 *Product:* ${productName}%0A💲 *Price:* ₹${price}%0A🆔 *Order ID:* ${orderId}%0A%0APlease confirm my order and share payment details.`;
    
    // Tumhare WhatsApp link pe message ke saath redirect karo
    const orderUrl = `${whatsappLink}?text=${message}`;
    
    // Open WhatsApp
    window.open(orderUrl, '_blank');
    
    // Order confirmation
    alert(`✅ Order placed! Order ID: ${orderId}\n\nRedirecting to WhatsApp...`);
}

// Features ko interactive banaye
document.querySelectorAll('.feature-item').forEach(item => {
    item.addEventListener('click', function() {
        const featureName = this.querySelector('span').textContent;
        alert(`🔧 ${featureName} - Redirecting to Telegram...`);
    });
});
