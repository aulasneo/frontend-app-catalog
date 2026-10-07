import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  title: {
    id: 'catalog.home-page.prime.title',
    defaultMessage: 'Professional Certification in Rural M&E',
    description: 'Main heading text displayed at the banner of the home page.',
  },
  subtitle: {
    id: 'catalog.home-page.prime.subtitle',
    defaultMessage: 'Courses, practical training and workshops in monitoring and evaluation, for people who work in agriculture and rural development projects.',
    description: 'Secondary text displayed below the main heading on the home page.',
  },
  searchPlaceholder: {
    id: 'catalog.home-page.search-placeholder',
    defaultMessage: 'Search for a course',
    description: 'Placeholder text inside the course search input field.',
  },
  videoButton: {
    id: 'catalog.home-page.video-button',
    defaultMessage: 'View promo video',
    description: 'Label for the button that opens the promotional video modal.',
  },
  videoButtonAlt: {
    id: 'catalog.home-page.video-button-alt',
    defaultMessage: 'search button',
    description: 'Alternative text for the promo video button (for screen readers).',
  },
});

export default messages;
