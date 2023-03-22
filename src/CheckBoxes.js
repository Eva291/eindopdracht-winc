import React from "react";

const CheckBoxes = ({
  handleChangeCheckboxes,
  handleChangeFunCheckbox,
  difficultyChecked,
  funChecked,
}) => {
  return (
    <div className="checkBoxes">
      <div className="checkBoxDifficulty">
        <input
          onChange={handleChangeCheckboxes}
          type={"checkbox"}
          value={"difficulty"}
          checked={difficultyChecked}
          label={"difficulty"}
        />
        Difficulty
      </div>
      <div className="checkBoxFun">
        <input
          onChange={handleChangeFunCheckbox}
          type={"checkbox"}
          value={"fun"}
          checked={funChecked}
          label={"fun"}
        />
        Fun
      </div>
    </div>
  );
};

export default CheckBoxes;
