import { Typography } from "@mui/material";

const GrayText = ({
    text,
    fontSize = 12,
}: {
    text: string;
    fontSize?: string | number;
}) => {
    return (
        <Typography
            variant="subtitle1"
            color={"textSecondary"}
            noWrap
            sx={{
                fontSize: fontSize,
                textOverflow: "ellipsis",
            }}
        >
            {text}
        </Typography>
    );
};

export default GrayText;
