import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { abilities } from '../abilities';
import { HelpRequest, RequestService } from '../request.service';

@Component({
  selector: 'zzh-i-need-help',
  templateUrl: './i-need-help.component.html',
  styleUrls: ['./i-need-help.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class INeedHelpComponent {

    requirements = abilities;

    request: HelpRequest = {
        from: null,
        to: null,
        topic: null,
        remarks: null,
        requirementsList: []
    }

    constructor(
        private requestService: RequestService,
        private router: Router
    ) {}

}
