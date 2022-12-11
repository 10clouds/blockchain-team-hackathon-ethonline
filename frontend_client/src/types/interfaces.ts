export interface Relationship {
  id: string;
  relationshipId: string;
  firstHalf: string;
  secondHalf: string;
}

export interface RelationshipsData {
  firstHalf: Relationship[];
  secondHalf: Relationship[];
}
