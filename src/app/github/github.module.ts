import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { GithubService } from './shared/github.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { RepoBrowserComponent } from './repo-browser/repo-browser.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { routing } from './github.routing';

@NgModule({
  declarations: [
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    routing
  ],
  providers: [
    GithubService
  ],
  bootstrap: [ RepoBrowserComponent ]
})

export class GithubModule {
}
