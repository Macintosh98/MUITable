import { Box, Stack, type SxProps, type Theme } from "@mui/material";
import type { JSX } from "react";
import { useResponsive } from "../useResponsive";

interface Props {
    sx?: SxProps<Theme>;
    startElement?: JSX.Element[];
    centerElement?: JSX.Element[];
    endElement?: JSX.Element[];
    isOnlyStack?: boolean;
}

const GrayHeader = ({
    sx = {},
    startElement = [<></>],
    centerElement = [<></>],
    endElement = [<></>],
    isOnlyStack = false,
}: Props) => {
    const isDesktop = useResponsive("up", "lg");

    return (
        <Box
            sx={
                isOnlyStack
                    ? sx
                    : {
                          backgroundColor: (theme) =>
                              theme.palette.action.hover,
                          boxShadow: (theme) => theme.shadows[1],
                          px: 2,
                          py: 0.5,
                          minHeight: "40px",
                          alignContent: "center",
                          mb: 1,
                          borderRadius: (theme) =>
                              theme.shape.borderRadius,
                          // eslint-disable-next-line @typescript-eslint/no-misused-spread
                          ...sx,
                      }
            }
        >
            <Stack
                direction={"row"}
                spacing={isDesktop ? 0 : 2}
                sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "auto",

                    maxWidth: isDesktop
                        ? "100%"
                        : isOnlyStack
                          ? "100vw"
                          : "calc(100vw - 48px)",

                    height: "100%",
                }}
            >
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        justifyContent: "start",
                        alignItems: "center",
                        width: isDesktop ? "33%" : undefined,
                    }}
                >
                    {...startElement}
                </Stack>
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: isDesktop ? "33%" : undefined,
                    }}
                >
                    {...centerElement}
                </Stack>

                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        justifyContent: "end",
                        alignItems: "center",
                        width: isDesktop ? "33%" : undefined,
                    }}
                >
                    {...endElement}
                </Stack>
            </Stack>
        </Box>
    );
};

export default GrayHeader;
