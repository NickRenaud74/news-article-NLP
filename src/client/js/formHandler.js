//POST request
const postData = async(url = '', data = {}) => {
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log('error: ', error);
    };
};

//Handle form submission and update UI
const handleSubmit = event => {
    event.preventDefault()
    let formText = document.getElementById('text').value;
    console.log("::: Form Submitted :::")
    postData('/api', {
            userInput: formText
        })
        .then(data => {
            Client.updateUi(data);
        }).catch(error => {
            //Send alert if API could not process the text due to invalid input
            alert('Could not process request.  Please review your input and enter valid text.');
        });
};

export {
    postData,
    handleSubmit
}