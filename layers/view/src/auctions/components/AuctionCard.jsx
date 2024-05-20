import { useNavigate } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

import "./styles/AuctionCard.css"

function AuctionCard({ auction }) {
    const navigate = useNavigate();

    return (
        <div className="card">
            <figure>
                <img
                    src={auction.principalImage}
                    alt={auction.name}
                />
            </figure>
            <section className="details">
                <div className="min-details">
                    <h1>
                        {auction.name}
                    </h1>
                    <h4 className="price">{auction.state}</h4>
                </div>

                <div className="all-details">
                    <p>{auction.description}</p>
                    <p>La subasta inicia el <b>{format(toZonedTime(parseISO(auction.startDate), 'America/Bogota'), 'yyyy-MM-dd HH:mm:ss')}</b></p>
                    {/* <p>La subasta finalizará en: <b>{formatTime(countdown)}</b></p> */}
                    <p>Precio actual: <b>${auction.price}</b></p>
                </div>
                <a className="btn" onClick={() => navigate(`/auction/${auction.id}`)}>
                    Ver
                </a>
            </section>
        </div>
    );
}

export default AuctionCard;