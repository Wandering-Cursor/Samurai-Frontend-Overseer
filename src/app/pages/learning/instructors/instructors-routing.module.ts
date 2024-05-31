import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component
import { ListComponent } from './list/list.component';
import { ListComponent as TicketListComponent } from '../../tickets/list/list.component';
import { GridComponent } from './grid/grid.component';
import { OverviewComponent } from './overview/overview.component';
import { CreateComponent } from './create/create.component';
import { OverseerListComponent } from '../overseer/overseer-list/overseer-list.component';


const routes: Routes = [
  {
    path: "instructors-list/:teacherId",
    component: ListComponent
  },
  {
    path: "instructors-grid",
    component: GridComponent
  },
  {
    path: "instructors-overview",
    component: OverviewComponent
  },
  {
    path: "instructors-create",
    component: CreateComponent
  },
  { path: 'tickets/list/:id', component: TicketListComponent },
  { path: 'list-of-instructors', component: OverseerListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorsRoutingModule { }
