import ProgressBar from 'progress';
export declare class MultipleBar {
    constructor();
    newBar(schema: any, options: any): ProgressBar;
    terminate(): void;
    move(index: any): void;
    tick(index: any, value: any, options: any): void;
}
