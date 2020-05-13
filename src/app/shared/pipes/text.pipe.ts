import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt',
  pure: false
})
export class TextExcerptFilter implements PipeTransform {
  transform(text: string, length:any ): any {
    if (!text || !length) {
      return text;
    }
    if (text.length > length) {
      return text.substr(0, length) + '...';
    }
      return text;

  }
}

@Pipe({
  name: 'linebreak',
  pure: false
})
export class TextLinebreakFilter implements PipeTransform {
  transform(text: string, length:any ): any {
    text.replace(new RegExp('\n', 'g'), "<br />")
    return text;

  }
}

@Pipe({
  name: 'attachString',
  pure: false
})
export class AttachStringFilter implements PipeTransform {
  transform(text: string, attachText: string ): string {
    return text.concat(attachText);
  }
}
