import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize, mergeConfig,
} from '@edx/frontend-platform';
import { ErrorPage } from '@edx/frontend-platform/react';
import { createRoot } from 'react-dom/client';

import App from './App';
import messages from './i18n';
import primeLogo from './assets/images/prime-logo-white.svg';
import primeFavicon from './assets/images/prime-favicon.png';

import './index.scss';

const container = document.getElementById('root');

const root = createRoot(container!);
subscribe(APP_READY, () => {
  // Apply branding after remote configuration loads and before AppProvider reads it.
  mergeConfig({ LOGO_URL: primeLogo, FAVICON_URL: primeFavicon });
  root.render(<App />);
});

subscribe(APP_INIT_ERROR, (_type, data) => {
  const { message } = data as { message: string };
  root.render(<ErrorPage message={message} />);
});

initialize({
  messages,
});
