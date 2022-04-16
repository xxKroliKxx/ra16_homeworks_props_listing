const currencyUSD = 'USD'
const currencyEUR = 'EUR'

const presUSD = '$'
const presEUR = '€'
const presDef = 'GBP'

export default function Listing({url, url_image, title, currency_code, price, quantity}) {
    if (title.length > 50) {
        title = title.substring(1, 51) + '...'
    }

    let quantityClass = 'item-quantity '
    if (quantity < 10) {
        quantityClass = quantityClass + 'level-low'
    } else if (quantity < 20) {
        quantityClass = quantityClass + 'level-medium'
    } else {
        quantityClass = quantityClass + 'level-high'
    }

    switch (currency_code) {
        case currencyUSD:
            price = presUSD + price
            break
        case currencyEUR:
            price = presEUR + price
            break
        default:
            price = price + ' ' + presDef
    }

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={url_image}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title}</p>
                <p className="item-price">{price}</p>
                <p className={quantityClass}>{quantity}</p>
            </div>
        </div>
    );
}

Listing.defaultProps = {
    title: ''
};