import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ScheduleComponent } from "./schedule/schedule.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { MysettingComponent } from "./user/mysetting/mysetting.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { LoginComponent } from "./user/login/login.component";
import { RegisterComponent } from "./user/register/register.component";
import { ScheduleDetailComponent } from "./schedule/schedule-detail/schedule-detail.component";
import { ScheduleEditComponent } from "./schedule/schedule-edit/schedule-edit.component";
import { CalendarDetailComponent } from "./calendar/calendar-detail/calendar-detail.component";
import { CalendarEditComponent } from "./calendar/calendar-edit/calendar-edit.component";

const appRoutes:Routes = [
    {path:'', redirectTo:'/schedule', pathMatch: 'full' },
    {path:'schedule', component:ScheduleComponent, children:[
        {path:':id', component:ScheduleDetailComponent},
        {path:':id/new', component:ScheduleEditComponent},
    ]},


    {path:'appointment', component:CalendarComponent, children:[
        {path:':id', component:CalendarDetailComponent},
        {path:':id/new', component:CalendarEditComponent}, 
        {path:':id/edit', component:CalendarEditComponent}   
    ]},
    

    {path:'user/settings', component:MysettingComponent},
    {path:'user/profile', component:ProfileComponent},
    {path:'user/login', component:LoginComponent},
    {path:'user/register', component:RegisterComponent},


];



@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})



export class AppRoutingModule{

    
}