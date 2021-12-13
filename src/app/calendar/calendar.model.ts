import { Professionals } from "../schedule/professionals.model";

export class Calendarappoint {
    constructor(
        public _id:string,
        public appDate:string,
        public appTime:string,
        public professional:Professionals[] | null,
      
        ) { }
}