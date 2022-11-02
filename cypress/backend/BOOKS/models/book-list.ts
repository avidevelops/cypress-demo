export interface ISBNListRequest {
    userId: string;
    collectionOfIsbns: ISBNModel[];
}

export interface ISBNRequest {
    userId: string;
    isbn: string;
}

export interface ISBNModel {
    isbn: string;
}