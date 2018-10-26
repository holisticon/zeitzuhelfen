import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthenticationService } from '@zeitzuhelfen/authentication';

@Component({
    selector: 'zeitzuhelfen-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    constructor(
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.handleAuthentication();
    }

    login() {
        this.authenticationService.login();
    }

    logout() {
        this.authenticationService.logout();
    }

    get isAuthenticated() {
        return this.authenticationService.isAuthenticated();
    }
}
