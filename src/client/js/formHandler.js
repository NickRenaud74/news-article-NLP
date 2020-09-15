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
        console.log(newData);
        return newData;
    } catch (error) {
        console.log('error: ', error);
    };
};

//Get Polarity score from API and return statement
const getPolarity = score => {
    let pol;
    switch (score) {
        case 'P+':
            pol = 'Very Positive';
            break;
        case 'P':
            pol = 'Positive';
            break;
        case 'NEU':
            pol = 'Neutral';
            break;
        case 'N':
            pol = 'Negative';
            break;
        case 'N+':
            pol = 'Very Negative';
            break;
        case 'NONE':
            pol = 'No Sentiment';
            break;
    };
    return pol;
};

//Format string
const formatString = string => {
    const str = string.toLowerCase();
    const capitalize = str.charAt(0).toUpperCase() + str.substring(1);
    return capitalize;
};

//Update UI with dynamic content from API 
const updateUi = data => {
    document.getElementById('agreement').innerHTML = `Agreement: ${formatString(data.agreement)}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${formatString(data.confidence)}`;
    document.getElementById('irony').innerHTML = `Irony: ${formatString(data.irony)}`;
    document.getElementById('subjective').innerHTML = `Subjectivity: ${formatString(data.subjectivity)}`;
    document.getElementById('polarity').innerHTML = `Polarity: ${getPolarity(data.score_tag)}`;
}

// Handle form 
const handleSubmit = event => {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('text').value

    Client.validateInput(formText)

    console.log("::: Form Submitted :::")
    postData('/api', {
            userInput: formText
        })
        .then(data => {
            updateUi(data);
        });
};

export { handleSubmit }