import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventsListComponent,
  EventsListResolverService,
  CreateSessionComponent
} from './events/index';

import { PageNotFoundComponent } from './errors/page-not-found.component';
import { EventResolverService } from './events/shared/event-resolver/event-resolver.service';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService }},
  { path: 'events/:id', component: EventDetailsComponent, resolve: { event: EventResolverService } },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
