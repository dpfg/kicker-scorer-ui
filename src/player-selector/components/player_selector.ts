import {Component, Input, Output, EventEmitter, ElementRef} from 'angular2/core';

import {Player} from '../../shared/models/player';
import {PlayerService} from '../../shared/services/player';

declare var jQuery: any;

@Component({
  selector: 'player-selector',
  templateUrl: './player-selector/components/player-selector.html',
  styleUrls: ['./player-selector/components/player-selector.css']
})
export class PlayerSelectorComponent {
  @Input() elementId = 'playerSelector';
  @Output() onSelected = new EventEmitter();
  players: Array<Player>;

  constructor(private playerService: PlayerService, private elementRef: ElementRef) {
    playerService
      .getAllPlayers()
      .subscribe(players => this.players = players);
  }

  selectPlayer(player: Player) {
    jQuery(this.elementRef.nativeElement).find('.modal').modal('hide');
    this.onSelected.next(player);
  }

  getUserPicPlaceholder() {
    return 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40';
  }

}
