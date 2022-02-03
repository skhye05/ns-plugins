import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';

const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
	{ path: 'app-center', loadChildren: () => import('./plugin-demos/app-center.module').then(m => m.AppCenterModule) },
	{ path: 'photo-editor', loadChildren: () => import('./plugin-demos/photo-editor.module').then(m => m.PhotoEditorModule) },
	{ path: 'plugin-badge', loadChildren: () => import('./plugin-demos/plugin-badge.module').then(m => m.PluginBadgeModule) }
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
