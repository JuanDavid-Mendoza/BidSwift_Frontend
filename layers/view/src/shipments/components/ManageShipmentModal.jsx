import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import "./styles/ManageShipmentModal.css";
import { GlobalContext } from "../../utils/GlobalContext";

import { AbstractAccountModel } from "../../shared/models/AbstractAccountModel";
import { AccountModel } from "../../shared/models/AccountModel";
import { Benefit } from "../Benefit";
import { FreeDelivery } from "../FreeDelivery";
import { ReducedCost } from "../ReducedCost";

const ManageShipmentModal = ({ isOpen, onClose, purchase }) => {
  const { user } = useContext(GlobalContext);
  const [address, setAddress] = useState("");

  /** @type {AbstractAccountModel} */
  let account;

  const handlePayShipment = async () => {
    if (!address) return;

    account = new AccountModel(
      user.account.id,
      user.account.status,
      user.account.reducedCost,
      user.account.balance,
      user.id,
    );

    if (user.account.status) {
      account = new FreeDelivery(account);

    } else if (user.account.reducedCost) {
      account = new ReducedCost(account);
    }

    const success = await account.payShipment(purchase?.price * 0.01);

    if (success) {
      user.account.balance = `${parseFloat(user.account.balance) - parseFloat(purchase.price * 0.01)}`;
      setAddress('');
      onClose();
      window.open(url, 'https://www.fedex.com/es-co/home.html');

    } else {
      toast.error("No se puede hacer este pago.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const customStyles = {
    content: {
      padding: "0",
      borderRadius: "1.5rem",
      width: "900px",
      height: "auto",
      margin: "0 auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      contentLabel="Recharge Balance Modal"
      style={customStyles}
    >
      <div className="modal-header">
        <h2>Gestionar Envio</h2>
        <button className="close-button" onClick={onClose}>
          x
        </button>
      </div>
      <div className="modal-content">
        <div className="account-info">
          <div className="benefits">
            <p><span>Beneficios Cuenta</span></p>
            <p>Descuento 10%: {user?.account.reducedCost ? 'Si' : 'No'}</p>
            <p>Envio Gratis: {user?.account.status ? 'Si' : 'No'}</p>
          </div>
          <p>
            Saldo actual: <span>${user.account.balance}</span>
          </p>
        </div>

        <div className="purchase-info">
          <p><span>{purchase?.name}</span></p>
          <p>Precio: ${purchase?.price}</p>
          <p>Precio Envio: ${purchase?.price * 0.01}</p>
        </div>

        <div>
          <label>
            Dirección Envío:
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>
        </div>

        <div className="buttons">
          <button onClick={handlePayShipment}>Pagar Envío</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
      <ToastContainer />
    </Modal>
  );
};

export default ManageShipmentModal;
