import { IJournalPost } from '../models/journalPost';

export class JournalPostMap {
  static toSimpleDTO(journalPost: IJournalPost): IJournalPost {
    return this.toDTO(journalPost);
  }

  static toDTO(journalPost: IJournalPost): IJournalPost {
    return {
      id: journalPost.id,
      title: journalPost.title,
      date: journalPost.date,
      notes: journalPost.notes || '',
      workOn: journalPost.workOn || '',
      misc: journalPost.misc || '',
    };
  }
}
