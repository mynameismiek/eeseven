import { E7dbArtifactData } from './e7db-artifact-data';

export interface E7dbArtifactQuery {
  results: Array<E7dbArtifactData>;
  meta: {
    requestDate: VarDate;
    apiVersion: string;
  }
}