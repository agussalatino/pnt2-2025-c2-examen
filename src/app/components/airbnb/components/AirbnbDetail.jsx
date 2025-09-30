import "./airbnblist.css";

export default function AirbnbDetail({airbnb}){
    if(!airbnb){
        return <div>Cargando...</div>
    }
    return(
        <div>
            <div className="airbnb-detail-container">
                <p className="airbnb-detail-title">{airbnb.name}</p>
                <p className="airbnb-detail-content">{airbnb.summary}</p>
            </div>
        </div>
    );
}