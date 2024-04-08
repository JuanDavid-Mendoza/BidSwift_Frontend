import './styles/PurchasedPage.css'
import { purchasedProducts } from '../utils/fakeData';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { useNavigate } from "react-router-dom";

function PurchasedPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="purchased-container">

        <h1>Tus productos adquiridos</h1>

        {purchasedProducts.map((p, i) => <div key={i} className="purchased-product">

          <div className="img-container">
            <img src={p.principalImage} alt={p.name} />
          </div>

          <div className="product-data-container">
            <h3>Información del producto</h3>
            <ul>
              <li><b>Nombre:</b> {p.name}</li>
              <li><b>Descripción:</b> {p.description}</li>
            </ul>
          </div>

          <div className="auction-data-container">
            <h3>Información de la subasta</h3>
            <ul>
              <li><b>Fecha de inicio de la subasta:</b> {p.startDate}</li>
              <li><b>Precio final:</b> {p.price}</li>
            </ul>
          </div>

          <div className="options-container">
            <h3>Opciones</h3>
            <button onClick={() => navigate(`/auction/${p.id}`)}>Ver detalle</button>
            <button>Gestionar envío</button>
          </div>

        </div>)}

      </div>
      <Footer />
    </>
  )
}

export default PurchasedPage;