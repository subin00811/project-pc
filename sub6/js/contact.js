(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "LwLWrzLYO17gI0cUW",
    });
})();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_ijvh8oc', 'template_p6m5fas', this)
            .then(() => {
                console.log('SUCCESS!');
                alert('메일 전송에 성공하였습니다.');
            }, (error) => {
                console.log('FAILED...', error);
                alert('메일 전송에 실패하였습니다.');
            });
    });