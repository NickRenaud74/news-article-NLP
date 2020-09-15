const validateForm = () => {
    let txt = document.getElementById('text').value;
    if (txt.length === 0) {
        alert('Please enter some text into the form')
    };
};

export { validateForm }