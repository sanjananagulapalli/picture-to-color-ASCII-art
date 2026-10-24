const container = document.getElementById('ascii-art');
const fileInput = document.getElementById('image-loader');

const asciiChars = '$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^`\'. ';

// Listen for when you pick an image file
fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            const width = 130; 
            const height = (img.height / img.width) * width;
            
            canvas.width = width;
            canvas.height = height;
            
            ctx.drawImage(img, 0, 0, width, height);
            const imgData = ctx.getImageData(0, 0, width, height).data;
            
            let outputHtml = "";
            
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    const index = (y * width + x) * 4;
                    const r = imgData[index];
                    const g = imgData[index + 1];
                    const b = imgData[index + 2];
                    const a = imgData[index + 3];
                    
                    if (a < 10 || (r < 15 && g < 15 && b < 15)) {
                        outputHtml += " ";
                        continue;
                    }
                    
                    const brightness = (r + g + b) / 3;
                    const charIndex = Math.floor((brightness / 255) * (asciiChars.length - 1));
                    const char = asciiChars[charIndex];
                    
                    outputHtml += `<span style="color: rgb(${r},${g},${b});">${char}</span>`;
                }
                outputHtml += "\n";
            }
            container.innerHTML = outputHtml;
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(file);
});