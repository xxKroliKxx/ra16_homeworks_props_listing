import {useState} from "react";
import './App.css';
import Listing from "./Listing";

let offersList = []

function App() {
    let [offers, setOffersList] = useState(offersList)

    fetch("./etsy.json").then(async response => {
            const data = await response.json()
            setOffersList(data)
        }
    )

    return (
        <div className="item-list"> {
            offers.map(offer => {
                return <Listing
                    key={offer.listing_id}
                    currency_code={offer.currency_code}
                    url_image={offer.MainImage ? offer.MainImage.url_570xN : ""}
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
