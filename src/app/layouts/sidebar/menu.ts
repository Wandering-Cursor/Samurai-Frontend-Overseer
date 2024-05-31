import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.APPS.LIST.LISTVIEW',
        icon: 'bx bx-list-ul',
        link: '/learning/list-of-instructors',
        parentId: 34
    },
    {
        id: 3,
        label: 'MENUITEMS.DASHBOARD.LIST.LEARNING',
        link: '/learning',
        icon: 'ph-gauge',
        parentId: 2
    },
    {
        id: 4,
        label: 'MENUITEMS.APPS.LIST.CHAT',
        icon: 'ph-chats',
        link: '/apps/chat',
        parentId: 8
    }
]