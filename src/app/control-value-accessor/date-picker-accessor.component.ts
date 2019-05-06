import { Component, ElementRef, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DatePickerValue {
  day: number;
  month: number;
  year: number;
}

@Component({
  selector: 'app-date-picker-accessor',
  template: `
    <div>
      Day: <input type="number" #dayRef [value]="value?.day" (input)="updateDate()"/>
      Month: <input type="number" #monthRef [value]="value?.month" (input)="updateDate()"/>
      Year: <input type="number" #yearRef [value]="value?.year" (input)="updateDate()"/>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerAccessorComponent),
      multi: true
    }
  ]
})
export class DatePickerAccessorComponent implements ControlValueAccessor {
  value: DatePickerValue;

  @ViewChild('dayRef', { read: ElementRef })
  dayRef: ElementRef<any>;

  @ViewChild('monthRef', { read: ElementRef })
  monthRef: ElementRef<any>;

  @ViewChild('yearRef', { read: ElementRef })
  yearRef: ElementRef<any>;

  private onChange: Function;
  private onTouched: Function;

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  writeValue(value: any): void {
    this.value = value;
  }

  updateDate() {
    this.onChange({
      day: +this.dayRef.nativeElement.value,
      month: +this.monthRef.nativeElement.value,
      year: +this.yearRef.nativeElement.value
    });
    this.onTouched();
  }
}
