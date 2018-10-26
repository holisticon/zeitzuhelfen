import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'zzh-i-need-help',
  templateUrl: './i-need-help.component.html',
  styleUrls: ['./i-need-help.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class INeedHelpComponent {

    requirements: [
        'Kontakt mit Tieren',
        'Auto vorhanden',
        'Schwere Hebearbeit',
        'Leichte Hebearbeit',
        'Computerkenntnisse',
        'Fremdsprache'
    ];
}
