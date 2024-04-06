import "bootstrap/dist/css/bootstrap.css"

function Projects() {
    let myProjects = [
        // [NAME, DESCRIPTION, TECHNOLOGIES, LOGO, LINK]
        ["PassGuard", "IOS password manager that can generate and store passwords locally, using a custom encryption algorithm.", "Swift, Xcode", "src/assets/PassGuardLogo.png", "https://github.com/Monterey101/PassGuard"],
        ["PrivateDrive", "Desktop app for the Front-End of a private file server.", "Python, Tkinter", "src/assets/PrivateDriveLogo.png", "https://github.com/Monterey101/PrivateDrive"],
        ["TapBlue", "Simple and fun IOS app for passing the time by guessing the colour of the circle.", "Swift, Xcode", "src/assets/TapBlueLogo.png", "https://github.com/Monterey101/TapBlue"],
        ["Quest", "2D maze puzzle game for Desktop with multiple levels.", "Python, Tkinter", "src/assets/QuestLogo.png", "https://github.com/Monterey101/Quest"],
        ["Snake (Under dev)", "Snake game controlled by arrow keys, slowly getting larger and larger.", "Python, Tkinter", "src/assets/SnakeLogo.png", ""]
        ];

    return (
        <>
            <div className="section-box">
                <h1 className="section-header">GitHub</h1>
                <h4 className="note">Monterey101</h4>
                <div className="projects-list">
                    {myProjects.map((item) => (
                        <div className="card mb-3 dark" key={item[0]}>
                            <div className="row">
                                <div className="col-md-2 repo-link-div">
                                    <img src={item[3]} className="img-fluid logo" alt="..."></img>
                                </div>
                                <div className="col-md-7 description">
                                    <div className="card-body">
                                    <h5 className="card-title">{item[0]}</h5>
                                    <p className="card-text">{item[1]}</p>
                                    <p className="small">{item[2]}</p>
                                    </div>
                                </div>
                                <div className="col-md-3 repo-link-div">
                                    {item[4] != "" ? 
                                        <a className="link-class" href={item[4]} target="_blank">
                                            <button className="repo-link">
                                                <p className="link-name">GitHub Repo</p>
                                                <p className="arrow">→</p>
                                            </button>
                                        </a> : 
                                        <a className="link-class">
                                            <button className="disabled">
                                                <p className="link-name">GitHub Repo→</p>
                                            </button>
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;
