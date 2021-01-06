import { Component, OnInit } from '@angular/core'
export interface RouteInfo {
    path: string
    title: string
    icon: string
    class?: string
}

export const ROUTES: RouteInfo[] = [
    { path: '/operator', title: 'Exploitants', icon: 'nc-single-02', class: '' },
    { path: '/formation', title: 'Formations', icon: 'nc-badge', class: '' },
    { path: '/innovation', title: 'Innovations', icon: 'nc-check-2', class: '' },
    { path: '/production', title: 'Productions', icon: 'nc-box-2', class: '' },
    { path: '/evolution', title: 'Evolutions', icon: 'nc-chart-bar-32', class: '' },
    { path: '/cedar', title: 'Les CEDAR', icon: 'nc-simple-add', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    public menuItems: any[]

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem)
    }
}
