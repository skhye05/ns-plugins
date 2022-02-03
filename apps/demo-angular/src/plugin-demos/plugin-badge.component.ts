import { Component, NgZone } from '@angular/core';
import { DemoSharedPluginBadge } from '@demo/shared';

@Component({
  selector: 'demo-plugin-badge',
  templateUrl: 'plugin-badge.component.html',
})
export class PluginBadgeComponent {

  demoShared: DemoSharedPluginBadge;

  constructor(private _ngZone: NgZone) { }

  ngOnInit() {
    this.demoShared = new DemoSharedPluginBadge();
    this.demoShared.requestPermission();
  }

}