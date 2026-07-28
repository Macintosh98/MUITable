
import MUITable from "../lib/MUITable";
import { Tooltip, Typography } from "@mui/material";

function App() {

  return (<MUITable
    pagination={false}
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
                  textOverflow:
                    "ellipsis",
                }}
              >
                ${row.emailAddress}$
              </Typography>
            </Tooltip>
          </>
        ),
      },
      {
        width: "200px",
        name: "Name",
        value: "name",
      },
    ]}
    data={[
      {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
      },
      {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
      },
    ]}
  />);
}

export default App;
