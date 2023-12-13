export class Soba {
    naziv: string;
    link: string;
    votes: number;
    brGostiju: number=0;
   

    constructor(naziv: string, link: string, votes?: number,brGostiju :number=0) {
        this.naziv = naziv;
        this.link =  link;
        this.votes = votes || 0;
        this.addGosti(brGostiju );
    }
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
    
    addGosti(br:number){
        if(br>0){
            this.brGostiju=br;
        }else{
           this.brGostiju=0;
        }
    }

}
