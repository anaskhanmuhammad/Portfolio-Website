function ProjectCard({p}) {
    return <>

            <div className="card">
                <img src={p.image} alt="" />
                <div className="info">
                    <h1>{p.name}</h1>
                    <p>{p.desc}</p>
                    <a href="" className="btn">GitHub Link</a>
                </div>
            </div>

    </>
}

export default ProjectCard;