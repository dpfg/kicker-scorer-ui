export class Player {
  constructor(public username: string) {

  }
}

export class Team {
  public id: number;
  public name: string;
  public goalkeeper: Player;
  public forward: Player;

  constructor() {

  }

  isComplete() {
    return this.goalkeeper != null && this.forward != null;
  }

  isPersisted() {
    return this.id != null;
  }
}
