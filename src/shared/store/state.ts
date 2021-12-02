import Book from "@/subjects/story/entities/Book.class";

export interface AppState {
  books: Book[];
}

export const APP_INITIAL_STATE: AppState = {
  books: [{
    pages: [
    ]
  }]
};