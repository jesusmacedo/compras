import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsRoutingModule } from './lists-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, ListsRoutingModule]
})
export class ListsModule {}
