import { Button, Divider, TextField } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useState } from 'react';
import { addCategory, deleteCategory } from '../store/models/CategoriesSlice';

function CategoriesRedux() {
  const config = {
    navigation: true,
    footer: true,
  };

  const [value, setValue] = useState<string>('');
  const selectorCategories = useAppSelector(state => state.categories.data);

  const dispatch = useAppDispatch();

  function addCategoryRedux() {
    dispatch(addCategory(value));
  }
  function removeCategoryRedux() {
    dispatch(deleteCategory());
  }

  return (
    <DefaultLayout config={config}>
      <h1>Redux Teste</h1>
      <Divider sx={{ margin: '2em' }} />
      <TextField
        variant="outlined"
        type="text"
        value={value}
        onChange={ev => setValue(ev.target.value)}
        label={'Valor'}
      />
      <Button variant="outlined" onClick={addCategoryRedux}>
        Adicionar
      </Button>
      {selectorCategories.map(category => {
        return <p>{category}</p>;
      })}
      <Button variant="outlined" onClick={removeCategoryRedux}>
        Remover tudo
      </Button>
    </DefaultLayout>
  );
}

export default CategoriesRedux;
