import { useFormik } from 'formik';
import React, { ChangeEvent, useEffect, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi'
import { IPassword } from '../../../../interfaces';
import { ChangePassword } from '../../../../schemas';
import { useStore } from 'zustand';
import { userStore } from '../../../../store/userStore';
import { toastError, toastSuccess } from '../../../../helpers';

interface ShowPasswordState {
  [key: string]: boolean;
}

export const PasswordPartner = () => {

  const [showPassword, setShowPassword] = useState<ShowPasswordState>({
    password: false,
    newPassword: false,
    confirmPassword: false,
  });

  const { updatePassword, updatePasswordResponse, reset } = useStore(userStore)

  const formik = useFormik<IPassword>({
    initialValues: {
      password: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: ChangePassword,
    onSubmit: (data, {resetForm}) => {
      const { confirmPassword, ...data2 } = data;
      updatePassword(data2);
      resetForm()
    },
  });
  const { password, newPassword, confirmPassword } = formik.values;


  useEffect(() => {
    if (updatePasswordResponse) {
      if (updatePasswordResponse.message === 'success') {
        toastSuccess('Password updated successfully.');
        reset();
      } else {
        toastError('The old password is incorrect.');
      }
    }
  }, [updatePasswordResponse])


  const handleTogglePassword = (inputName: string) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [inputName]: !prevState[inputName],
    }));
  };

  return (
    <div className='agentForm'>
      <form className='form' onSubmit={formik.handleSubmit}>
        <div className="form__row">
          <div className="form__col">
            <div className="form__group" style={{ position: 'relative' }}>
              <BiLockAlt className="form__icons--blue" size={30} style={{ marginRight: '1rem' }} />
              <input
                type={showPassword.password ? 'text' : 'password'}
                placeholder="Password"
                id="password"
                value={password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {showPassword.password ?
                <AiOutlineEyeInvisible className='iconPassword' size={20} onClick={() => handleTogglePassword('password')} />
                :
                <AiOutlineEye className='iconPassword' size={20} onClick={() => handleTogglePassword('password')} />
              }
            </div>
            {formik.touched.password && formik.errors.password && (
              <small className="form__error">{formik.errors.password}</small>
            )}
          </div>
        </div>
        <div className="form__row">
          <div className="form__col">
            <div className="form__group" style={{ position: 'relative' }}>
              <input style={{ marginLeft: '3.5rem' }}
                type={showPassword.newPassword ? 'text' : 'password'}
                placeholder="New Password"
                id='newPassword'
                value={newPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {showPassword.password ?
                <AiOutlineEyeInvisible className='iconPassword iconPassword' size={20} onClick={() => handleTogglePassword('newPassword')} />
                :
                <AiOutlineEye className='iconPassword iconPassword' size={20} onClick={() => handleTogglePassword('newPassword')} />
              }
            </div>
            {formik.touched.newPassword && formik.errors.newPassword && (
              <small className="form__error">{formik.errors.newPassword}</small>
            )}
          </div>
          <div className="form__col">
            <div className="form__group" style={{ position: 'relative' }}>
              <input style={{ marginLeft: '3.5rem' }}
                type={showPassword.confirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {showPassword.password ?
                <AiOutlineEyeInvisible className='iconPassword' size={20} onClick={() => handleTogglePassword('confirmPassword')} />
                :
                <AiOutlineEye className='iconPassword' size={20} onClick={() => handleTogglePassword('confirmPassword')} />
              }
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
              <small className="form__error">{formik.errors.confirmPassword}</small>
            )}
          </div>
        </div>
        <div className='agentForm__btn'>
          <button className="btn btn--blue" type='submit'>Change password</button>
        </div>
      </form>
    </div>
  )
}
