declare module 'gsap' {
    export interface GSAPTimeline {
        to(targets: any, vars: any): GSAPTimeline;
        from(targets: any, vars: any): GSAPTimeline;
    };

    export function timeline(vars?: any): GSAPTimeline;
    export function to(targets: any, vars: any): GSAPTimeline;
    export function from(targets: any, vars: any): GSAPTimeline;
};