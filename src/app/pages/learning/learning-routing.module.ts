import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../tickets/list/list.component';

const routes: Routes = [
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule)
  },
  {
    path: 'instructors', loadChildren: () => import('./instructors/instructors.module').then(m => m.InstructorsModule)
  },

  { path: 'tickets/list/:id', component: ListComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
