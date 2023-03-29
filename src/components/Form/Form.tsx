import React from "react";
import { UserType } from "../../types/UserType";
import styles from "./Form.module.scss";

interface FormProps {
  setUsers: (data: UserType) => void;
}

export default class Form extends React.Component<FormProps> {
  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  switcherRef = React.createRef<HTMLInputElement>();
  agreeRef = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();
  form = React.createRef<HTMLFormElement>();
  constructor(props: FormProps) {
    super(props);
    this.onSaveUserData = this.onSaveUserData.bind(this);
  }
  state = {
    errors: {
      inputName: "",
      inputDate: "",
      selectRef: "",
    },
    isValid: false,
    downloadImg: false,
    avatar: "",
  };
  onSaveUserData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.validateInput(this.inputName.current);
    this.validateInput(this.inputFile.current);
    this.validateInput(this.inputDate.current);
    this.validateInput(this.selectRef.current);

    const user: UserType = {
      name: this.inputName.current?.value || "",
      date: this.inputDate.current?.value || "",
      nationality: this.selectRef.current?.value || "",
      sex: this.switcherRef.current?.checked ? "male" : "female",
      agree: this.agreeRef.current?.checked || false,
      img: this.state.avatar || "",
    };
    this.props.setUsers(user);
  };
  validateInput(input: HTMLInputElement | HTMLSelectElement | null) {
    if (!input) return;

    if (input.value && input.value.length < 1) {
      input.setCustomValidity("Value should contain min 1 symbols");
    } else if (!input.value)
      input.setCustomValidity("Value should not be empty");
    else input.setCustomValidity("");
  }

  isFormInvalid = () => {
    return (
      !!this.inputName.current?.validationMessage ||
      !!this.inputFile.current?.validationMessage ||
      !!this.inputDate.current?.validationMessage ||
      !!this.selectRef.current?.validationMessage
    );
  };
  render() {
    const loadImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        const reader = new FileReader();
        reader.onload = () => {
          if (this.inputFile.current !== null) {
            const imageFile =
              this.inputFile.current.files && this.inputFile.current.files[0];
            if (imageFile !== null) {
              this.setState({
                avatar: URL.createObjectURL(imageFile),
              });
            }
          }
        };
        reader.readAsDataURL(event.target.files[0]);
      }
    };
    return (
      <form
        className={styles.form}
        ref={this.form}
        onSubmit={(e) => {
          e.preventDefault();
          if (this.isFormInvalid()) {
            this.forceUpdate();
          } else {
            this.onSaveUserData(e);
            this.setState({ downloadImg: false });
          }
        }}
        data-testid="react-form"
      >
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            ref={this.inputName}
            className={""}
            data-testid="name"
          />
          <p style={{ color: "red" }}>
            {this.inputName.current?.validationMessage}
          </p>
        </div>
        <div className={styles.inputBlock}>
          <label htmlFor="" className={styles.label}>
            Birthday
          </label>
          <input
            type="date"
            ref={this.inputDate}
            className={""}
            data-testid="date"
          />
          <p style={{ color: "red" }}>
            {this.inputDate.current?.validationMessage}
          </p>
        </div>
        <div className={styles.selectBlock}>
          <label htmlFor="" className={styles.label}>
            Nationality
          </label>
          <select ref={this.selectRef} className={""} defaultValue="">
            <option value="" disabled>
              Choose country...
            </option>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
          <p style={{ color: "red" }}>
            {this.selectRef.current?.validationMessage}
          </p>
        </div>
        <div className={styles.switcherBlock}>
          <span>Female</span>
          <label htmlFor="switcher" className={styles.switcher}>
            <input type="checkbox" id="switcher" ref={this.switcherRef} />
            <span className={styles.slider}></span>
          </label>
          <span>Male</span>
        </div>
        <div className={styles.inputFileBlock}>
          <input
            type="file"
            className={styles.inputFile}
            accept="image/*"
            ref={this.inputFile}
            onChange={(e) => {
              this.setState({ downloadImg: true });
              loadImageFile(e);
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
            <span className={styles.inputFileButtonText}>Choose file...</span>
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
            ref={this.agreeRef}
          />
          <label htmlFor="accept" className={styles.agree}>
            I agree to the processing of personal data
          </label>
        </div>

        <button className={styles.submitButton} type="submit">
          Save
        </button>
      </form>
    );
  }
}
