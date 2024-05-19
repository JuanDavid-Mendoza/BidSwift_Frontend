import './styles/PurchasedPage.css'
import { purchasedProducts } from '../../utils/fakeData';
import Footer from '../../shared/components/Footer';
import Navbar from '../../shared/components/Navbar';
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../utils/GlobalContext';
import { GetMethod } from '../../shared/GetMethod';

function PurchasedPage() {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const { user } = useContext(GlobalContext);
  const accountId = user.account.id;

  const getPurchases = async () => {
    const purchasesResult = await new GetMethod().execute(`http://localhost:3030/purchases/getByAccountId?accountId=${accountId}`);
    setPurchases(purchasesResult.map(p => ({
      name: p.productName,
      description: p.productDescription,
      startDate: p.startDate,
      price: p.productPrice,
      principalImage: p.productImage,
      auctionId: p.auctionid,
    })));
  }

  useEffect(() => {
    getPurchases();
  }, []);

  return (
    <>
      <Navbar />

      <div className="purchased-container">

        <h1>Tus productos adquiridos</h1>

        {purchases.map((p, i) => <div key={i} className="purchased-product">

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
            <button onClick={() => navigate(`/auction/${p.auctionId}`)}>Ver detalle</button>
            <button>Gestionar envío</button>
          </div>

        </div>)}

      </div>
      <Footer />
    </>
  )
}

export default PurchasedPage;