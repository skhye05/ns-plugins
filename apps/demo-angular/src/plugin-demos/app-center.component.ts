import { Component, NgZone } from '@angular/core';
import { DemoSharedAppCenter } from '@demo/shared';

@Component({
	selector: 'demo-app-center',
	templateUrl: 'app-center.component.html',
})
export class AppCenterComponent {
  
  demoShared: DemoSharedAppCenter;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAppCenter();
  }

}