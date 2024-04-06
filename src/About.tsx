import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

function About() {
    let languages = [
        // ["Python", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"], 
        ["Python", "src/assets/python.svg"], 
        ["Java", "src/assets/java.svg"],
        ["Swift", "src/assets/swift.svg"],
        ["JavaScript", "src/assets/javascript.svg"],
        ["TypeScript", "src/assets/typescript.svg"],
        ["C++", "src/assets/c++.svg"]
    ];

    let technologies = [
        ["Git", "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"],
        ["PostgreSQL", "src/assets/postgresql.svg"],
        ["Docker", "src/assets/docker.svg"],
        ["React", "src/assets/react.svg"]
    ]

    let tools = [
        ["VS Code", "src/assets/vscode.svg"],
        ["Xcode", "src/assets/xcode.png"],
        ["SQLAlchemy", ""]
    ]

    return (
        <>
            <div className="section-box">
                <h1 className="section-header">About me</h1>
                <div className="about-box">
                    <div className="wide-box">
                        <h4 className="card-title">Experience</h4>
                        <p className="about-content">I'm a passionate developer with over 5 years of programming experience. I'm currently completing a B Adv Comp with a double major in Comp Sci and Software Development at The University of Sydney.<br></br><br></br>I have 6 months of industry experience, where I focused mostly on back-end development and machine learning.</p>
                    </div>
                    <div className="small-box">
                        <h4 className="card-title">Languages</h4>
                        <div className="pills">
                            {languages.map((lang) => (
                                <div className="pill-container" key={lang[0]}>
                                <img className="pill-logo" src={lang[1]}></img>
                                <p>{lang[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="small-box">
                        <h4 className="card-title">Technologies</h4>
                        <div className="pills">
                            {technologies.map((tech) => (
                                <div className="pill-container" key={tech[0]}>
                                <img className="pill-logo" src={tech[1]}></img>
                                <p>{tech[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="small-box">
                        <h4 className="card-title">Tools</h4>
                        <div className="pills">
                            {tools.map((tool) => (
                                <div className="pill-container" key={tool[0]}>
                                <img className="pill-logo" src={tool[1]}></img>
                                <p>{tool[0]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;