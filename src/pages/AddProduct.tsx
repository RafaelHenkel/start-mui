import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Grid2 as Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addProduct } from '../store/models/ProductsSlice';

function AddProduct() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [active, setActive] = useState<boolean>(true);

  const dispatch = useAppDispatch();

  function handleSubmit() {
    setName('');
    setPrice('');
    setDescription('');
    setActive(true);
    dispatch(addProduct({ name, price, description, active }));
  }

  return (
    <>
      <DefaultLayout>
        <Paper sx={{ padding: '20px', marginY: '20px' }}>
          <Grid container spacing={4} justifyContent={'center'}>
            <Grid size={12}>
              <Typography variant="h5">Adicionar Produto</Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                type="text"
                label="Nome"
                value={name}
                required
                onChange={e => setName(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                type="text"
                label="Preço"
                value={price}
                required
                onChange={e => setPrice(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <TextField
                type="text"
                label="Descrição"
                value={description}
                onChange={e => setDescription(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  checked={active}
                  onChange={e => setActive((e.target as HTMLInputElement).checked)}
                  label="Ativo"
                />
              </FormGroup>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Box display={'flex'} justifyContent={'flex-end'}>
                <Button variant="contained" onClick={handleSubmit} type="button">
                  Cadastrar
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </DefaultLayout>
    </>
  );
}

export default AddProduct;
