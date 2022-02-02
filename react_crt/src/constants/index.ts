export const APP_THEMES = {
  dark: 'dark',
  light: 'light',
} as const;

export const FILTER_TYPES = {
  all: "all",
  done: "done",
  current: "current",
} as const;

export const TASKS_PRIORITY = {
  common: {
    title: "Обычная",
    value: "common",
  },
  important: {
    title: "Важная",
    value: "important",
  },
  hot: {
    title: "Срочная",
    value: "hot",
  }
} as const;