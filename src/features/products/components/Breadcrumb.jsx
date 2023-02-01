// import { useEffect, useState } from "react";
// import { useLocation, useParams } from "react-router-dom";

// import { Box } from "@mui/material";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";

// export default function Breadcrumb() {
//   const { pathname } = useLocation();
//   const { id } = useParams();
//   console.log("🚀 ~ file: Breadcrumb.jsx:11 ~ Breadcrumb ~ id", id);
//   const [linkList, setLinkList] = useState([]);

//   useEffect(() => {
//       if(pathname === "/product/food") setLinkList(
//         linkList.push(
//           <Link
//             underline="hover"
//             key="1"
//             color="inherit"
//             href="/"
//             onClick={handleClick}
//           >
//             List
//           </Link>
//         )
//       );

//       if(pathname === `/product/${id}`){

//       }
//   }, [pathname]);

//   function handleClick(event) {
//     event.preventDefault();
//     console.info("You clicked a breadcrumb.");
//   }

//   const breadcrumbs = [
//     <Link
//       underline="hover"
//       key="1"
//       color="inherit"
//       href="/"
//       onClick={handleClick}
//     >
//       MUI
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Core
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="inherit"
//       href="/material-ui/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Breadcrumb
//     </Link>,
//   ];

//   return (
//     <Box className="breadcrumb">
//       <Breadcrumbs
//         sx={{
//           fontSize: "16px",
//           //   bgcolor: "pink",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         separator={<NavigateNextIcon fontSize="small" />}
//         aria-label="breadcrumb"
//       >
//         {breadcrumbs}
//       </Breadcrumbs>
//     </Box>
//   );
// }
