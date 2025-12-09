import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useGameStore } from '../store/useGameStore';
import styles from './SettingsPage.module.css';
import buttonStyles from '../styles/Button.module.css';

const schema = yup.object().shape({
  difficulty: yup.string().oneOf(['easy', 'hard']).required(),
});

const SettingsPage = () => {
  const { difficulty, setDifficulty } = useGameStore(); 
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { difficulty },
  });

  const onSubmit = (data) => {
    setDifficulty(data.difficulty);
    navigate('/');
  };

  return (
    <div className={styles.settingsPage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Settings</h1>
        <p className={styles.subtitle}>Choose difficulty level</p>
      </header>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
         <div className={styles.formGroup}>
          <span className={styles.fieldLabel}>Difficulty</span>
          <div className={styles.radioGroup}>
            <label className={styles.radioOption}>
              <input type="radio" value="easy" {...register('difficulty')} />
              <span>Easy</span>
            </label>
            <label className={styles.radioOption}>
              <input type="radio" value="hard" {...register('difficulty')} />
              <span>Hard</span>
            </label>
          </div>
          {errors.difficulty && <p className={styles.errorText}>{errors.difficulty.message}</p>}
        </div>

        <div className={styles.buttonsRow}>
          <button type="submit" className={buttonStyles.primary}>Save</button>
          <button type="button" className={buttonStyles.secondary} onClick={() => navigate('/')}>Back</button>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;