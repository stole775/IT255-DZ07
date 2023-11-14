export class Soba {
    naziv: string;
    link: string;
    votes: number;
    brGostiju: number=0;

    constructor(naziv: string, link: string, votes?: number,brGostiju :number=0) {
        this.naziv = naziv;
        this.link = link;
        this.votes = votes || 0;
        this.addGosti(brGostiju );
    }
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
    // domain() je funkcija koja izdvaja
    // domen iz URL, biće uskoro objašnjena
    domain(): string | null {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
    addGosti(br:number){
        if(br>0){
            this.brGostiju=br;
        }else{
           this.brGostiju=0;
        }
    }

}
