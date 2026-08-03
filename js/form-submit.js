// EmailJS Initialize
emailjs.init("tQdJFaZbJwIGnpeI2");

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // পেজ রিলোড বন্ধ করবে

            const submitBtn = this.querySelector('button[type="submit"]');
            const msgSubmit = document.getElementById('msgSubmit');
            const originalBtnHTML = submitBtn.innerHTML; // বোতামের ভেতরের আইকন/ডিজাইন ব্যাকআপ রাখা

            // বাটন হ্যান্ডলিং (Sending স্ট্যাটাস)
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            // EmailJS-এ ডাটা পাঠানো
            emailjs.sendForm('service_k47mj1c', 'template_pqhne2i', this)
                .then(function () {
                    // সফল হলে সাকসেস মেসেজ দেখানো
                    msgSubmit.classList.remove('hidden');
                    msgSubmit.style.color = '#28a745'; // Green Color
                    msgSubmit.innerText = 'Thank you! Your message has been sent successfully.';

                    // ফর্ম রিসেট এবং বাটন রিস্টোর
                    contactForm.reset();
                    submitBtn.innerHTML = originalBtnHTML;
                    submitBtn.disabled = false;
                }, function (error) {
                    // কোনো সমস্যা হলে এরর মেসেজ দেখানো
                    msgSubmit.classList.remove('hidden');
                    msgSubmit.style.color = '#dc3545'; // Red Color
                    msgSubmit.innerText = 'Failed to send message. Please try again.';
                    console.error('EmailJS Error:', error);

                    // বাটন রিস্টোর
                    submitBtn.innerHTML = originalBtnHTML;
                    submitBtn.disabled = false;
                });
        });
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const newslettersForm = document.getElementById('newslettersForm');
    
    if (newslettersForm) {
        newslettersForm.addEventListener('submit', function (event) {
            event.preventDefault(); // পেজ রিলোড বন্ধ করবে

            const submitBtn = this.querySelector('button[type="submit"]');
            const msgContainer = document.getElementById('newsletterMsg');
            const originalBtnHTML = submitBtn.innerHTML;

            // বাটনে লোডিং অবস্থা দেখানো
            submitBtn.disabled = true;

            // EmailJS দিয়ে ডাটা পাঠানো
            // 'YOUR_NEWSLETTER_TEMPLATE_ID' এর জায়গায় আপনার নতুন টেমপ্লেট আইডি বসান
            emailjs.sendForm('service_k47mj1c', 'template_bfti5bg', this)
                .then(function () {
                    // সফল হলে
                    msgContainer.style.color = '#28a745';
                    msgContainer.innerText = 'Subscribed successfully!';

                    newslettersForm.reset();
                    submitBtn.innerHTML = originalBtnHTML;
                    submitBtn.disabled = false;
                }, function (error) {
                    // ব্যর্থ হলে
                    msgContainer.style.color = '#dc3545';
                    msgContainer.innerText = 'Failed to subscribe. Try again!';
                    console.error('EmailJS Newsletter Error:', error);

                    submitBtn.innerHTML = originalBtnHTML;
                    submitBtn.disabled = false;
                });
        });
    }
});