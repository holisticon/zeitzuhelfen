import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MatchService {

    constructor(
        private httpClient: HttpClient
    ) { }

    getAll() {
        return this.httpClient.get('https://zeitzuhelfen-backend.herokuapp.com/api/help', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        })
    }

}
