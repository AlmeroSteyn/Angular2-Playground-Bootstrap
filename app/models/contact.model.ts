
export interface IContact {
  id: number,
  firstname: string,
  lastname: string
}

export class Contact implements IContact{

  constructor(public id: number, public firstname:string, public lastname: string){
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }

}
