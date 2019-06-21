import { config } from '../../shared/config.json';

export default {
  global: {
    pageLoaded: false,
    splashOpen: true,
    transportOpen: false,
    menuOpen: false,
    mode: 'dark',
    isMobile: true
  },
  home: {
    aboutTop: 915,
    recentWorkTop: 1819,
    skillsTop: config.skillsTop
  },
  stats: {
    data: null,
    loading: false,
    error: null
  }
}
