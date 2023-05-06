export const currencyFormat = value => {
    let val = value || 0
    if(typeof value == 'string') {
        val = parseFloat(value?.replace(/,|₹ /g, ''))
    }
    return  Intl.NumberFormat('en-IN').format(Math.round(parseFloat(val)* 100)/100)
}