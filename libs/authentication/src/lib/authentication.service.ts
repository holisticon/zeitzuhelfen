import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';

export const AUTHENTICATION_CONFIG = new InjectionToken('AuthenticationConfig');

export interface AuthenticationConfig {
    redirectUri: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private auth0;

    constructor(
        @Inject(AUTHENTICATION_CONFIG) private config: AuthenticationConfig,
        private router: Router
    ) {
        this.auth0 = new auth0.WebAuth({
            clientID: 'GDx8SFKfB4VMVimt8FP5djS3ObkxRCyz',
            domain: 'zeitzuhelfen.eu.auth0.com',
            responseType: 'token id_token',
            redirectUri: config.redirectUri,
            scope: 'openid'
        })
    }

    public login(): void {
        this.auth0.authorize();
    }

    public logout(): void {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');

        this.router.navigate(['/']);
    }

    public isAuthenticated(): boolean {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    }


    public handleAuthentication(): void {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/']);
            } else if (err) {
                this.router.navigate(['/']);
                console.log(err);
            }
        });
    }

    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        console.log(`access_token: ${authResult.accessToken}`);
        console.log(`id_token: ${authResult.idToken}`);
        console.log(`expires_at: ${expiresAt}`);
    }

}
