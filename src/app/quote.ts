export class Quote {
    showAuthor: boolean;
    public upvotes: number;
    public downvotes:number; 
        
    
    constructor(
        public Quote: string,
        public name: string,
        public Author: string , 
        public completeDate: Date,
        ){
    this.showAuthor=false;
    this.upvotes= 0;
    this.downvotes= 0;
      
    }
    
}