import { useContext, useState } from "react";
import Modal from "react-modal";
// import { useBalance } from '../contexts/BalanceContext'; // Importa el hook del contexto

import "./styles/RechargeModal.css";

import { NequiRechargeMethod } from "../NequiRechargeMethod";
import { PSERechargeMethod } from "../PSERechargeMethod";
import { PayPalRechargeMethod } from "../PaypalRechargeMethod";
import { GlobalContext } from "../../utils/GlobalContext";

const RechargeModal = ({ isOpen, onClose }) => {
    const { user, balance, setBalance } = useContext(GlobalContext);
    const [amount, setAmount] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    /** @type {RechargeMethod} */
    let rechargeMethod;

    const handleRecharge = async () => {
        if (paymentMethod === "PayPal") {
            rechargeMethod = new PayPalRechargeMethod(username, password);
        } else if (paymentMethod === "Nequi") {
            rechargeMethod = new NequiRechargeMethod(username, password);
        } else if (paymentMethod === "PSE") {
            rechargeMethod = new PSERechargeMethod(username, password);
        }

        if (!username || !password || !amount) {
            alert("Por favor completa todos los campos.");
            return;
        }

        const url = await rechargeMethod.recharge(parseFloat(amount), user);
        setBalance(parseFloat(user.account.balance) + parseFloat(amount))
        setAmount('');
        setPaymentMethod('');
        setUsername('');
        setPassword('');
        if (url) window.open(url, '_blank');
        onClose();
    };

    const renderPaymentFields = () => {
        if (paymentMethod) {
            return (
                <div>
                    <label>
                        {paymentMethod === "Nequi" ? "Número de celular Nequi" : "Nombre de usuario " + paymentMethod}:
                        <input type={paymentMethod === "Nequi" ? 'number' : 'email'} value={username} onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label>
                        Contraseña {paymentMethod}:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
            );
        }
        return null;
    };

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
                <h2>Recargar Saldo</h2>
                <button className="close-button" onClick={onClose}>
                    x
                </button>
            </div>
            <div className="modal-content">
                <p>
                    Saldo actual: <span>${balance.toFixed(2)}</span>
                </p>
                <div>
                    <label>
                        Monto a recargar:
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Método de pago:
                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="">
                                Selecciona un método de pago
                            </option>
                            <option value="PayPal">PayPal</option>
                            <option value="PSE">PSE</option>
                            <option value="Nequi">Nequi</option>
                        </select>
                    </label>
                </div>
                {renderPaymentFields()}
                <div className="buttons">
                    <button onClick={handleRecharge}>Recargar</button>
                    <button onClick={onClose}>Cancelar</button>
                </div>
            </div>
        </Modal>
    );
};

export default RechargeModal;
