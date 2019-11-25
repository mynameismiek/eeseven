import { E7dbArtifactData } from '../epic-seven-db/e7db-artifact-data';
import { ArtifactData } from '../interfaces/artifact-data';

export interface ArtifactEditorDialogData {
  artifact: E7dbArtifactData;
  userArtifacts: ArtifactData;
}