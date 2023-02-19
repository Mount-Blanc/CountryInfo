import "./Loading.css";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function Loading() {
  return (
    <>
      <div className="modal">
        <Box>
          <LinearProgress />
        </Box>
      </div>
    </>
  );
}
export default Loading;
