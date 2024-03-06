function updateProgress(progress, progressBarId, progressTextId) {
	const progressBar = document.getElementById(progressBarId);
	progressBar.style.width = progress + '%';
}
setTimeout(function() {
	updateProgress(80, 'progressBar1');
	updateProgress(90, 'progressBar2');
	updateProgress(85, 'progressBar3');
	updateProgress(70, 'progressBar4');
	updateProgress(85, 'progressBar5');
	updateProgress(60, 'progressBar6');
	updateProgress(50, 'progressBar7');
	updateProgress(75, 'progressBar8');
}, 2000);
function downloadResume() {
    const resumeUrl = 'resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById('downloadButton').addEventListener('click', downloadResume);
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myContactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    function showModal() {
        modal.style.display = 'block';
        setTimeout(function () {
            modal.style.display = 'none';
        }, 5000);
    }
    span.onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    const form = document.getElementById('myContactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        showModal();
    });
});

	

