import ResponseManager from './ResponseManager';
import Handlers from './defaultHandlers';
const rm = new ResponseManager();

Handlers.forEach(rm.addHandler);

export default rm;
