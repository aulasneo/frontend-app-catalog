import { useState } from 'react';
import { useNavigate } from 'react-router';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Form, useToggle, SearchField,
} from '@openedx/paragon';

import { ROUTES } from '@src/routes';
import HomeOverlayHtmlSlot from '@src/plugin-slots/HomeOverlayHtmlSlot';
import { HomePromoVideoButtonSlot, HomePromoVideoModalSlot } from '@src/plugin-slots/HomePromoVideoSlots';

import primeMosaic from '@src/assets/images/prime-mosaic.svg';

import messages from './messages';

const HomeBanner = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, open, close] = useToggle(false);

  const handleSearch = () => navigate(`${ROUTES.COURSES}?search_query=${searchValue}`);

  const searchField = getConfig().ENABLE_COURSE_DISCOVERY && (
    <Form.Group className="mt-4.5">
      <SearchField
        placeholder={intl.formatMessage(messages.searchPlaceholder)}
        value={searchValue}
        submitButtonLocation="external"
        onChange={(value: string) => setSearchValue(value)}
        onSubmit={handleSearch}
      />
    </Form.Group>
  );

  return (
    <section
      className="home-banner position-relative overflow-hidden"
      data-testid="home-banner"
    >
      <div className="prime-hero-layout">
        <div className="prime-hero-copy">
          <HomeOverlayHtmlSlot />
          <HomePromoVideoButtonSlot onClick={open} />
          {searchField}
        </div>
        <img className="prime-hero-art" src={primeMosaic} alt="" aria-hidden="true" />
      </div>
      <HomePromoVideoModalSlot
        isOpen={isOpen}
        close={close}
        videoId={getConfig().HOMEPAGE_PROMO_VIDEO_YOUTUBE_ID || ''}
      />
    </section>
  );
};

export default HomeBanner;
