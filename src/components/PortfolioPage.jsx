export default function PortfolioPage() {
    const projects = [
        {
        id: 1,
        name: 'Daily Dashboard',
        description: "A home page to plan your daily schedule, check the weather, and watch youtube, all in one tab.",
        image: "./src/planner.gif",
        git: "https://github.com/S10skeleton/Daily-Dashboard"
        },
        {
            id: 2,
            name: "Social Network API",
            description: "Social network backend allowing you to add and remove friends, posts, and comments.",
            image: "./src/network.png",
            git: "https://github.com/jamesbruckner/social_network_api"
        },
        {
            id: 3,
            name: "Workplace Management",
            description: "App used to organize schedules, roles, tasks, and incident reports ",
            image: "./src/workplace.png",
            git: "https://github.com/jamesbruckner/workplace_management_app"
        },
        {
            id: 4,
            name: "Book Search Engine",
            description: "Uses Google API to look up any book.",
            image: "./src/book.png",
            git: "https://github.com/jamesbruckner/MERN-Book-Search-Engine"
        },
        {
            id: 5,
            name: "Employee Tracker",
            description: "Track and record employee roles and salaries on MySQL backend. Not Deployed.",
            image: "./src/emptracker.gif",
            git: "https://github.com/jamesbruckner/employee_tracker"
        },
        {
            id: 6,
            name: "Weather App",
            description: "Uses Weather API to tell the weather and weekly forecast in any searched city. Not Deployed.",
            image: "./src/weather.png",
            git: "https://github.com/jamesbruckner/weather_page"
        }
    ];

    return (
        <div className="portfoliopage">
            <h1>Portfolio</h1>
            <div className="card-map">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <h2 className="project-name">{project.name}</h2>
                        <img src={project.image} alt={project.name}></img>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link">View Deployed Project</a>
                        <a href={project.git} className="project-link">-View Github Repository</a>
                    </div>
                ))}
            </div>
        </div>
    );
}
