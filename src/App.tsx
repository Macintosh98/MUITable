import MUITable from "../lib/MUITable";
import { Tooltip, Typography } from "@mui/material";

function App() {
    const data:any=10;
    return (
        <MUITable
            pagination={true}
            pageNumber={1}
            pageSize={10}
            pageTotalCount={100}
            setPageNumber={() => {}}
            setPageSize={() => {}}
            columns={[
                {
                    width: "200px",
                    name: "Email",
                    value: "email",
                    render: (row: any) => (
                        <>
                            <Tooltip title={row.emailAddress}>
                                <Typography
                                    variant="subtitle2"
                                    noWrap
                                    sx={{
                                        textOverflow: "ellipsis",
                                    }}
                                >
                                    {row.email}
                                </Typography>
                            </Tooltip>
                        </>
                    ),
                },
                {
                    width: "200px",
                    name: "Age",
                    value: "age",
                },
                {
                    width: "200px",
                    name: "Name",
                    value: "name",
                },
            ]}
            data={data.dasd.length}
        />
    );
}

export default App;
