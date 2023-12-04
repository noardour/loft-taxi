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
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: ({ ownerState }) => {
          if (ownerState.variant !== 'text') {
            return {
              borderRadius: 9999,
              paddingRight: '80px',
              paddingLeft: '80px',
              boxShadow: 'none',
            };
          }
        },
      },
    },
  },
});

export default MUITheme;
