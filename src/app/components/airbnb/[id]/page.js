'use client';
import {useState, useEffect} from 'react';
import {useParams} from "next/navigation";
 import AirbnbDetail from '../components/AirbnbDetail';

 export default function AirbnbDetailPage(){
    const [airbnb, setAirbnb] = useState(null);
    const params = useParams();
    const airbnbId = params.id;
    useEffect(()=> {
        const fetchAirbnbs = async () => {
            try{
                const response = await fetch('https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/');
                const data = await response.json();
                const foundAirbnb = data.find((airbnb) => airbnb._id === airbnbId);
                if (foundAirbnb){
                    setAirbnb(foundAirbnb);
                }else{
                    console.log('Airbnb no encontrado');
                }
            } catch (error){
                console.error('Error al cargar airbnbs');
            }
        };
        fetchAirbnbs();
    }, []);

    return(
        <div>
            <AirbnbDetail airbnb={airbnb} />
        </div>
    );
 }