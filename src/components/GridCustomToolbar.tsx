import {
    GridToolbarColumnsButton,
    GridToolbarContainer,
    GridToolbarDensitySelector,
    GridToolbarExport,
    GridToolbarFilterButton,
} from '@mui/x-data-grid';
import TableViewIcon from '@mui/icons-material/TableView';

const GridCustomToolbar = () => {
    return (
        <GridToolbarContainer>
            <div className="w-full flex items-center justify-between">
                <div>
                    <GridToolbarColumnsButton />
                    <GridToolbarFilterButton />
                    <GridToolbarDensitySelector />
                    <GridToolbarExport />
                </div>
                <div className="p-1 mr-2 text-blue-600 rounded cursor-pointer hover:bg-blue-50 duration-300">
                    <TableViewIcon />
                </div>
            </div>
        </GridToolbarContainer>
    );
};

export default GridCustomToolbar;
