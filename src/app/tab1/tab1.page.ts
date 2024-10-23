import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  list = [
    {
      name: 'Java',
      value: 'java',
      image: '	https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
    {
      name: 'Angular',
      value: 'angular',
      image: '	https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
    {
      name: 'Ionic',
      value: 'ionic',
      image: '	https://ionicframework.com/docs/img/demos/thumbnail.svg',
    },
  ];
  constructor() {}
}
