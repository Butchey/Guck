import Controller from '../controller';
import User from './model';

export default class UserController extends Controller {
  constructor() {
    super(User);
  }
}
