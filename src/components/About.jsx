function About({ id }) {
    return (
        <>
            <div className="About" id={id}>
                <h1>About</h1>
                <div className="details">
                    <div className="box">
                        <h2>NED University</h2>
                        <h4>2022-2026</h4>
                        <p>
                            Currently Studying in NED University of Engineering and Technology</p>
                    </div>
                    <div className="box">
                        <h2>Govt. College For Men, Nazimabad</h2>
                        <h4>2020-2022</h4>
                        <p>Passed Intermediate in pre-engineering</p>
                    </div>
                    <div className="box">
                        <h2>Metropolis Academy</h2>
                        <h4>2020</h4>
                        <p>Passed Matriculation in 2020</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
