import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UsereditComponent } from './useredit/useredit.component';
import { UserhistoryComponent } from './userhistory/userhistory.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
	{
		path: "",
		component: UserComponent,
		children: [{
			path: '',
			component: UsersComponent,
			data: {
				title: 'Users',
				urls: [
					{ title: 'Dashboard', url: '/dashboard' },
					{ title: 'Users' }
				]
			}
		},
		{
			path: 'useredit',
			component: UsereditComponent,
			data: {
				title: 'Edit User',
				urls: [
					{ title: 'Dashboard', url: '/useredit' },
					{ title: 'Edit User' }
				]
			}
		},
		{
			path: 'users_detail',
			component: UsersDetailComponent,
			data: {
				title: 'User Detail',
				urls: [
					{ title: 'Dashboard', url: '/dashboard' },
					{ title: 'Users Detail' }
				]
			}
		},
		{
			path: 'usershistory',
			component: UserhistoryComponent,
			data: {
				title: 'User History',
				urls: [
					{ title: 'Dashboard', url: '/dashboard' },
					{ title: 'User History' }
				]
			}
		}]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class UserRoutingModule { }
