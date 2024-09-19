function Intro({id}) {
  return (
    <>
      <div className="intro" id={id}>
        <div className="Intro-text">
            <h4>Hello</h4>
            <span className="name-span">My Name is <span className="main-name">Anas Khan</span></span>
            <p>Creative and passionate web designer with expertise in crafting visually stunning and user-friendly websites. </p>
            <button className="Contact-button"><a href="#contact">Contact Me</a></button>
        </div>
        
        
      </div>
    </>
  );
}

export default Intro;
