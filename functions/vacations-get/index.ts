import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { vacationService } from '../services';

// Quando o aplicativo Angular faz uma solicitação HTTP GET para vacations, seu ponto de extremidade 
// de rota deve obter os dados de férias.
// Chama a função assíncrona vacationService.getVacations e passa o context, que contém os objetos 
// de solicitação e resposta.
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  await vacationService.getVacations(context); // 👈 This calls the vacation service
};

export default httpTrigger;