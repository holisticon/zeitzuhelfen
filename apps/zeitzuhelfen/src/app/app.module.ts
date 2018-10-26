import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AuthenticationCallbackComponent, AuthenticationModule, AUTHENTICATION_CONFIG } from '@zeitzuhelfen/authentication';
import { environment } from '../environments/environment';
import { AcceptOfferComponent } from './accept-offer/accept-offer.component';
import { AcceptRequestComponent } from './accept-request/accept-request.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IDonateTimeComponent } from './i-donate-time/i-donate-time.component';
import { INeedHelpComponent } from './i-need-help/i-need-help.component';
import { MatchComponent } from './match/match.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
        INeedHelpComponent,
        IDonateTimeComponent,
        AcceptOfferComponent,
        AcceptRequestComponent,
        MatchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        NxModule.forRoot(),
        RouterModule.forRoot(
            [
                {
                    path: '',
                    component: HomepageComponent
                },
                {
                    path: 'i-need-help',
                    component: INeedHelpComponent
                },
                {
                    path: 'i-donate-time',
                    component: IDonateTimeComponent
                },
                {
                    path: 'accept-offer',
                    component: AcceptOfferComponent
                },
                {
                    path: 'accept-request',
                    component: AcceptRequestComponent
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
