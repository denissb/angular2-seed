import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoBrowserComponent } from './repo-browser/repo-browser.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

const routes: Routes = [  
	{ path: '', component: RepoBrowserComponent,
	    children: [
	      { path: '', component: RepoListComponent },
	      { path: ':org', component: RepoListComponent,
	        children: [
	          { path: '', component: RepoDetailComponent },
	          { path: ':repo', component: RepoDetailComponent }
	        ]
	      }]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);