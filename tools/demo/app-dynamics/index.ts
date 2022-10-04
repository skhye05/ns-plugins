import { DemoSharedBase } from '../utils';
import { AppDynamics } from '@skhye05/app-dynamics';

export class DemoSharedAppDynamics {

  testIt() {
    const appDynamics =  AppDynamics.signIn();
    console.log('test app-dynamics!');
  }
}
