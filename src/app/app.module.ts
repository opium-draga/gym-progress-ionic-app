import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {HttpModule} from "@angular/http";
import {MyApp} from './app.component';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { LineChartPage } from '../pages/graphics/line-chart/line-chart';
import { BarChartPage } from '../pages/graphics/bar-chart/bar-chart';
import {GraphicsPage} from "../pages/graphics/graphics";

import {storeFreeze} from "ngrx-store-freeze";
import {compose} from "@ngrx/core/compose";
import {combineReducers, StoreModule} from "@ngrx/store";
import {initialAppState} from "./store/state/app-state";
import { storeDataReducer } from "./store/reducers/store-data-reducer";
import { settingsReducer } from "./store/reducers/settings-reducer";

import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {InfoPage} from "../pages/info/info";

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		GraphicsPage,
		BarChartPage,
		LineChartPage,
		SettingsPage,
		TabsPage,
		InfoPage
	],
	imports: [
		BrowserModule,
		HttpModule,
		IonicModule.forRoot(MyApp,{
        scrollAssist: false, 
        autoFocusAssist: false
    }),
		StoreModule.provideStore(
			compose(storeFreeze, combineReducers)({storeDataReducer, settingsReducer}), 
			initialAppState
		),
		BrowserAnimationsModule,
		NgxChartsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		GraphicsPage,
		BarChartPage,
		LineChartPage,
		SettingsPage,
		TabsPage,
		InfoPage
	],
	providers: [
		NativePageTransitions,
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {
}
