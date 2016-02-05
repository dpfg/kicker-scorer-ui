import {Injectable} from 'angular2/core';

// shared service to control loader overlay
@Injectable()
export class LoaderService {
  private _active: boolean;

  constructor() {
    this._active = false;
  }

  public isActive(): boolean {
    return this._active;
  }

  public turnOn(): void {
    console.log("turn on");
    this._active = true;
  }

  public turnOff(): void {
    console.log("turn off");
    this._active = false;
  }
}
