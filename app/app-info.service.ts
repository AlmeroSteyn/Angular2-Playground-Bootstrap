import {Injectable} from "angular2/core";

@Injectable()
export class AppInfo {
  getInfo(): any{
    return [{
      id: 1,
      name: 'Jon'
    },{
      id: 2,
      name: 'Jack'
    },{
      id: 3,
      name: 'Paul'
    },{
      id: 4,
      name: 'Elvis'
    },{
      id: 5,
      name: 'Dan'
    },];
  }
}
