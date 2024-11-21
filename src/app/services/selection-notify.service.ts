import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SelectionNotifyService {
  private subject = new Subject<number>();

  sendMessage(msg: number) {
    this.subject.next(msg);
  }

  getMessage() {
    return this.subject;
  }
}
