import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';

declare var mu: any, console: any;

@Injectable()
export class BatchServ {

    constructor(private http: Http, private router: Router) {
    }

}
