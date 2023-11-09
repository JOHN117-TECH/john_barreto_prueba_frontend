import { AiFillPlayCircle } from 'react-icons/ai';
const Banner = () => {
  const handleClick = () => {
     console.log('Go There');
  };

  return (
    <div className="ContainerMain">
      <div className="Container__Banner">
        <div className="Container__Content">
          <p className="Container__Content--Tittle">Lorem ipsum</p>
          <h3 className="Container__Content--SubTittle">
            Neque porro quisquam
          </h3>
          <p className="Container__Content--Paragraph">
            "Neque porro quiquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velt..."
          </p>
          <p className="Container__Content--Paragraph">
            "There is no one who loves pain itself, who seeks after it and wants
            to have it, simply because it is pain ..."
          </p>
          <button
            className="custom-btn Container__Content--Button"
            onClick={handleClick}
          >
            Go there...
            <AiFillPlayCircle />{' '}
          </button>
        </div>
      </div>
      <div className="Container__Animation">
        <div id="container">
          INNOVACIÓN
          <div id="flip">
            <div>
              <div> & </div>
            </div>
            <div>
              <div>lifeStyle</div>
            </div>
            <div>
              <div>Books and Books</div>
            </div>
          </div>
          DESARROLLO TECNOLÓGICO
        </div>
      </div>
    </div>
  );
};

export default Banner;
