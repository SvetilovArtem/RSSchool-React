import React, { useRef, useState } from "react";
import { UserType } from "../../types/UserType";

import styles from "./Form.module.scss";

interface FormProps {
  setUsers: (e: any) => void;
  users: UserType[];
  setAvatar: any;
  avatar: string;
}

const Form = ({ setUsers, users, setAvatar, avatar }: FormProps) => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputDate = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);
  const switcherRef = useRef<HTMLInputElement>(null);
  const agreeRef = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const [nameError, setNameError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [agreeError, setAgreeError] = useState(false);

  const onSaveUserData = (e: any) => {
    const re = /^([a-zа-яё]+|\d+)$/i;
    e.preventDefault();
    if (!inputName.current?.value) return null;

    if (
      !re.test(inputName.current?.value) ||
      inputName.current?.value.length <= 2
    ) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!selectRef.current?.value) {
      setSelectError(true);
    } else {
      setSelectError(false);
    }

    if(!agreeRef.current?.checked) {
      setAgreeError(true)
    } else {
      setAgreeError(false)
    }
    
    if (nameError || dateError || selectError || agreeError) {
      console.log(nameError, dateError, selectError)
    } else {
      setUsers([
        ...users,
        {
          name: inputName.current?.value,
          date: inputDate.current?.value,
          nationality: selectRef.current?.value,
          sex: switcherRef.current?.checked ? "мужской" : "женский",
          agree: agreeRef.current?.checked,
          img: avatar,
        },
      ]);
      console.log("Сохранено");
    }
  };
  function loadImageFile() {
    const FReader = new FileReader();
    if (!inputFile.current?.files) return null;
    var file = inputFile.current?.files[0];
    FReader.readAsDataURL(file);
    FReader.onload = function (e) {
      setAvatar(e.target?.result);
    };
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputBlock}>
        <label htmlFor="" className={styles.label}>
          Имя
        </label>
        <input
          type="text"
          ref={inputName}
          className={nameError ? styles.error : ""}
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="" className={styles.label}>
          Дата рождения
        </label>
        <input
          type="date"
          ref={inputDate}
          className={dateError ? styles.error : ""}
        />
      </div>
      <div className={styles.selectBlock}>
        <label htmlFor="" className={styles.label}>
          Национальность
        </label>
        <select ref={selectRef} className={selectError ? styles.error : ""}>
          <option value="" disabled selected>
            Выбрать страну...
          </option>
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
      </div>
      <div className={styles.switcherBlock}>
        <span>Женский</span>
        <label htmlFor="switcher" className={styles.switcher}>
          <input
            type="checkbox"
            id="switcher"
            ref={switcherRef}
            onChange={() => console.log(switcherRef.current?.checked)}
          />
          <span className={styles.slider}></span>
        </label>
        <span>Мужской</span>
      </div>
      <div className={styles.inputFileBlock}>
        <input
          name="file"
          type="file"
          id="input__file"
          className={styles.inputFile}
          accept="image/*"
          ref={inputFile}
          onChange={loadImageFile}
        />
        <label htmlFor="input__file" className={styles.inputFileButton}>
          <span className={styles.inputFileIconWrapper}>
            <img
              className={styles.inputFileIcon}
              src="./img/icon-download.png"
              alt="Выбрать файл"
              width="25"
            />
          </span>
          <span className={styles.inputFileButtonText}>Выберите файл</span>
        </label>
        {inputFile.current?.value && (
          <span className={styles.okIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <path
                fill="#43A047"
                d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
              />
            </svg>
          </span>
        )}
      </div>
      <div className={styles.agreeBlock}>
        <input
          id="accept"
          type="checkbox"
          className={styles.checkbox}
          ref={agreeRef}
        />
        <label htmlFor="accept" className={styles.agree} style={agreeError ? {color: 'red'} : {color: '#fff'}}>
          Даю согласие на обработку персональных данных
        </label>
      </div>

      <button
        className={styles.submitButton}
        onClick={(e) => onSaveUserData(e)}
      >
        Сохранить
      </button>
    </form>
  );
};

export default Form;
