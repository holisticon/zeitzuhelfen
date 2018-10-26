import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationCallbackComponent } from './authentication-callback/authentication-callback.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AuthenticationCallbackComponent
    ],
    exports: [
        AuthenticationCallbackComponent
    ]
})
export class AuthenticationModule { }
