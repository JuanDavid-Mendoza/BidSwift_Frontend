import { ActiveAuction } from "./ActiveAuction";
import { AbstractAccountModel } from "../shared/models/AbstractAccountModel";

/**
 * @interface AuctionParticipant
 * @description Interfaz que representa un participante de la subasta.
 */
export class AuctionParticipant extends AbstractAccountModel{
    /**
     * @method updateAuctionStatus
     * @description Método que será llamado para actualizar el estado de la subasta.
     * @param {ActiveAuction} activeAuction - La subasta activa.
     */
    updateAuctionStatus(activeAuction) {
        throw new Error("This method must be implemented by subclasses");
    }
}
