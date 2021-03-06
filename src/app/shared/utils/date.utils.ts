import { DatePipe } from '@angular/common';

export function addDaysToDate(date1:Date, count:number): Date{
  let newDate = new Date();
  newDate.setDate(date1.getDate() + count);
  return newDate;
}

export function removeDaysFromDate(date1:Date, count:number): Date{
  let newDate = new Date();
  newDate.setDate(date1.getDate() - count);
  return newDate;
}

export function addTimeToDate(d:Date, t:string): Date {
  let date = new Date(d);
  let time = t.split(':');
  date.setHours(+time[0], +time[1], 0, 0);
  return date;
}

export function compareDates(date1:Date, date2:Date) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  let same = d1.getTime() === d2.getTime();
  if (same) return 0;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
}

export function compareDatetimes(date1:Date, date2:Date) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  let same = d1.getTime() === d2.getTime();
  if (same) return 0;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
}

export function isSameDate(date1:Date, date2:Date): boolean {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);
  return (d1.getTime() === d2.getTime());
}


export function isInDateRange(start:Date, end:Date, date:Date) {
  let newStart = new Date(start);
  let newEnd = new Date(end);
  let compareDate = new Date(date);
  newStart.setHours(0, 0, 0, 0);
  newEnd.setHours(0, 0, 0, 0);
  compareDate.setHours(0, 0, 0, 0)
  return (newStart.getTime() <= compareDate.getTime() && newEnd.getTime() >= compareDate.getTime())
}

export function dateisInDatetimeRange(date:Date, start:Date, end:Date) {
  let newStart = new Date(start);
  let newEnd = new Date(end);
  let compareDate = new Date(date);
  return (newStart.getTime() <= compareDate.getTime() && newEnd.getTime() >= compareDate.getTime())
}


export function dateToApiString(date: Date): string {
      const datepipe = new DatePipe("de");
      var dateString = date.toISOString();
      dateString = datepipe.transform(dateString, 'yyyy-MM-dd HH:mm');
      return dateString;
    }

// @Pipe({name: 'dateToApiString'})
// export class DateToApiStringPipe implements PipeTransform {
//     transform(date: Date): string {
//       const datepipe = new DatePipe("de");
//       var dateString = date.toISOString();
//       dateString = datepipe.transform(dateString, 'yyyy-MM-dd HH:mm');
//       return dateString;
//     }
// }






// @Pipe({name: 'dateExists'})
// export class DateExistsPipe implements PipeTransform {
//     transform(items: any[], filterDate:Date): any {
//       if (!items || !filterDate) {
//             return items;
//         }
//        items = items.filter(item => (isInDateRange(item[startAttr],item[endAttr],filterDate)));
//       return items
//     }
// }

// @Pipe({name: 'compareDates'})
// export class compareDatesPipe implements PipeTransform {
//     transform(d1:Date,d2) {
//       d1.setHours(0, 0, 0, 0);
//       d2.setHours(0, 0, 0, 0);
//     }
// }

// export function compareDates(d1:Date, d2:Date) {
//   d1.setHours(0, 0, 0, 0);
//   d2.setHours(0, 0, 0, 0);
//   let same = d1.getTime() === d2.getTime();
//   if (same) return 0;
//   if (d1 > d2) return 1;
//   if (d1 < d2) return -1;
// }

// @Pipe({name: 'isToday'})
// export class isTodayPipe implements PipeTransform {
//     transform(d1:Date,d2) {
//       d1.setHours(0, 0, 0, 0);
//       d2.setHours(0, 0, 0, 0);
//     }
// }
// export function isNow(start: Date, end: Date): boolean {
//   let now = new Date();
//   return ((start.getTime() <= now.getTime()) && (end.getTime() > now.getTime()));
// }
