import AirbnbCard from "./AirbnbCard";
import './airbnblist.css';

export default function AirbnbList({airbnbs}){
    return(
        <div>
            {airbnbs.map((airbnb) => (
                <AirbnbCard key={airbnb._id} airbnb={airbnb} />
            ))}
        </div>
    );
}