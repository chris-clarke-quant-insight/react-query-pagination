import { CalenderIcon } from "./icons/";
import { DashIcon } from "./icons/";
import { DocumentsIcon } from "./icons/";
import { ProjectsIcon } from "./icons/";
import { ReportsIcon } from "./icons/";
import { TeamIcon } from "./icons/";

const NavItem = ({ isHighlight, icon, title, link }) => {
    return (<li>
        <a href={link} className={isHighlight? "air bac bpv ls aaa adp aqn avv awk awb" : "axk blo bie bpv ls aaa adp aqn avv awk awb"}>
            {icon}
            <span className="t">{title}</span>
        </a>
    </li>
)
}

export default function Nav(props) {
    const { location = "dashboard" } = props;

    return (<nav className="lh">
        <ul role="list" className="ls ym yu abj">
            <NavItem isHighlight={location === "dashboard"} icon={<DashIcon />} title="dashboard" link="dashboard" />
            <NavItem isHighlight={location === "team"} icon={<TeamIcon />} title="Team" link="team" />
            <NavItem isHighlight={location === "projects"} icon={<ProjectsIcon />} title="Projects" link="projects" />
            <NavItem isHighlight={location === "calendar"} icon={<CalenderIcon />} title="Calendar" link="calendar" />
            <NavItem isHighlight={location === "documents"} icon={<DocumentsIcon />} title="Documents" link="documents" />
            <NavItem isHighlight={location === "reports"} icon={<ReportsIcon />} title="Reports" link="reports" />
        </ul>
    </nav>)
}