import './styles/PurchasedPage.css'
import { purchasedProducts } from '../utils/fakeData';

function PurchasedPage() {
  return (
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
          <button>Ver detalle</button>
          <button>Gestionar envío</button>
        </div>

      </div>)}

    </div>
  )
}

export default PurchasedPage;