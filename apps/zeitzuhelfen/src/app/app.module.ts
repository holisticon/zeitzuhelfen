import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AuthenticationCallbackComponent, AuthenticationModule, AUTHENTICATION_CONFIG } from '@zeitzuhelfen/authentication';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { DonateHelpComponent } from './donate-help/donate-help.component';
import { HomepageComponent } from './homepage/homepage.component';
import { INeedHelpComponent } from './i-need-help/i-need-help.component';
import { IDonateTimeComponent } from './i-donate-time/i-donate-time.component';
import { AcceptMatchComponent } from './accept-match/accept-match.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        DonateHelpComponent,
        INeedHelpComponent,
        IDonateTimeComponent,
        AcceptMatchComponent
    ],
    imports: [
        BrowserModule,
        NxModule.forRoot(),
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: HomepageComponent
                },
                {
                    path: 'authentication/callback',
                    component: AuthenticationCallbackComponent
                }
            ],
            { initialNavigation: 'enabled' }
        ),
        AuthenticationModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: AUTHENTICATION_CONFIG,
            useValue: environment.authentication
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
