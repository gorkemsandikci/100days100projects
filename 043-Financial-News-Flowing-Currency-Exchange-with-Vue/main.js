new Vue({
    el: '#app',
    data: {
      marqueeText: 'Currency Exchange Rates: USD/TRY: 8.50 (+0.25%), EUR/TRY: 10.00 (-0.15%), GBP/TRY: 11.20 (+0.10%)',
      currencies: [
        { name: 'USD/TRY', rate: 8.50, change: 0.25 },
        { name: 'EUR/TRY', rate: 10.00, change: -0.15 },
        { name: 'GBP/TRY', rate: 11.20, change: 0.10 },
      ],
      articles: [
        { title: 'Financial News 1', link: 'https://example.com/news/1' },
        { title: 'Financial News 2', link: 'https://example.com/news/2' },
        { title: 'Financial News 3', link: 'https://example.com/news/3' },
      ],
      subtitleText: 'Subtitle text can be displayed here.'
    }
  });