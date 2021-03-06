import React from "react";
import { EquationInputWithSelectProps } from "../interface";
import Select from "../../Select";

const EquationInputWithSelect: React.FunctionComponent<EquationInputWithSelectProps> = ({
  field,
  selectCategory,
  inputValue,
  selectValues,
  index,
  selectIndexes,
  handleInputChange,
  handleSelectChange
}: EquationInputWithSelectProps) => {
  const { desc } = field;
  const { selectIndex } = selectIndexes.find(
    (v: { inputIndex: number }) => v.inputIndex === index
  );

  return (
    <div key={desc} className="mb-3">
      <label className="mb-0" htmlFor={desc}>
        {desc}
      </label>
      <div className="d-flex">
        <input
          id={desc}
          type="number"
          className="px-1 mr-1"
          placeholder="0"
          value={inputValue}
          onChange={(e): void => handleInputChange(index, e.target.value)}
        />
        <Select
          category={selectCategory}
          selectedValue={selectValues[selectIndex]}
          onChange={(e: { target: { value: string | number } }): void =>
            handleSelectChange(selectIndex, +e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default EquationInputWithSelect;
