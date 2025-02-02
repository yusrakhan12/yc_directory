// types.d.ts
export interface Author {
    _id: number;
    name: string;
  }
  
  export interface StartupTypeCard {
    _createdAt: string;
    views: number;
    author: Author;
    _id: number;
    description: string;
    image: string;
    category: string;
    title: string;
  }