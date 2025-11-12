import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSettings } from '../context/SettingsContext'; 

const schema = yup.object().shape({
  difficulty: yup.string().oneOf(['easy', 'hard']).required(),
});

const SettingsPage = ({ onBack }) => {
  const { difficulty, setDifficulty } = useSettings(); 

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { difficulty: difficulty } 
  });

  const onSubmit = (data) => {
    setDifficulty(data.difficulty);
    onBack(); 
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div style={{ margin: '1rem 0', fontSize: '1.2rem' }}>
          <label>Difficulty</label>
          
          <div style={{ margin: '0.5rem 0' }}>
            <label style={{ marginRight: '1rem' }}>
              <input 
                type="radio" 
                value="easy" 
                {...register('difficulty')} 
              /> Easy
            </label>
            
            <label>
              <input 
                type="radio" 
                value="hard" 
                {...register('difficulty')} 
              /> Hard
            </label>
          </div>
          
          {errors.difficulty && <p style={{color: 'red'}}>{errors.difficulty.message}</p>}
        </div>

        <button type="submit">Save</button>
        <button type="button" onClick={onBack}>Back to Menu</button>
      </form>
    </div>
  );
};

export default SettingsPage;