export interface CreateOptionRequest {
  optionName: string;
}

export interface CreateVoteRequest {
  topicName: string;
  topicDescription: string;
  options: CreateOptionRequest[];
}
