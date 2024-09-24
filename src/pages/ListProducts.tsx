import { Paper } from '@mui/material';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useAppSelector } from '../store/hooks';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function ListProducts() {
  const columns: GridColDef<(typeof selector)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Nome',
      width: 300,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Preço',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Descrição',
      width: 400,
      editable: true,
    },
    {
      field: 'active',
      headerName: 'Ativo',
      width: 100,
      editable: true,
    },
  ];

  const selector = useAppSelector(state => state.products);
  return (
    <>
      <DefaultLayout>
        <Paper>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={selector}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 10,
                  },
                },
              }}
              pageSizeOptions={[10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Paper>
      </DefaultLayout>
    </>
  );
}

export default ListProducts;
