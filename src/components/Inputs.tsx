import { ChangeEvent, FormEvent, useRef, useState } from 'react';

interface Prop {
  name: '';
  email: '';
}

const Inputs = () => {
  const [isActived, setIsActive] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [inputValue, setInputValue] = useState<Prop>({ name: '', email: '' });
  const showCheckboxes = () => {
    setIsActive(!isActived);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { name, email } = inputValue;
    const textareaValue = `Name: ${name}\nEmail: ${email}`;
    const textarea = textareaRef.current;
    if (textarea === null) {
      return;
    }
    textarea.value = textareaValue;
  }
  return (
    <section className="ContainerInputs">
      <div className="ContainerInputs__main">
        <div className="multiselect">
          <div className="selectBox" onClick={showCheckboxes}>
            <select>
              <option>Select</option>
            </select>
            <div className="overSelect"></div>
          </div>
          <div id="checkboxes" className={`checkboxes ${isActived}`}>
            <label htmlFor="one">
              <input type="checkbox" id="one" />
              &nbsp; &nbsp; Option 1
            </label>
            <label htmlFor="two">
              <input type="checkbox" id="two" />
              &nbsp; &nbsp; Option 2
            </label>
            <label htmlFor="three">
              <input type="checkbox" id="three" />
              &nbsp; &nbsp; Option 3
            </label>
            <label htmlFor="four">
              <input type="checkbox" id="four" />
              &nbsp; &nbsp; Option 4
            </label>
          </div>
        </div>
      </div>
      <div className="ContainerItems">
        <ul>
          <li className="ContainerItems__item">
            <label htmlFor="r1">
              <input type="radio" id="r1" name="mismo" />
              &nbsp; &nbsp;&nbsp; &nbsp; Option 1
            </label>
          </li>
          <li className="ContainerItems__item">
            <label htmlFor="r2">
              <input type="radio" id="r2" name="mismo" />
              &nbsp; &nbsp;&nbsp; &nbsp; Option 2
            </label>
          </li>
          <li className="ContainerItems__item">
            <label htmlFor="r3">
              <input type="radio" id="r3" name="mismo" />
              &nbsp; &nbsp;&nbsp; &nbsp; Option 3
            </label>
          </li>
          <li className="ContainerItems__item">
            <label htmlFor="r4">
              <input type="radio" id="r4" name="mismo" />
              &nbsp; &nbsp;&nbsp; &nbsp; Option 4
            </label>
          </li>
        </ul>
      </div>
      <div className="ContainerForm">
        <form className="ContainerForm__Form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={inputValue.name}
            id='name'
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id='email'
            name="email"
            value={inputValue.email}
            onChange={handleChange}
          />
          <textarea
            cols={30}
            rows={6}
            ref={textareaRef}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Inputs;
