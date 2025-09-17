import { useState } from 'react';
import { addPx, deletePxShadow, getColorShadow } from '../Helpers';
import { boxShadow } from 'Consts';
import { SimpleyComplexPropertiesPropsType } from 'Types';

export const CopmlexProperties: React.FC<SimpleyComplexPropertiesPropsType> = ({
  propertyInput,
  isEdit,
  setPropertyInput,
}) => {
  const [shadowPropertyInput, setShadowPropertyInput] = useState({
    boxValueShadowInput: deletePxShadow(propertyInput[boxShadow]),
    colorShadowInput: getColorShadow(propertyInput[boxShadow]),
  });
  const { boxValueShadowInput, colorShadowInput } = shadowPropertyInput;

  const [ownPropertyInput, setOwnPropertyInput] = useState({
    ownProperty: '',
    ownValueOfProperty: '',
  });
  const { ownProperty, ownValueOfProperty } = ownPropertyInput;

  const handleShadowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShadowPropertyInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddShadowPropertyClick = () => {
    const boxShadow = 'box-shadow';
    setPropertyInput((prev) => ({
      ...prev,
      [boxShadow]: addPx(boxValueShadowInput) + ' ' + colorShadowInput,
    }));
  };
  const handleOwnPropertyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwnPropertyInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddOwnPropertyClick = () => {
    setPropertyInput((prev) => ({
      ...prev,
      [ownProperty]: ownValueOfProperty,
    }));
  };
  return (
    <>
      <div>
        <p>shadow</p>
<<<<<<< HEAD
        <div className='flexbox_value'>
          <input
            name='boxValueShadowInput'
            className='input_shadow'
            type='text'
=======
        <div className="flexbox_value">
          <input
            name="boxValueShadowInput"
            className="input_shadow"
            type="text"
>>>>>>> d47a339 (save local code before deploying)
            placeholder={
              !isEdit ? 'example: 1 1 1 1' : 'previous: ' + boxValueShadowInput
            }
            onChange={handleShadowChange}
          />
<<<<<<< HEAD
          <p className='px'>px</p>
          <input
            name='colorShadowInput'
            value={colorShadowInput}
            className='input_color'
            type='color'
=======
          <p className="px">px</p>
          <input
            name="colorShadowInput"
            value={colorShadowInput}
            className="input_color"
            type="color"
>>>>>>> d47a339 (save local code before deploying)
            onChange={handleShadowChange}
          />
          <button onClick={handleAddShadowPropertyClick}>ok</button>
        </div>
      </div>
      <p>other property</p>
<<<<<<< HEAD
      <div className='flexbox_value_other_property'>
        <input
          onChange={handleOwnPropertyChange}
          type='text'
          placeholder='display'
          name='ownProperty'
        />
        <input
          onChange={handleOwnPropertyChange}
          type='text'
          placeholder='inline-block'
          name='ownValueOfProperty'
=======
      <div className="flexbox_value_other_property">
        <input
          onChange={handleOwnPropertyChange}
          type="text"
          placeholder="display"
          name="ownProperty"
        />
        <input
          onChange={handleOwnPropertyChange}
          type="text"
          placeholder="inline-block"
          name="ownValueOfProperty"
>>>>>>> d47a339 (save local code before deploying)
        />
        <button onClick={handleAddOwnPropertyClick}>ok</button>
      </div>
    </>
  );
};
