import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { AuthenticationCallbackComponent, AuthenticationModule, AUTHENTICATION_CONFIG } from '@zeitzuhelfen/authentication';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
    declarations: [
        AppComponent,
        HomepageComponent
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
        AuthenticationModule
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
