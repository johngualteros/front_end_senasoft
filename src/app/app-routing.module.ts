import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { RegisterThemeComponent } from './register-theme/register-theme.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'registerUser', component: RegisterUserComponent},
  { path: 'registerTheme', component: RegisterThemeComponent},
  { path: 'createQuestion', component: CreateQuestionComponent},
  { path: 'forum', component: ForumComponent},
  { path: 'question', component: QuestionsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
