import Book from "@/subjects/story/entities/Book.class";
import Page from "@/subjects/story/entities/Page.class";

export interface AppState {
  books: Book[];
}

export const APP_INITIAL_STATE: AppState = {
  books: [{
    pages: [
      new Page(1)
    ]
  }]
};