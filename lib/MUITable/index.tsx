import { MUIThemeContextProvider } from "@abhishekzambare/mui";
import MUITable2 from "./Grid";

type PaginationProps =
    | {
          pagination: true;
          pageNumber: number;
          pageSize: number;
          pageTotalCount: number;
          setPageNumber: React.Dispatch<React.SetStateAction<number>>;
          setPageSize: React.Dispatch<React.SetStateAction<number>>;
      }
    | {
          pagination: false;
          pageNumber?: never;
          pageSize?: never;
          pageTotalCount?: never;
          setPageNumber?: never;
          setPageSize?: never;
      };

type MUITableProps = PaginationProps & {
    tableHeight?: string;
    pagination: boolean;
    columns: {
        width: string;
        name: string;
        value: string;
        render?: (row: any) => React.ReactNode;
        onSortClick?: () => void;
        isSorted?: boolean;
        onRowClick?: () => void;
    }[];
    // data: {
    //   color: "primary" | "secondary" | "error" | "info" | "success" | "warning"
    // }[];
    data: ({
        color?:
            | "primary"
            | "secondary"
            | "error"
            | "info"
            | "success"
            | "warning";
    } & Record<string, any>)[];
};

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
                />
            ) : (
                <MUITable2
                    tableHeight={tableHeight}
                    pagination={pagination}
                    columns={columns}
                    data={data}
                />
            )}
        </MUIThemeContextProvider>
    );
};

export default MUITable;
