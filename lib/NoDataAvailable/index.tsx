import { Stack, type SxProps, type Theme } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import type { JSX } from "react";
import { AnimateZoom } from "@abhishekzambare/animate";
import GrayText from "../GrayText";

interface Props {
    height?: string;
    iconSize?: string;
    msg?: string;
    sx?: SxProps<Theme>;
    upElement?: JSX.Element;
    downElement?: JSX.Element;
}

const NoDataAvailable = ({
    height = "300px",
    msg = "No Data Available !",
    upElement = <></>,
    downElement = <></>,
}: Props) => {
    return (
        <Stack
            spacing={2}
            sx={{
                alignItems: "center",
                justifyContent: "center",
                height: height,
                width: "100%",
            }}
        >
            {upElement}
            <AnimateZoom>
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={[
                        {
                            alignItems: "center",
                        },
                        (theme) => ({
                            borderRadius: (theme) =>
                                theme.shape.borderRadius,
                            px: 2,
                            py: 1,
                            backgroundColor:
                                theme.palette.action.hover,
                            boxShadow: (theme) => theme.shadows[1],
                        }),
                    ]}
                >
                    <ErrorOutlineOutlinedIcon />

                    {msg == "No Data Available !" ? (
                        <Stack
                            direction={"row"}
                            sx={{
                                alignItems: "center",
                            }}
                        >
                            <GrayText text={msg + " "} />
                            <SentimentVeryDissatisfiedOutlinedIcon
                                sx={{
                                    ml: 1,
                                }}
                            />
                        </Stack>
                    ) : msg.toLowerCase().search("loading...") !=
                      -1 ? (
                        <>
                            <Stack
                                direction={"row"}
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <GrayText text={msg + " "} />
                                <SentimentVerySatisfiedOutlinedIcon
                                    sx={{
                                        ml: 1,
                                    }}
                                />
                            </Stack>
                        </>
                    ) : (
                        <GrayText text={msg + " "} />
                    )}
                </Stack>
            </AnimateZoom>
            {downElement}
        </Stack>
    );
};

export default NoDataAvailable;
