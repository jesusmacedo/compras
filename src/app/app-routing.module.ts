import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'compras/auth',
        pathMatch: 'full'
    },
    {
        path: 'compras/auth',
        loadChildren: '../pages/auth/auth.module#AuthModule'
    },
    {
        path: 'compras/dashboard',
        loadChildren: '../pages/lists/lists.module#ListsModule'
    },
    {
        path: '**',
        redirectTo: 'compras/auth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
