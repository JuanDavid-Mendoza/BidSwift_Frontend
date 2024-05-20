import { useContext, useState } from "react";
import Modal from "react-modal";
import "./styles/ManageShipmentModal.css";
import { GlobalContext } from "../../utils/GlobalContext";

import { AbstractAccountModel } from "../../shared/models/AbstractAccountModel";
import {Benefit} from "../Benefit";
import {FreeDelivery} from "../FreeDelivery";
import {ReducedCost} from "../ReducedCost";

const ManageShipmentModal = ({ isOpen, onClose, purchase }) => {
    const { user, balance, setBalance } = useContext(GlobalContext);
    const [amount, setAmount] = useState("");    

    /** @type {AbstractAccountModel} */
    let account;

    const handlePayShipment = () => {

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
                        <p>Envio Gratis: {user?.account.status  ? 'Si' : 'No'}</p>
                    </div>
                    <p>
                        Saldo actual: <span>${balance?.toFixed(2)}</span>
                    </p>
                </div>

                <div className="purchase-info">
                    <p><span>{purchase?.name}</span></p>
                    <p>Precio: {purchase?.price}</p>
                </div>

                <div>
                    <label>
                        Dirección Envío:
                        <input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                </div>
  
                <div className="buttons">
                    <button onClick={handlePayShipment}>Pagar Envío</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </Modal>
    );
};

export default ManageShipmentModal;
