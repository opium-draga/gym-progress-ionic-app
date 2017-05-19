import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StoreModule} from "@ngrx/store";
import {appState} from "./store/reducers/app-reducer";
import {initialAppState} from "./store/state/app-state";
import {GraphicsPage} from "../pages/graphics/graphics";

import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpModule} from "@angular/http";


@NgModule({
	declarations: [
		MyApp,
		HomePage,
		GraphicsPage,
		TabsPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp),
		StoreModule.provideStore({appState}, initialAppState),
		BrowserAnimationsModule,
		NgxChartsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		GraphicsPage,
		TabsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {
}
