import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IShippingFields } from "types/form.interface";
import { UserType } from "../../types/UserType";
import styles from "./Form.module.scss";

interface FormProps {
  setUsers: (data: UserType) => void;
  img: string;
}

const Form = ({ setUsers, img }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<IShippingFields>({
    mode: "onChange",
  });

  const [avatar, setAvatar] = useState<string>(img);
  const data = {
    name: getValues("name"),
    date: getValues("date"),
    nationality: getValues("nationality"),
    sex: getValues("sex") ? "male" : "female",
    agree: getValues("agree"),
    img: avatar,
  };

  const onSaveUserData = () => {
    setUsers(data);
  };
  const inputFile = useRef<HTMLInputElement>(null);

  function readFile() {
    const FReader = new FileReader();
    if (!inputFile.current?.files) return null;
    const file = inputFile.current?.files[0];
    FReader.onload = function (e) {
      if (!e.target) return null;
      if (typeof e.target.result === "string") {
        setAvatar(e.target.result);
      }
    };
    FReader.readAsDataURL(file);
  }
  return (
    <form
      className={styles.form}
      data-testid="react-form"
      onSubmit={handleSubmit(onSaveUserData)}
    >
      <div className={styles.inputBlock}>
        <label htmlFor="" className={styles.label}>
          Name
        </label>
        <input
          type="text"
          className={""}
          data-testid="name"
          {...register("name", {
            required: {
              value: true,
              message: "Field is required",
            },
            pattern: {
              value: /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i,
              message:
                "Field should be contains from 1 to 23 letters. No numbers.",
            },
          })}
        />
        <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="" className={styles.label}>
          Birthday
        </label>
        <input
          type="date"
          {...register("date", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
          className={""}
          data-testid="date"
        />
        <p style={{ color: "red" }}>{errors.date?.message}</p>
      </div>
      <div className={styles.selectBlock}>
        <label htmlFor="" className={styles.label}>
          Nationality
        </label>
        <select
          {...register("nationality", {
            required: {
              value: true,
              message: "Choose your nationality",
            },
          })}
          className={""}
        >
          <option value="" disabled>
            Choose country...
          </option>
          <option value="Russia">Russia</option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
        <p style={{ color: "red" }}>{errors.nationality?.message}</p>
      </div>
      <div className={styles.switcherBlock}>
        <span>Female</span>
        <label htmlFor="switcher" className={styles.switcher}>
          <input type="checkbox" id="switcher" {...register("sex")} />
          <span className={styles.slider}></span>
        </label>
        <span>Male</span>
      </div>
      <div className={styles.inputFileBlock}>
        <input
          type="file"
          id="input__file"
          className={styles.inputFile}
          accept="image/*"
          {...register("img")}
          onInput={readFile}
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
        {avatar && (
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
          {...register("agree", {
            required: {
              value: true,
              message: "Field is required",
            },
          })}
        />
        <label htmlFor="accept" className={styles.agree}>
          I agree to the processing of personal data
        </label>
        <p style={{ color: "red" }}>{errors.agree?.message}</p>
      </div>

      <button
        className={isValid ? styles.submitButton : styles.disabledButton}
        type="submit"
        disabled={!isValid}
      >
        Save
      </button>
    </form>
  );
};

export default Form;
