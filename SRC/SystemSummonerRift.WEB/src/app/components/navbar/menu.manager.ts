import { Menu } from '../../app-menu'

export class MenuManager {

  private _options = Menu;
  public _menu = [];

  constructor() {}

  public getAllowedMenu() { 
    this._menu = Menu;   
    return this._menu;

  }

}
