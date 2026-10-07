import { useIntl } from '@edx/frontend-platform/i18n';

import messages from './messages';

const HomePageOverlay = () => {
  const intl = useIntl();

  return (
    <>
      <p className="prime-wordmark">PRiME III</p>
      <h1 className="prime-hero-title">
        {intl.formatMessage(messages.title)}
      </h1>
      <p className="prime-hero-description">
        {intl.formatMessage(messages.subtitle)}
      </p>
    </>
  );
};

export default HomePageOverlay;
