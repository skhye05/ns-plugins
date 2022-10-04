import { Component, NgZone } from '@angular/core';
import { DemoSharedAppDynamics } from '@demo/shared';
import { } from '@skhye05/app-dynamics';

@Component({
	selector: 'demo-app-dynamics',
	templateUrl: 'app-dynamics.component.html',
})
export class AppDynamicsComponent {
  
  demoShared: DemoSharedAppDynamics;
  
	constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedAppDynamics();
  }

}