const toSentenceCase = (str) => {
    if (!str || typeof str !== 'string') return '';
    return str.toLowerCase().split(' ').map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

module.exports = toSentenceCase;