const validateForm = () => {
    let txt = document.getElementById('text').value;
    if (txt.length === 0) {
        alert('Please enter a sentence into the form')
    };
};

export { validateForm }