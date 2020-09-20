const validateInput = (txt) => {
    if (txt.length === 0) {
        //console.log('Cannot process # character')
        //alert('Cannot process #, please enter input without it')
        return false;
    };
    return true;
};



export { validateInput }