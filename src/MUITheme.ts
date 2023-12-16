import { createTheme } from '@mui/material';

const MUITheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FDBF5A',
      dark: '#FFA842',
      light: '#ffcb5a',
      contrastText: '#000',
    },
    secondary: {
      main: '#1C1A19',
      light: '#828282',
      dark: '#000',
      contrastText: '#FFF',
    },
    common: {
      black: '#1C1A19',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        disableElevation: true,
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant !== 'text') {
            return {
              borderRadius: '9999px',
              padding: '12px 80px',
              fontSize: '18px',
            };
          } else {
            return {
              fontWeight: '400',
            };
          }
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'standard',
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 6,
      },
      styleOverrides: {
        root: {
          borderRadius: '10px',
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: '0px',
        },
      },
    },
  },
});

export default MUITheme;
