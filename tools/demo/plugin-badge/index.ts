import { DemoSharedBase } from '../utils';
import { requestPremissions, setBadge, removeBadge } from '@skhye05/plugin-badge';

export class DemoSharedPluginBadge extends DemoSharedBase {
  public requestPermission() {
    requestPremissions();
  }

  public setBadgeTo5() {
    setBadge(5);
  }

  public removeBadge() {
    removeBadge();
  }
}