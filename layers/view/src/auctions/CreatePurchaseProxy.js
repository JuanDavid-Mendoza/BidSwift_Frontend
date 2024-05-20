import { RequestCommand } from "../shared/RequestCommand";
import { CreateMethod } from "../shared/CreateMethod";
import { GetMethod } from "../shared/GetMethod";
import { UserModel } from "../shared/models/UserModel";
import { AccountModel } from "../shared/models/AccountModel";

/**
 * @class CreatePurchaseProxy
 * @description Clase proxy para verificar y actualizar los beneficios de cuenta antes de realizar compra
 * @extends RequestCommand
 */
export class CreatePurchaseProxy extends RequestCommand {
    /**
     * @constructor
     * @param {CreateMethod} createService - Servicio de creación.
     */
    constructor(createService, userId) {
        super();
        this.createService = createService;
        this.userId = userId;
    }

    /**
     * @method checkAccountBenefits
     * @description Método para actualziar los beneficios de la cuenta.
     * @param {number} accountId -ID de la cuenta que se va a verificar.
     */
    async updateAccountBenefits(accountId) {
        const purchasesResult = await new GetMethod().execute(`http://localhost:3030/purchases/getByAccountId?accountId=${accountId}`);
        const accountToUpdate = new AccountModel(
            accountId,
            null,
            null,
            null,
            null
          );
        
        //Agrega Beneficio envio gratis
        if (purchasesResult.length >= 50){
            accountToUpdate.status = true;
            const userToUpdate = new UserModel(this.userId, null, null, null, null, null, null, null, accountToUpdate);
            await new UpdateMethod().execute('http://localhost:3030/users/update', userToUpdate);

        //Agrega Beneficio descuento envio
        } else if (purchasesResult.length >= 50) {
            accountToUpdate.reducedCost = true;
            const userToUpdate = new UserModel(this.userId, null, null, null, null, null, null, null, accountToUpdate);
            await new UpdateMethod().execute('http://localhost:3030/users/update', userToUpdate);
        }

    }

    /**
     * @method execute
     * @description Método para ejecutar enviar una petición. Actualiza beneficios de la cuenta antes de ejecutar.
     * @param {string} path - Ruta a la que se va a realizar la petición.
     * @param {Object} data - Modelo de la entidad sobre la que se realizará la petición.
     * @returns {Object} El resultado de la petición
     */
    async execute(path, data) {
        const accountId = data.accountId;

        await this.updateAccountBenefits(accountId);

        return await this.createService.execute(path, data);
    }
}
