export class Quote {
    showAuthor: boolean;
    public upvotes: number;
    public downvotes:number; 
        
    
    constructor(
        // public Quote: string,
        public quote: string,
        public name: string,
        public author: string , 
        public person:string,
        public completeDate: Date,
        ){
    this.showAuthor=false;
    this.upvotes= 0;
    this.downvotes= 0;
      
    }
    
}