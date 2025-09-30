'use client';
import React from 'react';
import AirbnbList from './components/AirbnbList';
import {useState, useEffect} from 'react';

export default function AirbnbPage(){
    const [airbnbs, setAirbnbs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        const fetchAirbnbs = async () => {
            try {
                const response = await fetch(`https://backendairbnb-befph8eegzabfudb.eastus2-01.azurewebsites.net/api/listings?pageSize=100&page=${page}`);
                const data = await response.json();
                setAirbnbs(data);
                setLoading(false);
            } catch (error){
                console.error('Error fetching airbnbs:', error);
                setLoading(false);
            }
        }
        fetchAirbnbs();
    }, [page]);

    return(
        <div className="airbnb-grid">
            {loading ? (
                <p>Cargando airbnbs...</p>
            ) : (
                <>
                <AirbnbList airbnbs={airbnbs} />
                <div>
                <button
                    onClick={() => setPage(prev => prev > 1 ? prev - 1 : 1)}
                    disabled={page === 1}
                    >
                    Anterior
                </button>
                <span> Página {page}</span>
                <button
                onClick={() => setPage(prev => prev + 1)}                
                >
                    Siguiente
                </button>
                </div>
                </>
            )}
        </div>
    );

}