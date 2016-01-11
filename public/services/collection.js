app.factory('Collection', function(){

  var collections = [
    {
      title1: 'We',
      title2: 'Create',
      slug: 'wecreate',
      description: 'Natural light and simple surroundings.',
      cover: 'images/wecreate-1.png',
      pics: [
        'images/full_size/wecreate-1.png',
        'images/full_size/wecreate-2.jpeg',
        'images/full_size/wecreate-3.jpeg',
        'images/full_size/wecreate-4.jpeg'
      ]
    },
    {
      title1: 'The',
      title2: 'Yard',
      slug: 'the-yard',
      description: 'Feel classy getting work done.',
      cover: 'images/the-yard-2-1.jpeg',
      pics: [
        'images/full_size/the-yard-2-1.jpeg',
        'images/full_size/the-yard-1-1.jpeg',
        'images/full_size/the-yard-1-2.jpeg',
        'images/full_size/the-yard-1-3.jpeg',
        'images/full_size/the-yard-1-4.jpeg',
        'images/full_size/the-yard-1-5.jpeg',
        'images/full_size/the-yard-2-2.jpeg',
        'images/full_size/the-yard-2-3.jpeg',
        'images/full_size/the-yard-2-4.jpeg',
        'images/full_size/the-yard-2-5.jpeg',
        'images/full_size/the-yard-3-1.jpeg',
        'images/full_size/the-yard-3-2.jpeg',
        'images/full_size/the-yard-3-3.jpeg',
        'images/full_size/the-yard-3-4.jpeg',
        'images/full_size/the-yard-3-5.jpeg',
        'images/full_size/the-yard-3-6.jpeg',
        'images/full_size/the-yard-3-7.jpeg',
        'images/full_size/the-yard-3-8.jpeg',
        'images/full_size/the-yard-3-9.jpeg',
        'images/full_size/the-yard-3-10.jpeg',
        'images/full_size/the-yard-1.jpeg',
        'images/full_size/the-yard-2.jpeg',
        'images/full_size/the-yard-3.jpeg',
        'images/full_size/the-yard-4.jpeg',
        'images/full_size/the-yard-5.jpeg',
        'images/full_size/the-yard-6.jpeg',
        'images/full_size/the-yard-7.jpeg',
        'images/full_size/the-yard-8.jpeg',
        'images/full_size/the-yard-9.jpeg'
      ]
    },
    {
      title1: 'The',
      title2: 'Farm',
      slug: 'the-farm',
      description: 'Meticulously decorated with rustic, wooden details.',
      cover: 'images/the-farm-3.png',
      pics: [
        'images/full_size/the-farm-3.png',
        'images/full_size/the-farm-1.png',
        'images/full_size/the-farm-2.jpeg',
        'images/full_size/the-farm-4.jpeg',
        'images/full_size/the-farm-5.jpeg',
        'images/full_size/the-farm-6.jpeg',
        'images/full_size/the-farm-7.jpeg',
        'images/full_size/the-farm-8.jpeg',
        'images/full_size/the-farm-9.jpeg',
        'images/full_size/the-farm-10.jpeg'
      ]
    },
    {
      title1: 'LM',
      title2: 'HQ',
      slug: 'lmhq',
      description: 'Lower Manhattan\'s first collaboration space.',
      cover: 'images/lmhq-1.jpeg',
      pics: [
        'images/full_size/lmhq-1.jpeg',
        'images/full_size/lmhq-2.jpeg',
        'images/full_size/lmhq-3.jpeg',
        'images/full_size/lmhq-4.jpeg',
        'images/full_size/lmhq-5.jpeg',
        'images/full_size/lmhq-6.jpeg',
        'images/full_size/lmhq-7.png'
      ]
    },
    {
      title1: 'Spark',
      title2: 'Labs',
      slug: 'spark-labs',
      description: 'Some of the hottest European startups and their friendly pups.',
      cover: 'images/spark-labs-1.png',
      pics: [
        'images/full_size/spark-labs-1.png',
        'images/full_size/spark-labs-2.jpeg',
        'images/full_size/spark-labs-3.png',
        'images/full_size/spark-labs-4.png',
        'images/full_size/spark-labs-5.png'
      ]
    },
    {
      title1: 'Ed',
      title2: 'ison',
      slug: 'edison',
      description: 'Named for the innovator and decorated with trendy light fixtures.',
      cover: 'images/edison-5.png',
      pics: [
        'images/full_size/edison-5.png',
        'images/full_size/edison-1.jpeg',
        'images/full_size/edison-2.png',
        'images/full_size/edison-3.png',
        'images/full_size/edison-4.png'
      ]
    },
    {
      title1: 'Jay',
      title2: 'Suites',
      slug: 'jay-suites-34th-street',
      description: 'Recently named the best rooftop to work from in NYC by Metro.',
      cover: 'images/jay-suites-34th-street-1.jpeg',
      pics: [
        'images/full_size/jay-suites-34th-street-1.jpeg',
        'images/full_size/jay-suites-34th-street-2.png',
        'images/full_size/jay-suites-34th-street-3.jpeg',
        'images/full_size/jay-suites-34th-street-4.jpeg',
        'images/full_size/jay-suites-34th-street-5.jpeg'
      ]
    },
    {
      title1: 'Ledian',
      title2: 'Space',
      slug: 'ledian-space',
      description: 'Flexible shared space in a ‘boutique hotel office’ style environment.',
      cover: 'images/ledian-space-2.jpeg',
      pics: [
        'images/full_size/ledian-space-2.jpeg',
        'images/full_size/ledian-space-1.jpeg',
        'images/full_size/ledian-space-3.jpeg',
        'images/full_size/ledian-space-4.jpeg',
        'images/full_size/ledian-space-5.jpeg',
        'images/full_size/ledian-space-6.jpeg',
        'images/full_size/ledian-space-7.jpeg',
        'images/full_size/ledian-space-8.jpeg',
        'images/full_size/ledian-space-9.jpeg',
        'images/full_size/ledian-space-10.jpeg'
      ]
    },
    {
      title1: 'Compound',
      title2: 'Cowork',
      slug: 'thecompoundcowork',
      description: 'Filled with natural light, indoor greenery and alternative seating options.',
      cover: 'images/thecompoundcowork-1.jpeg',
      pics: [
        'images/full_size/thecompoundcowork-1.jpeg',
        'images/full_size/thecompoundcowork-2.jpeg',
        'images/full_size/thecompoundcowork-3.jpeg',
        'images/full_size/thecompoundcowork-4.jpeg',
        'images/full_size/thecompoundcowork-5.jpeg',
        'images/full_size/thecompoundcowork-6.jpeg',
        'images/full_size/thecompoundcowork-7.jpeg',
        'images/full_size/thecompoundcowork-8.jpeg',
        'images/full_size/thecompoundcowork-9.jpeg',
        'images/full_size/thecompoundcowork-10.jpeg'
      ]
    },
    {
      title1: 'QNS',
      title2: 'Collective',
      slug: 'qns-collective',
      description: 'A casual, easy, and open space with a sunlit loft feel.',
      cover: 'images/qns-collective-1.jpeg',
      pics: [
        'images/full_size/qns-collective-1.jpeg',
        'images/full_size/qns-collective-2.jpeg',
        'images/full_size/qns-collective-3.jpeg',
        'images/full_size/qns-collective-4.jpeg',
        'images/full_size/qns-collective-5.jpeg'
      ]
    },
    {
      title1: 'Joy',
      title2: 'nture',
      slug: 'joynture',
      description: '14,120 square foot space with an intimate boutique flavor.',
      cover: 'images/joynture-1.jpeg',
      pics: [
        'images/full_size/joynture-1.jpeg',
        'images/full_size/joynture-2.png',
        'images/full_size/joynture-3.png',
        'images/full_size/joynture-4.png',
        'images/full_size/joynture-5.png',
        'images/full_size/joynture-6.jpeg',
        'images/full_size/joynture-7.jpeg',
        'images/full_size/joynture-8.jpeg',
        'images/full_size/joynture-9.jpeg',
        'images/full_size/joynture-10.jpeg'
      ]
    },
    {
      title1: 'Think',
      title2: 'Rise',
      slug: 'rise',
      description: 'Two floors of amazing design and atmosphere.',
      cover: 'images/rise-1.jpeg',
      pics: [
        'images/full_size/rise-1.jpeg',
        'images/full_size/rise-2.jpeg',
        'images/full_size/rise-3.jpeg',
        'images/full_size/rise-4.jpeg',
        'images/full_size/rise-5.png',
        'images/full_size/rise-6.jpeg',
        'images/full_size/rise-7.jpeg'
      ]
    },
    {
      title1: 'Bar',
      title2: 'Works',
      slug: 'bar-works',
      description: 'Work or hold meetings at the bar.',
      cover: 'images/bar-works-1.jpeg',
      pics: [
        'images/full_size/bar-works-1.jpeg',
        'images/full_size/bar-works-2.jpeg',
        'images/full_size/bar-works-3.jpeg',
        'images/full_size/bar-works-4.jpeg',
        'images/full_size/bar-works-5.jpeg',
        'images/full_size/bar-works-6.jpeg',
        'images/full_size/bar-works-7.jpeg',
        'images/full_size/bar-works-8.jpeg',
        'images/full_size/bar-works-9.jpeg',
        'images/full_size/bar-works-10.jpeg'
      ]
    },
    {
      title1: 'Projective',
      title2: 'Space',
      slug: 'projective-space',
      description: 'Creative haven for New York City\'s brightest minds.',
      cover: 'images/projective-space-1.png',
      pics: [
        'images/full_size/projective-space-1.png',
        'images/full_size/projective-space-2.png',
        'images/full_size/projective-space-3.png',
        'images/full_size/projective-space-4.jpeg',
        'images/full_size/projective-space-5.jpeg'
      ]
    },
    {
      title1: 'TEEM',
      title2: 'Coworking',
      slug: 'teem-coworking',
      description: 'Delightful to anyone looking for a solid workspace uptown.',
      cover: 'images/teem-coworking-1.jpeg',
      pics: [
        'images/full_size/teem-coworking-1.jpeg',
        'images/full_size/teem-coworking-2.jpeg',
        'images/full_size/teem-coworking-3.jpeg',
        'images/full_size/teem-coworking-4.jpeg',
        'images/full_size/teem-coworking-5.jpeg',
        'images/full_size/teem-coworking-6.jpeg'
      ]
    },
  ];

  return {
    getAllCollections: function(){
      return angular.copy(collections);
    },
    getCollectionBySlug: function(slug){
      var result = null;

      for (var i = 0; i < collections.length; i++) {
        if (collections[i].slug == slug) {
          result = angular.copy(collections[i]);
          break;
        }
      }

      return result;
    }
  }
});