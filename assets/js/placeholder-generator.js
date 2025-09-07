// Placeholder Image Generator for Eva's Portfolio
// This creates simple colored rectangles as temporary placeholders

function generatePlaceholderImage(width, height, text, color = '#8b4513') {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = width;
    canvas.height = height;
    
    // Background
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);
    
    // Overlay pattern
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
            if ((i + j) % 40 === 0) {
                ctx.fillRect(i, j, 10, 10);
            }
        }
    }
    
    // Text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = `${Math.min(width, height) / 10}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
    
    return canvas.toDataURL('image/jpeg', 0.8);
}

// Generate placeholder images when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create placeholder images for missing artwork
    const placeholderImages = {
        'hero-artwork.jpg': generatePlaceholderImage(800, 600, 'Featured Artwork', '#8b4513'),
        'eva-portrait.jpg': generatePlaceholderImage(500, 500, 'Eva Portrait', '#4a4a4a'),
        'portfolio/portrait-1.jpg': generatePlaceholderImage(400, 500, 'Portrait Study #1', '#8b4513'),
        'portfolio/portrait-2.jpg': generatePlaceholderImage(400, 500, 'Portrait Study #2', '#654321'),
        'portfolio/portrait-3.jpg': generatePlaceholderImage(400, 500, 'Character Portrait', '#5d4037'),
        'portfolio/urban-1.jpg': generatePlaceholderImage(400, 300, 'Urban Sketch', '#607d8b'),
        'portfolio/nature-1.jpg': generatePlaceholderImage(400, 500, 'Nature Study', '#4caf50'),
        'portfolio/editorial-1.jpg': generatePlaceholderImage(400, 300, 'Editorial Illustration', '#9c27b0'),
        'portfolio/commercial-1.jpg': generatePlaceholderImage(400, 400, 'Brand Identity', '#2196f3'),
        'portfolio/commercial-2.jpg': generatePlaceholderImage(400, 400, 'Product Illustration', '#ff9800'),
        'portfolio/commercial-3.jpg': generatePlaceholderImage(400, 400, 'Logo Design Process', '#795548'),
        'placeholder.jpg': generatePlaceholderImage(400, 400, 'Image Not Found', '#999999')
    };
    
    // Replace missing images with placeholders
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            const filename = this.src.split('/').pop();
            const placeholder = placeholderImages[filename] || placeholderImages['placeholder.jpg'];
            this.src = placeholder;
        });
        
        // Also check if the image source is a placeholder path
        const srcParts = img.src.split('/');
        const filename = srcParts[srcParts.length - 1];
        if (placeholderImages[filename] || (srcParts.includes('portfolio') && placeholderImages[`portfolio/${filename}`])) {
            const key = srcParts.includes('portfolio') ? `portfolio/${filename}` : filename;
            img.src = placeholderImages[key] || placeholderImages['placeholder.jpg'];
        }
    });
});

// Export for use in other scripts
window.PlaceholderGenerator = {
    generate: generatePlaceholderImage
};