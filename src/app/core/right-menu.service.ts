import { Injectable, signal, Output, EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RightMenuService {
  @Output() set: EventEmitter<any> = new EventEmitter();
}
