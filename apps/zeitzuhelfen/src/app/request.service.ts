import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface HelpRequest {
    requirementsList: string[];
    topic: string;
    from: string;
    to: string;
    remarks: string;
}

@Injectable({
  providedIn: 'root'
})
export class RequestService {

    constructor(
        private httpClient: HttpClient
    ) { }

    publish(helpRequest: HelpRequest) {
        return this.httpClient.put(
            'https://zeitzuhelfen-backend.herokuapp.com/api/help',
            helpRequest,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }
        )
    }

}
