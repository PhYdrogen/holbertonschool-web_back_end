function getPaymentTokenFromAPI(success) {
    return new Promise((res, rej) => {
        success ? res({data: 'Successful response from the API'}) : rej()
    })
}


module.exports = getPaymentTokenFromAPI;