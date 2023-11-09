import './Footer.css';

const Footer = () => {
  const handleClick = () => {
    console.log('footer link');
  };

  return (
    <div>
      <footer className="ContainerFooter">
        <div className="ContainerFooter__section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur quaerat quia nisi error doloribus!.
          </p>
        </div>
        <div className="ContainerFooter__section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur quaerat quia nisi error doloribus!.
          </p>
        </div>
        <div className="ContainerFooter__section">
          <h3>Lorem ipsum dolor amet</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            consequuntur quaerat quia nisi error doloribus!.
          </p>
        </div>
      </footer>
      <div className="ContainerFooter__subsection">
        Lorem impsum dolor sit amet consectetur adipisicing elit. &nbsp;
        <a href="#" onClick={handleClick}>
          Link here
        </a>
        &nbsp; Lorem upsum
      </div>
    </div>
  );
};

export default Footer;
