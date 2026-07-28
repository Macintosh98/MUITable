import {
    Box,
    FormControl,
    Typography,
    Select,
    MenuItem,
    IconButton,
} from "@mui/material";
import { AnimateItem } from "@abhishekzambare/animate";
import GrayHeader from "../GrayHeader";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import type { Dispatch, SetStateAction } from "react";

export const MUITableFooter = ({
    pageNumber,
    pageSize,
    pageTotalCount,
    setPageNumber,
    setPageSize,
}: {
    pageNumber: number;
    pageSize: number;
    pageTotalCount: number;
    setPageNumber: Dispatch<SetStateAction<number>>;
    setPageSize: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <GrayHeader
            sx={{ m: 0, mt: 1, px: 1 }}
            centerElement={[
                <AnimateItem mKey="init">
                    <Box
                        sx={(theme) => ({
                            backgroundColor:
                                theme.palette.action.hover,
                            borderRadius: (theme) =>
                                theme.shape.borderRadius,
                            px: 2,
                            height: "28px",
                        })}
                    >
                        <Typography
                            variant="caption"
                            color={"textSecondary"}
                        >
                            Page
                            <Typography
                                variant="caption"
                                color={"textPrimary"}
                                sx={{
                                    ml: 0.5,
                                }}
                            >
                                {pageNumber} /
                                {Math.ceil(pageTotalCount / pageSize)}
                            </Typography>
                        </Typography>
                    </Box>
                </AnimateItem>,
            ]}
            startElement={[
                <AnimateItem mKey="init">
                    <FormControl
                        sx={(theme) => ({
                            height: "28px",
                            backgroundColor:
                                theme.palette.action.hover,
                            borderRadius: (theme) =>
                                theme.shape.borderRadius,
                        })}
                    >
                        <Select
                            label="Rows"
                            sx={{
                                boxShadow: (theme) =>
                                    theme.shadows[0],
                                backgroundColor: "transparent",
                            }}
                            value={pageSize}
                            onChange={(e: any) => {
                                setPageNumber(1);
                                setPageSize(e.target.value);
                            }}
                        >
                            <MenuItem value={5}>
                                <Typography variant="caption">
                                    5
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            ml: 1,
                                        }}
                                        color={"textSecondary"}
                                    >
                                        Rows
                                    </Typography>
                                </Typography>
                            </MenuItem>
                            <MenuItem value={10}>
                                <Typography variant="caption">
                                    10
                                    <Typography
                                        variant="caption"
                                        color={"textSecondary"}
                                        sx={{
                                            ml: 1,
                                        }}
                                    >
                                        Rows
                                    </Typography>
                                </Typography>
                            </MenuItem>
                            <MenuItem value={20}>
                                <Typography variant="caption">
                                    20
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            ml: 1,
                                        }}
                                        color={"textSecondary"}
                                    >
                                        Rows
                                    </Typography>
                                </Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </AnimateItem>,
            ]}
            endElement={[
                <AnimateItem mKey="init">
                    <IconButton
                        sx={(theme: any) => ({
                            backgroundColor:
                                theme.palette.action.selected,
                            borderRadius: (theme) =>
                                theme.shape.borderRadius,
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.action.focus,
                            },
                        })}
                        size="small"
                        disabled={pageNumber == 1}
                        onClick={() => {
                            setPageNumber((prv) => prv - 1);
                        }}
                    >
                        <ArrowBackIosNewOutlinedIcon />
                    </IconButton>
                </AnimateItem>,
                <AnimateItem mKey="init">
                    <IconButton
                        sx={(theme) => ({
                            backgroundColor:
                                theme.palette.primary.main,
                            color: (theme) =>
                                theme.palette.text.primary,
                            borderRadius: (theme) =>
                                theme.shape.borderRadius,
                            "&:hover": {
                                backgroundColor:
                                    theme.palette.primary.main,
                                color: (theme) =>
                                    theme.palette.text.primary,
                            },
                        })}
                        disabled={
                            Math.ceil(pageTotalCount / pageSize) ==
                                pageNumber ||
                            Math.ceil(pageTotalCount / pageSize) == 0
                        }
                        size="small"
                        onClick={() => {
                            setPageNumber((prv) => prv + 1);
                        }}
                    >
                        <ArrowForwardIosOutlinedIcon />
                    </IconButton>
                </AnimateItem>,
            ]}
        ></GrayHeader>
    );
};
