import { IconLookup, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';

declare module '@fortawesome/fontawesome-svg-core' {
    interface IconDefinition extends IconLookup {
        icon: [
            number, // width
            number, // height
            string[], // ligatures
            string, // unicode
            string // svgPathData
        ];

        [index: string]: [
            number, // width
            number, // height
            string[], // ligatures
            string, // unicode
            string // svgPathData
        ] | IconName | IconPrefix;
    }
    
    interface Library {
        readonly definitions: { fas: IconDefinition, fab: IconDefinition, far: IconDefinition, fal: IconDefinition };
    }
}