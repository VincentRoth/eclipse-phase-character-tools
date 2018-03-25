import { Aptitude } from './aptitude';
import { Skill } from './skill';
import { Trait } from './trait';
import { Reputation } from './reputation';
import { Morph } from './morph';

export class Character {

    // Remaining custumisation points
    public freeCP: number;

    public backgroundRef: string;

    public factionRef: string;

    public aptitudes: Aptitude[];

    public moxie: number;

    public traits: Trait[];

    public skills: Skill[];

    public psiSleightRefs: string[];

    public reputations: Reputation[];

    public credits: number;

    public morphs: Morph[];

    public gearRefs: string[];

    public motivations: string[];

}
