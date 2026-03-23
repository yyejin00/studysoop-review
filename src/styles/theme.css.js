import { createTheme, createThemeContract } from '@vanilla-extract/css';

export const vars = createThemeContract({
  color: {
    primary: null,
    primaryHover: null,
    surface: null,
    background: null,
    border: null,
    text: null,
    muted: null,
  },
});

export const lightThem = createTheme({
  primary: '#253',
  primaryHover: '#1d4a',
  surface: '#ffffff',
  background: '#f6f4ef',
  border: '#e5e7eb',
  text: '#111827',
  muted: '#6b7280',
});

export const darkTheme = createTheme(vars, {
  color: {
    primary: '#1d4',
    primaryHover: '#1a9d',
    surface: '#111827',
    background: '#0b1120',
    border: '#334155',
    text: '#f8fafc',
    muted: '#94a3b8',
  },
});
