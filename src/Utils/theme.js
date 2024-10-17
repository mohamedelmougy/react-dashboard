import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  colorSchemes: {
    light: {
      palette: {
        activeLink:{
          main:"#eeeeee"
        }
      },
    },
    dark: {
      palette: {
        activeLink: {
           main:"#424242"
        },
      },
    },
  },
});

export default theme;

// const theme = createTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         activeLink:{
//           main:"#f5f5f5"
//         }
//       },
//     },
//     dark: {
//       palette: {
//         activeLink: {
//            main:"#424242"
//         },
//       },
//     },
//   },
// });



// const theme = createTheme({
//   colorSchemes: {
//     dark: true,
//   },
// });