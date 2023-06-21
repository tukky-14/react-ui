// https://mui.com/x/react-data-grid/
import {
    DataGrid,
    GridColDef,
    GridValueGetterParams,
    GridToolbar,
    jaJP,
    GridCellParams,
} from '@mui/x-data-grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GridCustomToolbar from '../components/GridCustomToolbar';
import { useState } from 'react';

const columns: GridColDef[] = [
    {
        field: 'icon',
        headerName: '',
        width: 60,
        align: 'center',
        renderCell: (params) => (
            <button
                className="text-blue-600 hover:cursor-pointer"
                onClick={() => handleClickIcon(params)}
            >
                <AccountCircleIcon />
            </button>
        ),
    },
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params: GridValueGetterParams) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'remarks',
        headerName: 'Remarks',
        flex: 1,
        editable: true,
    },
];

const columns2: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        lastName: 'Snow',
        firstName: 'Jon',
        age: 35,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        lastName: 'Lannister',
        firstName: 'Cersei',
        age: 42,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        lastName: 'Lannister',
        firstName: 'Jaime',
        age: 45,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 4,
        lastName: 'Stark',
        firstName: 'Arya',
        age: 16,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 5,
        lastName: 'Targaryen',
        firstName: 'Daenerys',
        age: null,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 6,
        lastName: 'Melisandre',
        firstName: null,
        age: 150,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 7,
        lastName: 'Clifford',
        firstName: 'Ferrara',
        age: 44,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 8,
        lastName: 'Frances',
        firstName: 'Rossini',
        age: 36,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 9,
        lastName: 'Roxie',
        firstName: 'Harvey',
        age: 65,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 10,
        lastName: 'Smith',
        firstName: 'John',
        age: 28,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 11,
        lastName: 'Johnson',
        firstName: 'Emily',
        age: 31,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 12,
        lastName: 'Anderson',
        firstName: 'Michael',
        age: 52,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 13,
        lastName: 'Davis',
        firstName: 'Emma',
        age: 19,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 14,
        lastName: 'Miller',
        firstName: 'Olivia',
        age: 23,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 15,
        lastName: 'Wilson',
        firstName: 'Daniel',
        age: 39,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 16,
        lastName: 'Taylor',
        firstName: 'Sophia',
        age: 27,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 17,
        lastName: 'Thomas',
        firstName: 'Liam',
        age: 47,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 18,
        lastName: 'Jackson',
        firstName: 'Mia',
        age: 34,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 19,
        lastName: 'White',
        firstName: 'Ava',
        age: 20,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
        id: 20,
        lastName: 'Harris',
        firstName: 'Noah',
        age: 32,
        remarks: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
];

const styles = {
    grid: {
        '.MuiDataGrid-toolbarContainer': {
            borderBottom: 'solid 1px rgba(224, 224, 224, 1)',
        },
        '.MuiDataGrid-row .MuiDataGrid-cell:not(:last-child)': {
            borderRight: 'solid 1px rgba(224, 224, 224, 1) !important',
        },
        '.MuiDataGrid-columnHeader': {
            borderRight: 'solid 1px rgba(224, 224, 224, 1)',
            backgroundColor: '#e0f2fe',
        },
    },
};

const handleClickIcon = (params: GridCellParams) => {
    const row = params.row;
    const values = Object.keys(row).map((key) => `${key}: ${row[key]}`);
    alert(values.join('\n'));
};

export default function DataGridCustom() {
    const [isColums2, setIsColums2] = useState<boolean>(false);
    const [selectColumns, setSelectColumns] = useState<GridColDef[]>(columns);

    const handleTableChangeClick = () => {
        if (!isColums2) {
            setSelectColumns(columns2);
        } else {
            setSelectColumns(columns);
        }
        setIsColums2(!isColums2);
    };

    return (
        <div className="max-w-screen-xl mx-auto p-4 overflow-scroll">
            <DataGrid
                sx={styles.grid}
                rows={rows}
                columns={selectColumns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10, 20, 50]}
                checkboxSelection
                disableRowSelectionOnClick
                components={{
                    Toolbar: () => (
                        <GridCustomToolbar handleTableChangeClick={handleTableChangeClick} />
                    ),
                }}
                localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
            />
        </div>
    );
}
