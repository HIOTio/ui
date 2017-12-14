import { Component, OnDestroy, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import {Observable} from 'rxjs/Rx';

export interface Image {
  title: string;
  text: string;
  img: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  animations: [
    trigger('slide', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(-50%)' })),
      transition('* => *', animate(300))
  ])
],
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  public slides: Image[] = [
    { 'title': 'Traditional Scaling', 'text': 'With a traditional IOT platform, more devices means more platform resources to handle data ingestion and aggregation' , 'img': 'assets/images/traditionalIOT.svg'},
    { 'title': 'Traditional Resourcing', 'text': 'While your platform resources grow, your device resources are underutlised', 'img': 'assets/images/traditionalIOT.svg'},
    { 'title': 'Scaling with HIOT', 'text': 'With HIOT, spare processing power in your devices is used to aggregate and collate data before sending it to the platform', 'img': 'assets/images/traditionalIOT.svg'},
    { 'title': 'Device roles', 'text': 'Eac device can have one or more active roles, allowing you to optimise performance across the deployment ', 'img': 'assets/images/traditionalIOT.svg' },
    { 'title': 'Handlers', 'text': 'Third party devices can be easily integrated using handler code', 'img': 'assets/images/traditionalIOT.svg'}
  ];
  private timer;
  ticks= 0;
  index= 0;
  leftStyle= { 'left': '0%' };
  activeInd= [{'visibility': 'visible'}, {'visibility': 'hidden'}, {'visibility': 'hidden'},
  {'visibility': 'hidden'}, {'visibility': 'hidden'}];
 ngOnInit() {
   this.timer = Observable.timer(2000, 5000);
   this.timer.subscribe(t => this.tickerFunc(t));
 }
   tickerFunc(tick) {
     for ( let i = 0; i < this.slides.length; i++) {
        this.activeInd[i] = {'visibility': 'hidden'};
     }
     this.index++;
     this.activeInd[this.index] = {'visibility': 'visible'};
     if (this.index >= this.slides.length) {
        this.index = 0;
     }

   this.leftStyle.left = (this.index * -100) + '%';
 }

  ngOnDestroy() {

 }
}

