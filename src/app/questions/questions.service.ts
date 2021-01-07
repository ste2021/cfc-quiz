import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Questions } from './questions';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class QuestionsService {

    constructor(private http: HttpClient) {}

    listFromUser(userName: string) {
        return this.http
            .get<Questions[]>(API + '/' + userName + '/questions');       
    }
    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString())

        return this.http
            .get<Questions[]>(API + '/' + userName + '/questions', { params });
    }
}
