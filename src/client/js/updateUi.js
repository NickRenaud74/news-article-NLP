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

//Format string to update UI
const formatString = string => {
    const str = string.toLowerCase();
    const capitalize = str.charAt(0).toUpperCase() + str.substring(1);
    return capitalize;
};

//Update UI with content from API 
const updateUi = data => {
    document.getElementById('agreement').innerHTML = `Agree: ${formatString(data.agreement)}`;
    document.getElementById('confidence').innerHTML = `Confidence: ${formatString(data.confidence)}`;
    document.getElementById('irony').innerHTML = `Irony: ${formatString(data.irony)}`;
    document.getElementById('subjective').innerHTML = `Subjectivity: ${formatString(data.subjectivity)}`;
    document.getElementById('polarity').innerHTML = `Polarity: ${getPolarity(data.score_tag)}`;
    //remove .hide class from speech bubble to display results
    document.querySelector('.results').classList.remove('hide');
};

export {
    updateUi,
    formatString,
    getPolarity
}