import { AnimateItem } from "@abhishekzambare/animate";
import {
  Box,
  Stack,
  Tooltip,
  Typography,
  ListItemButton,
  IconButton,
} from "@mui/material";
import NoDataAvailable from "../NoDataAvailable";
import { useResponsive } from "../useResponsive";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";
import { MUITableFooter } from "../MUITableFooter";

interface OneProps {
  tableHeight?: string;
  pageNumber?: number;
  pageSize?: number;
  pageTotalCount?: number;
  setPageNumber?: () => void;
  setPageSize?: () => void;
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
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  } & Record<string, any>)[];
}

const MUITable = ({
  tableHeight = "100%",
  pageNumber = 0,
  pageSize = 0,
  pageTotalCount = 0,
  setPageNumber = () => {},
  setPageSize = () => {},
  pagination,
  columns,
  data,
}: OneProps) => {
  const isDesktop = useResponsive("up", "lg");
  return (
    <Box>
      <Stack
        sx={{
          width: "100%",
          overflow: "auto",
        }}
      >
        <Stack
          direction={"row"}
          spacing={1}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mb: 0.5,
            width: isDesktop ? "100%" : "fit-content",
            overflow: "auto",
          }}
        >
          {columns.map((column) => (
            <AnimateItem mKey={column?.value + "key"}>
              <Stack
                spacing={1}
                direction="row"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  column.onRowClick?.();
                }}
                sx={{
                  alignItems: "center",
                  width: column.width,
                  justifyContent: "center",

                  backgroundColor: (theme) => theme.palette.action.selected,

                  borderRadius: (theme) => theme.shape.borderRadius,

                  px: 1,
                  py: 0.5,
                }}
              >
                <Tooltip title={column.name}>
                  <Typography
                    variant="subtitle2"
                    noWrap
                    sx={{
                      color: "textSecondary",
                    }}
                  >
                    {column.name}
                  </Typography>
                </Tooltip>
                {column.isSorted && (
                  <IconButton
                    sx={(theme) => ({
                      "&:hover": {
                        backgroundColor: theme.palette.action.selected,
                      },
                      p: 0,
                      borderRadius: (theme) => theme.shape.borderRadius,
                    })}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      column.onSortClick?.();
                    }}
                  >
                    <SwapVertOutlinedIcon />
                  </IconButton>
                )}
              </Stack>
            </AnimateItem>
          ))}
        </Stack>

        <Stack
          spacing={0.5}
          sx={{
            overflow: "auto",
            height: tableHeight,
            width:
              data.length > 0 ? (isDesktop ? "100%" : "fit-content") : "unset",
          }}
        >
          {data.length == 0 ? (
            <AnimateItem mKey={"NoData"}>
              <NoDataAvailable />
            </AnimateItem>
          ) : (
            data.map((item: any) => (
              <AnimateItem mKey={item?.id + "key"}>
                <ListItemButton
                  sx={{
                    p: "0px !important",
                    backgroundColor: item.color
                      ? item.color + ".light"
                      : (theme: any) => theme.palette.action.hover,
                    borderRadius: (theme) => theme.shape.borderRadius,
                    py: 0,
                    "&:hover": {
                      backgroundColor: (theme) => theme.palette.action.focus,
                    },
                  }}
                >
                  <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "28px",
                      width: "100%",
                    }}
                  >
                    {columns.map((column: any) => (
                      <Stack
                        spacing={1}
                        direction="row"
                        sx={{
                          alignItems: "center",
                          width: column.width,
                          px: 2,
                        }}
                      >
                        {column?.render ? (
                          column?.render(item)
                        ) : (
                          <Tooltip title={item[column.value]}>
                            <Typography
                              variant="subtitle2"
                              noWrap
                              sx={{
                                textOverflow: "ellipsis",
                              }}
                            >
                              {item[column.value]}
                            </Typography>
                          </Tooltip>
                        )}
                      </Stack>
                    ))}
                  </Stack>
                </ListItemButton>
              </AnimateItem>
            ))
          )}
        </Stack>
      </Stack>
      {pagination && (
        <MUITableFooter
          pageNumber={pageNumber}
          pageSize={pageSize}
          pageTotalCount={pageTotalCount}
          setPageNumber={setPageNumber}
          setPageSize={setPageSize}
        />
      )}
    </Box>
  );
};

export default MUITable;
