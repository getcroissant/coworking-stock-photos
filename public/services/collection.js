app.factory('Collection', function(){

  var collections = [
    {
      "title1": "We",
      "title2": "Create",
      "description": "Natural light and simple surroundings.",
      "cover": "images/wecreate-1.png"
    },
    {
      "title1": "The",
      "title2": "Yard",
      "description": "Feel classy getting work done.",
      "cover": "images/the-yard-2-1.jpeg"
    },
    {
      "title1": "The",
      "title2": "Farm",
      "description": "Meticulously decorated with rustic, wooden details.",
      "cover": "images/the-farm-3.png"
    },
    {
      "title1": "LM",
      "title2": "HQ",
      "description": "Lower Manhattan's first collaboration space.",
      "cover": "images/lmhq-1.jpeg"
    },
    {
      "title1": "Spark",
      "title2": "Labs",
      "description": "Some of the hottest European startups and their friendly pups.",
      "cover": "images/spark-labs-1.png"
    },
    {
      "title1": "Ed",
      "title2": "ison",
      "description": "Named for the innovator and decorated with trendy light fixtures.",
      "cover": "images/edison-5.png"
    },
    {
      "title1": "Jay",
      "title2": "Suites",
      "description": "Recently named the best rooftop to work from in NYC by Metro.",
      "cover": "images/jay-suites-34th-street-1.jpeg"
    },
    {
      "title1": "Ledian",
      "title2": "Space",
      "description": "Flexible shared space in a ‘boutique hotel office’ style environment.",
      "cover": "images/ledian-space-2.jpeg"
    },
    {
      "title1": "Compound",
      "title2": "Cowork",
      "description": "Filled with natural light, indoor greenery and alternative seating options.",
      "cover": "images/thecompoundcowork-1.jpeg"
    },
    {
      "title1": "QNS",
      "title2": "Collective",
      "description": "A casual, easy, and open space with a sunlit loft feel.",
      "cover": "images/qns-collective-1.jpeg"
    },
    {
      "title1": "Joy",
      "title2": "nture",
      "description": "14,120 square foot space with an intimate boutique flavor.",
      "cover": "images/joynture-1.jpeg"
    },
    {
      "title1": "Think",
      "title2": "Rise",
      "description": "Two floors of amazing design and atmosphere.",
      "cover": "images/rise-1.jpeg"
    },
    {
      "title1": "Bar",
      "title2": "Works",
      "description": "Work or hold meetings at the bar.",
      "cover": "images/bar-works-1.jpeg"
    },
    {
      "title1": "Projective",
      "title2": "Space",
      "description": "Creative haven for New York City's brightest minds.",
      "cover": "images/projective-space-1.png"
    },
    {
      "title1": "TEEM",
      "title2": "Coworking",
      "description": "Delightful to anyone looking for a solid workspace uptown.",
      "cover": "images/teem-coworking-1.jpeg"
    },
  ];

  return {
    getAllCollections: function(){
      return collections;
    },
    getCollection: function(collectionId){
      return collections[collectionId];
    }
  }
});