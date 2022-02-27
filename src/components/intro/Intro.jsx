import "./intro.css";
// import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <div className="underline"></div>
          <h1 className="i-name">Utkarsh Gupta</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Photography</div>
              <div className="i-title-item">Videography</div>
              <div className="i-title-item">Content Creator</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id tempora facilis unde sit impedit voluptates voluptatem praesentium, eius accusamus animi deserunt soluta laborum odio delectus adipisci veritatis placeat incidunt libero.
          </p>
        </div>
       
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
