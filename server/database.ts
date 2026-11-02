import {COMMENTS} from "./database-data";


class InMemoryDatabase {

  readAllComments() {
    return Object.values(COMMENTS);
  }

}

export const db = new InMemoryDatabase();
