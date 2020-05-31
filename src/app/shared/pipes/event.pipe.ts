import { Pipe, PipeTransform } from '@angular/core';
import { compareDatetimes, dateisInDatetimeRange } from "./../utils/date.utils";
import { Happening } from "@core/models/happening.model";

@Pipe({name: 'pastStillAvailable'})
export class PastStillAvailablePipe implements PipeTransform {
  transform(items: Happening[], now: Date): Happening[] {
    if (!items) {
          return items;
      }
     items = items.filter(item => (
       (compareDatetimes(item.end, now) == -1) && (item.availableLiveOnly == false)
     ));
    // console.log(items)
    return items
  }
}

@Pipe({name: 'liveNow'})
export class LiveNowPipe implements PipeTransform {
  transform(items: Happening[], now: Date): Happening[] {
    if (!items) {
          return items;
      }
     items = items.filter(item => (
       dateisInDatetimeRange(now, item.start, item.end)
     ));
    // console.log(items)
    return items
  }
}

@Pipe({name: 'upcoming'})
export class UpcomingPipe implements PipeTransform {
  transform(items: Happening[], now: Date): Happening[] {
    if (!items) {
          return items;
      }
     items = items.filter(item => (
       (compareDatetimes(item.start, now) >= 0)
     ));
    // console.log(items)
    return items
  }
}
