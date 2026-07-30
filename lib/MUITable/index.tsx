import { MUIThemeContextProvider } from "@abhishekzambare/mui";
import MUITable2, { type MUITableProps } from "./Grid";

const MUITable = ({
    tableHeight = "100%",
    pageNumber = 0,
    pageSize = 0,
    pageTotalCount = 0,
    setPageNumber = () => {},
    setPageSize = () => {},
    pagination = false,
    columns,
    data,
    onRowClick = () => {},
}: MUITableProps) => {
    return (
        <MUIThemeContextProvider>
            {pagination ? (
                <MUITable2
                    tableHeight={tableHeight}
                    pageNumber={pageNumber}
                    pageSize={pageSize}
                    pageTotalCount={pageTotalCount}
                    setPageNumber={setPageNumber}
                    setPageSize={setPageSize}
                    pagination={pagination}
                    columns={columns}
                    data={data}
                    onRowClick={onRowClick}
                />
            ) : (
                <MUITable2
                    tableHeight={tableHeight}
                    pagination={pagination}
                    columns={columns}
                    data={data}
                    onRowClick={onRowClick}
                />
            )}
        </MUIThemeContextProvider>
    );
};

export default MUITable;
