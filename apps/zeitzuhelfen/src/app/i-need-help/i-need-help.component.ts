import { ChangeDetectionStrategy, Component } from '@angular/core';
import { abilities } from '../abilities';

@Component({
  selector: 'zzh-i-need-help',
  templateUrl: './i-need-help.component.html',
  styleUrls: ['./i-need-help.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class INeedHelpComponent {

    requirements = abilities;

}
