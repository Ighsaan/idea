import { data as resultData } from './data/result-data'
import { data as projectData } from './data/project-data'

import { Project } from './types/project-types';
import { Result } from './types/result-types';
export class DataAccessor {
    getResultData(): Array<Result> {
        return resultData;
    }

    getProjectData(id: string): Project {
        return projectData.get(id)!;
    }
}