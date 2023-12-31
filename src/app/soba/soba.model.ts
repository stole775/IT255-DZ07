export class Soba {
    id: number;
    naziv: string;
    link: string;
    votes: number;
    brGostiju: number=0;
    cena: number=0;
   

    constructor(id: number,naziv: string, link: string, votes?: number,brGostiju :number=0, cena: number=0) {
        this.id = id;
        this.naziv = naziv;
        this.link =  link;
        this.votes = votes || 0;
        this.addGosti(brGostiju );
        this.cena=cena;
    }
  
    addGosti(br:number){
        if(br>0){
            this.brGostiju=br;
        }else{
           this.brGostiju=0;
        }
    }

}
