function Intro({id}) {
  return (
    <>
      <div className="intro" id={id}>
        <div className="Intro-text">
            <h4>Hi</h4>
            <span className="name-span">My Name is <span className="main-name">Anas Khan</span></span>
            <p>Aspiring and enthusiastic web designer with a passion for creating visually appealing and user-friendly websites </p>
            <button className="Contact-button"><a href="#contact">Contact Me</a></button>
        </div>
        
        
      </div>
    </>
  );
}

export default Intro;
