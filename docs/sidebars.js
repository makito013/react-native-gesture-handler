module.exports = {
  docs: [
    { type: 'doc', id: 'introduction' },
    { type: 'doc', id: 'installation' },
    { type: 'doc', id: 'troubleshooting' },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'quickstart/quickstart',
        'gesture-composition',
        'manual-gestures/manual-gestures',
        'under-the-hood/states-events',
        'gesture-handlers/basics/about-handlers',
        'gesture-handlers/basics/interactions',
        'guides/testing',
        'guides/migrating-off-rnghenabledroot',
        'guides/upgrading-to-2',
      ],
    },
    {
      type: 'category',
      label: 'API reference',
      items: [
        {
          type: 'category',
          label: 'Gestures',
          items: [
            'api/gestures/gesture-detector',
            'api/gestures/gesture',
            'api/gestures/pan-gesture',
            'api/gestures/tap-gesture',
            'api/gestures/long-press-gesture',
            'api/gestures/rotation-gesture',
            'api/gestures/pinch-gesture',
            'api/gestures/fling-gesture',
            'api/gestures/force-touch-gesture',
            'api/gestures/native-gesture',
            'api/gestures/manual-gesture',
            'api/gestures/hover-gesture',
            'api/gestures/composed-gestures',
            'api/gestures/touch-events',
            'api/gestures/state-manager',
          ],
        },
        {
          type: 'category',
          label: 'Components',
          items: [
            'api/components/buttons',
            'api/components/swipeable',
            'api/components/touchables',
            'api/components/drawer-layout',
          ],
        },
        {
          type: 'category',
          label: 'Gesture Handlers',
          items: [
            'gesture-handlers/api/common-gh',
            'gesture-handlers/api/pan-gh',
            'gesture-handlers/api/tap-gh',
            'gesture-handlers/api/longpress-gh',
            'gesture-handlers/api/rotation-gh',
            'gesture-handlers/api/fling-gh',
            'gesture-handlers/api/pinch-gh',
            'gesture-handlers/api/force-gh',
            'gesture-handlers/api/nativeview-gh',
            'gesture-handlers/api/create-native-wrapper',
          ],
        },
        { type: 'doc', id: 'api/test-api' },
      ],
    },
    {
      type: 'category',
      label: 'Under the hood',
      items: ['under-the-hood/how-does-it-work', 'gesture-handlers/basics/state'],
    },
  ],
};
