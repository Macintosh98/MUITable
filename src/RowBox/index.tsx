import { Box, Stack, type Theme } from "@mui/material";
import type { JSX } from "react";
import type { SystemStyleObject } from "@mui/system";
import { useTheme, useMediaQuery } from "@mui/material";

function useResponsive(query: string, start?: any, end?: any) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}

interface Props {
  sx?: SystemStyleObject<Theme>;
  startElement?: JSX.Element[];
  centerElement?: JSX.Element[];
  endElement?: JSX.Element[];
  isOnlyStack?: boolean;
}

const RowBox = ({
  sx = {},
  startElement = [<></>],
  centerElement = [<></>],
  endElement = [<></>],
}: Props) => {
  const isDesktop = useResponsive("up", "lg");

  return (
    <Box sx={sx}>
      <Stack
        direction={"row"}
        spacing={isDesktop ? 0 : 2}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          overflow: "auto",
          maxWidth: isDesktop ? "100%" : "100vw",
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

export default RowBox;
