import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

export interface DatePickerValue {
  day: number;
  month: number;
  year: number;
}

@Component({
  selector: 'app-date-picker',
  template: `
    <div>
      Day: <input type="number" #dayRef [value]="value?.day" (input)="updateDate()"/>
      Month: <input type="number" #monthRef [value]="value?.month" (input)="updateDate()"/>
      Year: <input type="number" #yearRef [value]="value?.year" (input)="updateDate()"/>
    </div>
  `
})
export class DatePickerComponent {
  @Input()
  value: DatePickerValue;
  @Output()
  valueChange = new EventEmitter<DatePickerValue>();

  @ViewChild('dayRef', { read: ElementRef })
  dayRef: ElementRef<any>;

  @ViewChild('monthRef', { read: ElementRef })
  monthRef: ElementRef<any>;

  @ViewChild('yearRef', { read: ElementRef })
  yearRef: ElementRef<any>;

  updateDate() {
    this.valueChange.emit({
      day: +this.dayRef.nativeElement.value,
      month: +this.monthRef.nativeElement.value,
      year: +this.yearRef.nativeElement.value
    });
  }
}
