import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  //this is a variable that hold number
  projectcount: number = 0;
  //same process
  accuratecount: number = 0;
  clientcount: number = 0;
  customerfeedback: number = 0;
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop: any = setInterval(() => {
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if (this.projectcount == 150) {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }
  }, 10); //10 is milisecond you can control it

  accuratecountstop: any = setInterval(() => {
    this.accuratecount++;
    if (this.accuratecount == 90) {
      clearInterval(this.accuratecountstop);
    }
  }, 10);

  clientcountstop: any = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 3) {
      clearInterval(this.clientcountstop);
    }
  }, 10);

  customerfeedbackstop: any = setInterval(() => {
    this.customerfeedback++;
    if (this.customerfeedback == 4) {
      clearInterval(this.customerfeedbackstop);
    }
  }, 10);
}
