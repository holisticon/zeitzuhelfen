import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AuthenticationCallbackComponent, AuthenticationModule, AUTHENTICATION_CONFIG } from '@zeitzuhelfen/authentication';
import { environment } from '../environments/environment';
import { AcceptMatchComponent } from './accept-match/accept-match.component';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IDonateTimeComponent } from './i-donate-time/i-donate-time.component';
import { INeedHelpComponent } from './i-need-help/i-need-help.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent,
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
                    path: 'i-need-help',
                    component: INeedHelpComponent
                },
                {
                    path: 'i-donate-time',
                    component: IDonateTimeComponent
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
