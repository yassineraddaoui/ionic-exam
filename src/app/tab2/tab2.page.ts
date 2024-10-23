import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  id=this.routes.snapshot.paramMap.get('id') || 'Tab 2';
  constructor(private routes:ActivatedRoute) {

  }

}
