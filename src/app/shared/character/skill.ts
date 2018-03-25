import { AptitudeType } from './aptitude-type.enum';
import { SkillCategory } from './skill-category.enum';

export class Skill {

    public referenceName: string;

    public aptitude: AptitudeType;

    public defaulting: boolean;

    public category: SkillCategory;

    public field: string;

    public specialization: string;
}
