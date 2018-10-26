import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export enum Type {
    Request = 'request',
    Offer = 'offer'
}

@Component({
  selector: 'zzh-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchComponent {

    @Input()
    title: string;

    @Input()
    type: Type;

    private routes = {
        [Type.Request]: 'accept-request',
        [Type.Offer]: 'accept-offer'
    }

    constructor(
        private router: Router
    ) {}

    acceptMatch() {
        this.router.navigate([this.routes[<any> this.type]]);
    }

}
