import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard.component';
import { SalesratioGraphComponent } from './dashboard-components/salesratio-graph/salesratio-graph.component';
import { LatestSalesComponent } from './dashboard-components/latest-sales/latest-sales.component';
import { ReferalEarningComponent } from './dashboard-components/referal-earning/referal-earning.component';
import { UsersComponent } from './dashboard-components/users/users.component';
import { RecentCommentsComponent } from './dashboard-components/recent-comments/recent-comments.component';
import { TempGuideComponent } from './dashboard-components/temp-guide/temp-guide.component';

const routes: Routes = [
	{
		path: '',
		data: {
			title: 'Dashboard'
		},
		component: DashboardComponent
	}
];

@NgModule({
	imports: [FormsModule, CommonModule, RouterModule.forChild(routes), ChartsModule],
	declarations: [DashboardComponent, SalesratioGraphComponent, LatestSalesComponent, ReferalEarningComponent, UsersComponent,RecentCommentsComponent, TempGuideComponent]
})
export class DashboardModule {}
