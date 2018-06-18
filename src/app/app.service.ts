import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map'

@Injectable()
export class AppService {

    constructor(private http: Http) {}

    getComments(url): Observable<any> {
        return this.http.get(url)
                .map((res: Response) => res.json());
    }

}