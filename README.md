# 1 props required info 
```ts
    pageNumber?: number;
    pageSize?: number;
    pageTotalCount?: number;
    setPageNumber?: React.Dispatch<React.SetStateAction<number>>;
    setPageSize?: React.Dispatch<React.SetStateAction<number>>;
    tableHeight?: string;
    pagination: boolean;
    onRowClick?: (item: any) => void;
    columns: {
        width: string;
        name: string;
        value: string;
        render?: (row: any) => React.ReactNode;
        onSortClick?: () => void;
        isSorted?: boolean;
    }[];
    data: {
      // your data properties
      color: "primary" | "secondary" | "error" | "info" | "success" | "warning"
    }[];

```

# 2 example

```ts
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
                    onSortClick: () => {},
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
            data={[
                {
                    id: 1,
                    name: "John Doe",
                    email: "john.doe@example.com",
                    color: "error",
                    age: 30,
                },
                {
                    id: 15445345,
                    name: "John Doe",
                    email: "john.doe@example.com",
                    // color: "error",
                    age: 30,
                },
                {
                    id: 2,
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    color: "warning",
                    age: 25,
                },
                {
                    id: 3,
                    name: "Bob Johnson",
                    email: "bob.johnson@example.com",
                    color: "info",
                    age: 35,
                },
                {
                    id: 154478675345,
                    name: "John Doe",
                    email: "john.doe@example.com",
                    // color: "error",
                    age: 30,
                },
                {
                    id: 4,
                    name: "John Doe",
                    email: "john.doe@example.com",
                    color: "success",
                    age: 30,
                },
                {
                    id: 5,
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    color: "primary",
                    age: 25,
                },
                {
                    id: 7456,
                    name: "John Doe",
                    email: "john.doe@example.com",
                    // color: "error",
                    age: 30,
                },
                {
                    id: 6,
                    name: "Bob Johnson",
                    email: "bob.johnson@example.com",
                    color: "secondary",
                    age: 40,
                },
            ]}
        />
```

- [By Abhishek Zambare](http://abhishekzambare.vercel.app/)
