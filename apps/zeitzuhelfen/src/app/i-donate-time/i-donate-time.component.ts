import { ChangeDetectionStrategy, Component } from '@angular/core';
import { abilities } from '../abilities';

@Component({
    selector: 'zzh-i-donate-time',
    templateUrl: './i-donate-time.component.html',
    styleUrls: ['./i-donate-time.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IDonateTimeComponent {

    abilities = abilities;
}
