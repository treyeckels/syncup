export interface Todo {
  id: string;
  text: string;
}

export interface TodoCreateDto {
  text: string;
}

export interface TodoUpdateDto {
  id: string;
  text: string;
}
