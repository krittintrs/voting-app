export interface Option {
  id: number;
  optionName: string;
  voteId: number;
  voteCount: number;
}

export interface Vote {
  id: number;
  topicName: string;
  topicDescription: string;
  options: Option[];
}
