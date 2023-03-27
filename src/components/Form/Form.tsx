import React, { Component, RefAttributes } from "react";
import { UserType } from "../../types/UserType";

import styles from "./Form.module.scss";

interface FormProps extends RefAttributes<HTMLFormElement> {
  setUsers: (data: UserType) => void;
  setAvatar: (e: string) => void;
  avatar: string;
}

export default class Form extends Component<FormProps> {
  state = {
    errors: {
      inputName: "",
      inputDate: "",
      selectRef: "",
    },
    isValid: false,
    downloadImg: false,
  };
  render() {
    const inputName = React.createRef<HTMLInputElement>();
    const inputDate = React.createRef<HTMLInputElement>();
    const selectRef = React.createRef<HTMLSelectElement>();
    const switcherRef = React.createRef<HTMLInputElement>();
    const agreeRef = React.createRef<HTMLInputElement>();
    const inputFile = React.createRef<HTMLInputElement>();

    const props = this.props;
    const setAvatar = props.setAvatar;
    const setUsers = props.setUsers;

    const validate = () => {
      const errors = this.state.errors;
      if (!inputName.current?.value) {
        errors.inputName = "Please enter your name";
        this.setState({ isValid: false });
      } else {
        errors.inputName = "";
        this.setState({ isValid: true });
      }
      if (inputName.current?.value && inputName.current?.value.length < 1) {
        errors.inputName = "Please enter name more than 2 symbols";
        this.setState({ isValid: false });
      } else {
        errors.inputName = "";
        this.setState({ isValid: true });
      }
      if (!inputDate.current?.value) {
        errors.inputDate = "Please enter your birthday";
        this.setState({ isValid: false });
      } else {
        errors.inputDate = "";
        this.setState({ isValid: true });
      }
      if (!selectRef.current?.value) {
        errors.selectRef = "Please check your country";
        this.setState({ isValid: false });
      } else {
        errors.selectRef = "";
        this.setState({ isValid: true });
      }
      return this.state.isValid;
    };

    const onSaveUserData = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const user: UserType = {
        name: inputName.current?.value || "",
        date: inputDate.current?.value || "",
        nationality: selectRef.current?.value || "",
        sex: switcherRef.current?.checked ? "мужской" : "женский",
        agree: agreeRef.current?.checked || false,
        img: props.avatar || "",
      };
      if (setUsers) setUsers(user);
      console.log("Сохранено");
    };

    function loadImageFile() {
      const FReader = new FileReader();
      if (!inputFile.current?.files) return null;
      const file = inputFile.current?.files[0];
      FReader.readAsDataURL(file);
      FReader.onload = function (e) {
        if (setAvatar)
          setAvatar(
            typeof e.target?.result === "string" ? e.target?.result : ""
          );
      };
    }
    return (
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.errors);
          if (validate()) {
            onSaveUserData(e);
            this.setState({ downloadImg: false });
          }
        }}
        data-testid="react-form"
      >
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.label}>
            Имя
          </label>
          <input
            type="text"
            ref={inputName}
            className={""}
            data-testid="name"
          />
          <p style={{ color: "red" }}>{this.state.errors.inputName}</p>
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.label}>
            Дата рождения
          </label>
          <input
            type="date"
            ref={inputDate}
            className={""}
            data-testid="date"
          />
          <p style={{ color: "red" }}>{this.state.errors.inputDate}</p>
        </div>
        <div className={styles.selectBlock}>
          <label htmlFor="" className={styles.label}>
            Национальность
          </label>
          <select ref={selectRef} className={""}>
            <option value="" disabled selected>
              Выбрать страну...
            </option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          <p style={{ color: "red" }}>{this.state.errors.selectRef}</p>
        </div>
        <div className={styles.switcherBlock}>
          <span>Женский</span>
          <label htmlFor="switcher" className={styles.switcher}>
            <input type="checkbox" id="switcher" ref={switcherRef} />
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
            onChange={() => {
              this.setState({ downloadImg: true });
              loadImageFile();
            }}
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
          {this.state.downloadImg && (
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
          <label htmlFor="accept" className={styles.agree}>
            Даю согласие на обработку персональных данных
          </label>
        </div>

        <button className={styles.submitButton} type="submit">
          Сохранить
        </button>
      </form>
    );
  }
}
