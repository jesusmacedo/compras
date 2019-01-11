import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/components/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsRoutingModule } from './lists-routing.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [CommonModule, ListsRoutingModule, SharedModule]
})
export class ListsModule {}
