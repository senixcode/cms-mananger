import { AboutMeManangerPage } from "./pages/aboutme.mananger.page";
import { HomePage } from "./pages/home.page";
import { LinkManangerPage } from "./pages/link.mananger.page";
import { ProjectManangerPage } from "./pages/project.mananger.page";
import { RouteManangerPage } from "./pages/route.mananger.page";
import { TopicManangerPage } from "./pages/topic.mananger.page";

export const routesPages = [
    {
        name:"Home",
        path:"/",
        component:HomePage,
    },
    {
        name:"Project",
        path:"/mananger-project",
        component:ProjectManangerPage,
    },
    {
        name:"AboutMe",
        path:"/mananger-aboutme",
        component:AboutMeManangerPage,
    },
    {
        name:"Topic",
        path:"/mananger-topic",
        component:TopicManangerPage,
    },
    {
        name:"Link",
        path:"/mananger-link",
        component:LinkManangerPage,
    },
    {
        name:"Route",
        path:"/mananger-route",
        component:RouteManangerPage,
    },
]