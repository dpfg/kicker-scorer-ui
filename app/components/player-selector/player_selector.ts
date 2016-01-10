import {Component, Input, Output, EventEmitter, ElementRef} from 'angular2/core';

import {Player} from '../../models/player';
import {PlayerService} from '../../services/player_service';

declare var jQuery: any;

@Component({
  selector: 'player-selector',
  templateUrl: './components/player-selector/player_selector.html',
  styleUrls: ['./components/player-selector/player_selector.css']
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
    console.log('selected in popup');
    jQuery(this.elementRef.nativeElement).find('.modal').modal('hide');
    this.onSelected.next(player);
  }

  private getUserPicPlaceholder() {
    return 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350×150&w=40&h=40';
  }

}
