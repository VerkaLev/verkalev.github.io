import { deletePx } from 'Components/MenuCreateElement/Helpers';
import {
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  hover,
} from 'Consts';
import { SimpleyComplexHoverPropertiesPropsType } from 'Types';

export const SimpleHoverProperties: React.FC<
  SimpleyComplexHoverPropertiesPropsType
> = ({ setPropertyInput, propertyInput, isEdit }) => {
  const handleInputHoverChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setPropertyInput((prev) => {
      if (e.target.type === 'color' || e.target.name === 'border-style') {
        return {
          ...prev,
          [hover]: {
            ...prev[hover],
            [e.target.name]: e.target.value,
          },
        };
      } else {
        return {
          ...prev,
          [hover]: {
            ...prev[hover],
            [e.target.name]: e.target.value + 'px',
          },
        };
      }
    });
  };
  return (
    <>
      <div>
        <p>background-color</p>
        <input
          onChange={handleInputHoverChange}
<<<<<<< HEAD
          name='background-color'
          value={propertyInput[hover][backgroundColor]}
          className='input_color'
          type='color'
=======
          name="background-color"
          value={propertyInput[hover][backgroundColor]}
          className="input_color"
          type="color"
>>>>>>> d47a339 (save local code before deploying)
        />
      </div>

      <div>
        <p>color</p>
        <input
          onChange={handleInputHoverChange}
<<<<<<< HEAD
          name='color'
          value={propertyInput[hover].color}
          className='input_color'
          type='color'
=======
          name="color"
          value={propertyInput[hover].color}
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
            onChange={handleInputHoverChange}
            name='width'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="width"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 150'
                : 'previous: ' + deletePx(propertyInput[hover].width)
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
            onChange={handleInputHoverChange}
            name='height'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="height"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 30'
                : 'previous: ' + deletePx(propertyInput[hover].height)
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
            onChange={handleInputHoverChange}
            name='border-radius'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="border-radius"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 15'
                : 'previous: ' + deletePx(propertyInput[hover][borderRadius])
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
            onChange={handleInputHoverChange}
            name='border-width'
            className='input_border_width'
            type='text'
=======
        <div className="flexbox_value">
          <input
            onChange={handleInputHoverChange}
            name="border-width"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit
                ? 'example: 5'
                : 'previous: ' + deletePx(propertyInput[hover][borderWidth])
            }
          />
<<<<<<< HEAD
          <p className='px'>px</p>
          <select
            onChange={handleInputHoverChange}
            name='border-style'
=======
          <p className="px">px</p>
          <select
            onChange={handleInputHoverChange}
            name="border-style"
>>>>>>> d47a339 (save local code before deploying)
            value={propertyInput[hover][borderStyle]}
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
            onChange={handleInputHoverChange}
<<<<<<< HEAD
            name='border-color'
            value={propertyInput[hover][borderColor]}
            className='input_color'
            type='color'
=======
            name="border-color"
            value={propertyInput[hover][borderColor]}
            className="input_color"
            type="color"
>>>>>>> d47a339 (save local code before deploying)
          />
        </div>
      </div>
    </>
  );
};
