function generateImage() {
    const brideName = document.getElementById('bride-name').value;
    const groomName = document.getElementById('groom-name').value;
    const weddingDate = document.getElementById('wedding-date-input').value;
    const weddingMessage = document.getElementById('wedding-message-input').value;

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 1024;
    canvas.height = 1024;

    const backgroundImage = new Image();
    backgroundImage.src = 'background1.jpg';

    backgroundImage.onload = function () {
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

        ctx.font = "70px 'Great Vibes', cursive";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#FFD700";
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 15;
        ctx.fillText("Join Us for the Wedding of", canvas.width / 2, canvas.height / 2 - 220);

        ctx.font = "80px 'Great Vibes', cursive";
        ctx.fillStyle = "#FF69B4";
        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 10;
        ctx.fillText(`${brideName} & ${groomName}`, canvas.width / 2, canvas.height / 2 - 80);

        ctx.font = "50px 'Arial', sans-serif";
        ctx.fillStyle = "#8B4513";
        // ctx.shadowColor = "#000000";
        // ctx.shadowBlur = 5;
        ctx.fillText(weddingDate, canvas.width / 2, canvas.height / 2 + 80);

        ctx.font = "60px 'Arial', sans-serif";
        ctx.fillStyle = "#4B0082";
        // ctx.shadowColor = "#000000";
        // ctx.shadowBlur = 5;
        ctx.fillText(weddingMessage, canvas.width / 2, canvas.height / 2 + 200);

        const downloadLink = document.getElementById('download-link');
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.download = 'wedding-invitation.png';
        downloadLink.style.display = 'block';
        downloadLink.innerText = 'Download Your Invitation Image';

        canvas.style.display = 'block';
    }
}
