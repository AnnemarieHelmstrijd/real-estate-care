import { createRouter, createWebHistory } from "vue-router";

import WelcomeScreen from '../components/WelcomeScreen'
import CompletedReportsComponent from '../components/reports/CompletedReports'
import ScheduledReportsComponent from '../components/reports/ScheduledReportsList'
import ActiveTaskComponent from '../components/ActiveTask'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: WelcomeScreen,
    },
    {
        path: '/CompletedReports',
        name: 'Completed reports',
        component: CompletedReportsComponent,
    },
    {
        path: '/ScheduledReports',
        name: 'Scheduled reports',
        component: ScheduledReportsComponent,
    },
    {
        path: '/ActiveTask',
        name: 'Active Task',
        component: ActiveTaskComponent,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;