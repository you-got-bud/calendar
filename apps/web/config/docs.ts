export const docsConfig = {
  mainNav: [
    {
      title: 'Docs',
      href: '/docs/getting-started',
      matchingPaths: ['/docs'],
    },
  ],
  sidebarNav: [
    {
      title: 'Introduction',
      items: [
        {
          title: 'Getting Started',
          href: '/docs/getting-started',
          items: [],
        },
      ],
    },
    {
      title: 'Components',
      items: [
        {title: 'Calendar', href: '/docs/calendar', items: []},
        {
          title: 'Date Picker',
          href: '/docs/date-picker',
          items: [],
        },
      ],
    },
  ],
}
