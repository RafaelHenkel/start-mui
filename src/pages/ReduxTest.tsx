import { Button, Divider, TextField } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment, decrement, incrementByAmount } from '../store/models/CounterSlice';
import { useState } from 'react';
import { addCategory, deleteCategory } from '../store/models/CategoriesSlice';

function ReduxTest() {
  const config = {
    navigation: true,
    footer: true,
  };

  const [number, setNumber] = useState<number>(0);
  const [value, setValue] = useState<string>('');
  const selectorCategories = useAppSelector(state => state.categories.data);

  const dispatch = useAppDispatch();

  function incrementRedux() {
    console.log('IN');
    dispatch(increment());
  }

  function decrementRedux() {
    console.log('DEC');
    dispatch(decrement());
  }

  function handleClickIn() {
    dispatch(incrementByAmount(Number(number)));
  }

  function addCategoryRedux() {
    dispatch(addCategory(value));
  }
  function removeCategoryRedux() {
    dispatch(deleteCategory());
  }

  return (
    <DefaultLayout config={config}>
      <h1>Redux Teste</h1>
      <Button variant="outlined" onClick={incrementRedux}>
        +
      </Button>
      <Button variant="outlined" onClick={decrementRedux}>
        -
      </Button>
      <Divider sx={{ margin: '2em' }} />
      <TextField
        variant="outlined"
        type="number"
        value={number}
        onChange={ev => setNumber(parseInt(ev.target.value))}
        label={'Valor'}
      />
      <Button variant="outlined" onClick={handleClickIn}>
        Adicionar
      </Button>

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

export default ReduxTest;
