export class Book {
constructor(title,author,description,pages,currentPage,read){
    this.title=title;
    this.author=author;
    this.description=description;
    this.pages=pages;
    this.currentPage=currentPage;
    this.read=Boolean;
}

readBook(page) {
    if (page === this.pages) {
        this.read = true;
        return 1;
    }
    else if (page < 1 || page > this.pages) {
        this.read = false;
        return 0;
    }
    else if (page >= 1 || page < this.pages) {
        this.currentPage = page;
        this.read = false;
        return 1;
    }
     
}
}
const newBook1 = new Book("La Conjuration des imbéciles ", "John Kennedy Toole", "Roman", 480);
const newBook2 = new Book("Tout ce que j’aimais ", "Siri Hustvedt", "roman", 464);
const newBook3 = new Book("le roi lion", "bomidou dyara", "kids", 200);
const newbook3 = new Book( "juju le clown", "juju","kids",200)
export const books = [newBook1,newBook2,newBook3];
