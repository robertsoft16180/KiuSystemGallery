import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {   path: '',
                redirectTo: 'gallery',
                pathMatch: 'prefix'
            },
            {
                path: 'gallery',
                loadChildren: './components/gallery/gallery.module#GalleryModule'
            }
        ]
    },
    { path: '**', redirectTo: '/gallery' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
