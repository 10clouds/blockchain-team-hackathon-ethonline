export type Relationship = {
  id: string;
  relationshipId: string;
  firstHalf: string;
  secondHalf: string;
  startedAt: string;
  NFTPadlock: string;
  NFTFraction: string;
};

export type BreakupProposal = {
  id: string;
  relationshipId: string;
  initiator: string;
};

export type RelationshipsData = {
  firstHalf: Relationship[];
  secondHalf: Relationship[];
};
