/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e341abd0e3805651222dd39
*
* You will get 10% discount for each one of your friends
* 
*/
// DEPENDENCIES
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SECURITY
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },

    /* START MY VIEWS */

    { path: 'activitys/:id', loadChildren: './pages/activity-edit/activity-edit.module#ActivityEditModule', canActivate: [AuthGuard] },
    { path: 'activitys/:id', loadChildren: './pages/activity-edit/activity-edit.module#ActivityEditModule', canActivate: [AuthGuard] },
    { path: 'activitys', loadChildren: './pages/activity-list/activity-list.module#ActivityListModule', canActivate: [AuthGuard] },
    { path: 'activitys', loadChildren: './pages/activity-list/activity-list.module#ActivityListModule', canActivate: [AuthGuard] },
    { path: 'home', loadChildren: './pages/home/home.module#HomeModule', canActivate: [AuthGuard] },
    { path: 'schedules/:id', loadChildren: './pages/schedule-edit/schedule-edit.module#ScheduleEditModule', canActivate: [AuthGuard] },
    { path: 'schedules/:id', loadChildren: './pages/schedule-edit/schedule-edit.module#ScheduleEditModule', canActivate: [AuthGuard] },
    { path: 'schedules', loadChildren: './pages/schedule-list/schedule-list.module#ScheduleListModule', canActivate: [AuthGuard] },
    { path: 'schedules', loadChildren: './pages/schedule-list/schedule-list.module#ScheduleListModule', canActivate: [AuthGuard] },
    { path: 'skus/:id', loadChildren: './pages/sku-edit/sku-edit.module#SkuEditModule', canActivate: [AuthGuard] },
    { path: 'skus', loadChildren: './pages/sku-list/sku-list.module#SkuListModule', canActivate: [AuthGuard] },
    { path: 'timesheets/:id', loadChildren: './pages/timesheet-edit/timesheet-edit.module#TimesheetEditModule', canActivate: [AuthGuard] },
    { path: 'timesheets/:id', loadChildren: './pages/timesheet-edit/timesheet-edit.module#TimesheetEditModule', canActivate: [AuthGuard] },
    { path: 'timesheets', loadChildren: './pages/timesheet-list/timesheet-list.module#TimesheetListModule', canActivate: [AuthGuard] },
    { path: 'timesheets', loadChildren: './pages/timesheet-list/timesheet-list.module#TimesheetListModule', canActivate: [AuthGuard] },
    { path: 'users/:id', loadChildren: './pages/user-edit/user-edit.module#UserEditModule', canActivate: [AuthGuard] },
    { path: 'users', loadChildren: './pages/user-list/user-list.module#UserListModule', canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule' }
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
