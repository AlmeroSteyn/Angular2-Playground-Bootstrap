import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {IContact} from "../models/contact.model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class QaDemoContacts {

  private API_ENDPOINT = 'http://localhost:4000';

  constructor(private http:Http){}

  getContacts(): Observable<IContact[]>{
    return this.http.get(`${this.API_ENDPOINT}/contacts`)
    .map(res => res.json())
    .map(data => data.items);
  }

}
