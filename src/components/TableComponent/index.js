import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';

function TableComponent({rows, columns}) {
  return(
    <DataGrid
        components={{
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                Info not founded
              </Stack>
            )
          }}
          getRowId={(row) => row.amount}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          style={{backgroundColor: '#f0f0ee', borderColor: '#e7a61a', margin: '10px', borderWidth: '3px'}}
        />
  );
}

export default TableComponent;