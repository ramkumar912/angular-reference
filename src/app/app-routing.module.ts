import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HexaComponent } from './hexa/hexa.component';
import { ParentComponent } from './parent/parent.component'
import { HomeComponent } from '../app/home/home.component';

const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hexa', component: HexaComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'users', loadChildren: usersModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
