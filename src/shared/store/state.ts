import Book from "@/subjects/story/entities/Book.class";

export interface AppState {
  books: Book[];
}

export const APP_INITIAL_STATE: AppState = {
  books: [
    {
      papers: [
        {
          paperNumber: 1,
          frontPage: {
            items: []
          },
          backPage: {
            items: []
          }
        },
        {
          paperNumber: 2,
          frontPage: {
            items: []
          },
          backPage: {
            items: []
          }
        },
        {
          paperNumber: 3,
          frontPage: {
            items: []
          },
          backPage: {
            items: []
          }
        }
      ]
    }
  ]
};