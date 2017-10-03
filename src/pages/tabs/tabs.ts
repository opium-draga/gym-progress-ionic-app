import { SettingsPage } from '../settings/settings';
import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {GraphicsPage} from "../graphics/graphics";
import {InfoPage} from "../info/info";
import {AlertController} from "ionic-angular";

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {

	tab1Root = HomePage;
	tab2Root = GraphicsPage;
	tab3Root = SettingsPage;
	tab4Root = InfoPage;

	constructor(public alertCtrl: AlertController) {

	}

}
