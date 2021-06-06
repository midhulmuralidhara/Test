import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportcontainerComponent } from 'src/reportcontainer/reportcontainer.component';

const routes: Routes = [
  {path:'',component:ReportcontainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
