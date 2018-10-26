import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatchService } from '../match.service';

@Component({
  selector: 'zzh-homepage',
  templateUrl: './homepage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent {

    matches: Observable<any>;

    constructor(
        private matchService: MatchService
    ) {
        this.matches = matchService.getAll();
    }

}
