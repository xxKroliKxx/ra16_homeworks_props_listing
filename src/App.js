import {useState} from "react";
import './App.css';
import Listing from "./Listing";

let offersList = []

function App() {
    let [offers, setOffersList] = useState(getData)

    function getData() {
        fetch("./etsy.json").then(async response => {
                const data = await response.json()
                setOffersList(data)
            }
        )
    }

    if (!offers) return <></>

    return (
        <div className="item-list"> {
            offers.
            filter(offer => offer.state != 'removed').
            map(offer => {
                return <Listing
                    key={offer.listing_id}
                    currency_code={offer.currency_code}
                    url_image={offer.MainImage.url_570xN}
                    title={offer.title}
                    url={offer.url}
                    price={offer.price}
                    quantity={offer.quantity}/>
            })
        }
        </div>
    );
}

export default App;
