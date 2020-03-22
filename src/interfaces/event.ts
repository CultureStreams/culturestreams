import { Time } from '@angular/common';

export interface Event {
    id: number;
    title: string;
    startTime: number;
    endTime: number;
    date: Date;
    permanentAvailable: boolean;
    link: string;
    shortDescription: string;
    description: string;
    category: string;
    subcategory: string;
    costs: number;
}
