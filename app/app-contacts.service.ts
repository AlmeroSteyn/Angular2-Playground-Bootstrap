import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class AppContacts {
  private API_ENDPOINT = 'http://localhost:4000';

  constructor(private _http: Http){
      }

  getContacts(): any{
    return this._http.get(`${this.API_ENDPOINT}/contacts`)
    .map(res => res.json())
    .map(data => data.items);
  }

  getContact(id: string): any {
    return this._http.get(`${this.API_ENDPOINT}/contacts/${id}`)
    .map(res => res.json())
    .map(data => data.item);
  }

}
