import { SimpleyComplexPropertiesPropsType } from 'Types';
import { deletePx } from '../Helpers';
import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
} from 'Consts';
export const SimpleProperties: React.FC<SimpleyComplexPropertiesPropsType> = ({
  setPropertyInput,
  propertyInput,
  isEdit,
}) => {
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPropertyInput((prev) => {
      if (e.target.type === 'color' || e.target.name === 'border-style') {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      } else {
        return {
          ...prev,
          [e.target.name]: e.target.value + 'px',
        };
      }
    });
  };
  return (
    <>
      <div>
        <p>background-color</p>
        <input
          onChange={handleInputChange}
<<<<<<< HEAD
          name='background-color'
          value={propertyInput[backgroundColor]}
          className='input_color'
          type='color'
=======
          name="background-color"
          value={propertyInput[backgroundColor]}
          className="input_color"
          type="color"
>>>>>>> d47a339 (save local code before deploying)
        />
      </div>
      <div>
        <p>color</p>
        <input
          onChange={handleInputChange}
<<<<<<< HEAD
          name='color'
          value={propertyInput.color}
          className='input_color'
          type='color'
=======
          name="color"
          value={propertyInput.color}
          className="input_color"
          type="color"
>>>>>>> d47a339 (save local code before deploying)
        />
      </div>
      <div>
        <p>width</p>
<<<<<<< HEAD
        <div className='flexbox_value'>
          <input
            onChange={handleInputChange}
            name='width'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputChange}
            name="width"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 150'
                : 'previous: ' + deletePx(propertyInput.width)
            }
          />
<<<<<<< HEAD
          <p className='px'>px</p>
=======
          <p className="px">px</p>
>>>>>>> d47a339 (save local code before deploying)
        </div>
      </div>
      <div>
        <p>height</p>
<<<<<<< HEAD
        <div className='flexbox_value'>
          <input
            onChange={handleInputChange}
            name='height'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputChange}
            name="height"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 30'
                : 'previous: ' + deletePx(propertyInput.height)
            }
          />
<<<<<<< HEAD
          <p className='px'>px</p>
=======
          <p className="px">px</p>
>>>>>>> d47a339 (save local code before deploying)
        </div>
      </div>
      <div>
        <p>border-radius</p>
<<<<<<< HEAD
        <div className='flexbox_value'>
          <input
            onChange={handleInputChange}
            name='border-radius'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputChange}
            name="border-radius"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 15'
                : 'previous: ' + deletePx(propertyInput[borderRadius])
            }
          />
<<<<<<< HEAD
          <p className='px'>px</p>
=======
          <p className="px">px</p>
>>>>>>> d47a339 (save local code before deploying)
        </div>
      </div>
      <div>
        <p>border</p>
<<<<<<< HEAD
        <div className='flexbox_value'>
          <input
            onChange={handleInputChange}
            name='border-width'
            className='input_border_width'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputChange}
            name="border-width"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 5'
                : 'previous: ' + deletePx(propertyInput[borderWidth])
            }
          />
<<<<<<< HEAD
          <p className='px'>px</p>
          <select
            onChange={handleInputChange}
            name='border-style'
=======
          <p className="px">px</p>
          <select
            onChange={handleInputChange}
            name="border-style"
>>>>>>> d47a339 (save local code before deploying)
            value={propertyInput[borderStyle]}
          >
            <option>none</option>
            <option>solid</option>
            <option>dashed</option>
            <option>double</option>
            <option>dotted</option>
            <option>inset</option>
            <option>outset</option>
            <option>hidden</option>
            <option>groove</option>
            <option>ridge</option>
          </select>
          <input
            onChange={handleInputChange}
<<<<<<< HEAD
            name='border-color'
            value={propertyInput[borderColor]}
            className='input_color'
            type='color'
=======
            name="border-color"
            value={propertyInput[borderColor]}
            className="input_color"
            type="color"
>>>>>>> d47a339 (save local code before deploying)
          />
        </div>
      </div>
    </>
  );
};
