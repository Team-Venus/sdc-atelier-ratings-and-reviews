/*
SAMPLE DATA INCLUDES:
productList, productById, productStylesById, relatedProductsById,
reviewList, reviewMetaData,
questionList, answerList
*/

module.exports.productList = [
  {
    id: 17067,
    campus: 'hr-rfp',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17068,
    campus: 'hr-rfp',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17069,
    campus: 'hr-rfp',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17070,
    campus: 'hr-rfp',
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
  {
    id: 17071,
    campus: 'hr-rfp',
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99.00',
    created_at: '2021-02-23T04:22:44.728Z',
    updated_at: '2021-02-23T04:22:44.728Z',
  },
];

module.exports.productById = {
  id: 17069,
  campus: 'hr-rfp',
  name: 'Morning Joggers',
  slogan: 'Make yourself a morning person',
  description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
  category: 'Pants',
  default_price: '40.00',
  created_at: '2021-02-23T04:22:44.728Z',
  updated_at: '2021-02-23T04:22:44.728Z',
  features: [
    {
      feature: 'Fabric',
      value: '100% Cotton',
    },
    {
      feature: 'Cut',
      value: 'Skinny',
    },
  ],
};

module.exports.productStylesById = {
  product_id: '17069',
  results: [
    {
      style_id: 90260,
      name: 'Black',
      original_price: '40.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1552902865-b72c031ac5ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1492447105260-2e947425b5cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1548133464-29abc661eb5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1500340520802-1687634cbe38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1559304022-afbf28f53c4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1656&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1554921148-83d8ceda2095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
      skus: {
        522076: {
          quantity: 8, // 8
          size: 'XS',
        },
        522077: {
          quantity: 16, // 16
          size: 'S',
        },
        522078: {
          quantity: 17, // 17
          size: 'M',
        },
        522079: {
          quantity: 10, // 10
          size: 'L',
        },
        522080: {
          quantity: 15, // 15
          size: 'XL',
        },
        522081: {
          quantity: 6, // 6
          size: 'XXL',
        },
      },
    },
    {
      style_id: 90261,
      name: 'Grey',
      original_price: '40.00',
      sale_price: null,
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1562542119-19d015b93c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1516684810863-e49c82f1f092?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=965&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1490427712608-588e68359dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
      ],
      skus: {
        522082: {
          quantity: 8,
          size: 'XS',
        },
        522083: {
          quantity: 16,
          size: 'S',
        },
        522084: {
          quantity: 17,
          size: 'M',
        },
        522085: {
          quantity: 10,
          size: 'L',
        },
        522086: {
          quantity: 15,
          size: 'XL',
        },
        522087: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      style_id: 90262,
      name: 'Goldenrod',
      original_price: '40.00',
      sale_price: '35.00',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
      ],
      skus: {
        522088: {
          quantity: 8, // 8
          size: 'XS',
        },
        522089: {
          quantity: 16, // 16
          size: 'S',
        },
        522090: {
          quantity: 17, // 17
          size: 'M',
        },
        522091: {
          quantity: 10, // 10
          size: 'L',
        },
        522092: {
          quantity: 15, // 15
          size: 'XL',
        },
        522093: {
          quantity: 6, // 6
          size: 'XXL',
        },
      },
    },
    {
      style_id: 90263,
      name: 'Maroon',
      original_price: '40.00',
      sale_price: '35.00',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1499714832275-d6205d94c35d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532244769164-ff64ddeefa45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549540806-76ce9007b674?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1554136920-a1df2909d8f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1541214880206-03318856c6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
      ],
      skus: {
        522094: {
          quantity: 8,
          size: 'XS',
        },
        522095: {
          quantity: 16,
          size: 'S',
        },
        522096: {
          quantity: 17,
          size: 'M',
        },
        522097: {
          quantity: 10,
          size: 'L',
        },
        522098: {
          quantity: 15,
          size: 'XL',
        },
        522099: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      style_id: 90264,
      name: 'Chartreuse',
      original_price: '40.00',
      sale_price: '25.00',
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1482876555840-f31c5ebbff1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1426647451887-5f2be01918a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1485646979142-d4abb57a876f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80',
        },
      ],
      skus: {
        522100: {
          quantity: 8,
          size: 'XS',
        },
        522101: {
          quantity: 16,
          size: 'S',
        },
        522102: {
          quantity: 17,
          size: 'M',
        },
        522103: {
          quantity: 10,
          size: 'L',
        },
        522104: {
          quantity: 15,
          size: 'XL',
        },
        522105: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
    {
      style_id: 90265,
      name: 'White',
      original_price: '40.00',
      sale_price: null,
      'default?': false,
      photos: [
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1547257965-087be799b084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=666&q=80',
        },
        {
          thumbnail_url: 'https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1519241978701-4302ab53de1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        522106: {
          quantity: 8,
          size: 'XS',
        },
        522107: {
          quantity: 16,
          size: 'S',
        },
        522108: {
          quantity: 17,
          size: 'M',
        },
        522109: {
          quantity: 10,
          size: 'L',
        },
        522110: {
          quantity: 15,
          size: 'XL',
        },
        522111: {
          quantity: 6,
          size: 'XXL',
        },
      },
    },
  ],
};

module.exports.relatedProductsById = [
  17071,
  17075,
  17073,
  17068,
  17067,
];

module.exports.reviewList = {
  product: '17069',
  page: 0,
  count: 5,
  results: [
    {
      review_id: 288617,
      rating: 5,
      summary: 'Haters will hate',
      recommend: true,
      response: null,
      body: 'THe others are haters. Theses are great           ',
      date: '2021-03-10T00:00:00.000Z',
      reviewer_name: 'Lames',
      helpfulneßss: 2,
      photos: [],
    },
    {
      review_id: 289097,
      rating: 5,
      summary: 'Testing out Cloudinary',
      recommend: true,
      response: null,
      body: 'Is there a picture of a cat? There should be a picture of a cat...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      date: '2021-03-13T00:00:00.000Z',
      reviewer_name: 'DocMcFries',
      helpfulness: 1,
      photos: [
        {
          id: 496791,
          url: 'https://res.cloudinary.com/mcvey/image/upload/v1615677930/xkzemfcpcnizschf9mai.jpg',
        },
      ],
    },
    {
      review_id: 288588,
      rating: 1,
      summary: 'Tight Asl',
      recommend: false,
      response: null,
      body: 'These things were TIGHT!                                    ',
      date: '2021-03-10T00:00:00.000Z',
      reviewer_name: 'Jenkins',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 288563,
      rating: 1,
      summary: 'Horrible!',
      recommend: false,
      response: null,
      body: "It wouldn't fit on a beach ball!",
      date: '2021-03-09T00:00:00.000Z',
      reviewer_name: 'sallytherally',
      helpfulness: 0,
      photos: [],
    },
    {
      review_id: 3,
      rating: 4,
      summary: 'I am liking these glasses',
      recommend: false,
      response: "Glad you're enjoying the product!",
      body: "They are very dark. But that's good because I'm in very sunny spots",
      date: '2019-06-23T00:00:00.000Z',
      reviewer_name: 'bigbrotherbenjamin',
      helpfulness: 5,
      photos: [],
    },
  ],
};

module.exports.reviewMetaData = {
  product_id: '17069',
  ratings: {
    1: '3',
    2: '1',
    5: '2',
  },
  recommended: {
    false: '4',
    true: '2',
  },
  characteristics: {
    Fit: {
      id: 57227,
      value: '2.5000000000000000',
    },
    Length: {
      id: 57228,
      value: '2.1666666666666667',
    },
    Comfort: {
      id: 57229,
      value: '2.3333333333333333',
    },
    Quality: {
      id: 57230,
      value: '2.3333333333333333',
    },
    Width: {
      id: 57231,
      value: '1.3333333333333333',
    },
  },
};

module.exports.questionList = {
  product_id: '17069',
  results: [
    {
      question_id: 104619,
      question_body: 'Where does this product ship from?',
      question_date: '2017-11-04T00:00:00.000Z',
      asker_name: 'toofast',
      question_helpfulness: 18,
      reported: false,
      answers: {
        992154: {
          id: 992154,
          body: 'Mine was delivered from Oklahoma',
          date: '2017-11-04T00:00:00.000Z',
          answerer_name: 'toofast',
          helpfulness: 14,
          photos: [],
        },
        992165: {
          id: 992165,
          body: 'It ships from the facility in Tulsa',
          date: '2017-11-04T00:00:00.000Z',
          answerer_name: 'toofast',
          helpfulness: 20,
          photos: [],
        },
      },
    },
    {
      question_id: 104617,
      question_body: 'Is this product sustainable?',
      question_date: '2018-09-04T00:00:00.000Z',
      asker_name: 'cleopatra',
      question_helpfulness: 14,
      reported: false,
      answers: {
        992117: {
          id: 992117,
          body: 'Its made from sustainable parts and manufactured in a green facility',
          date: '2018-10-04T00:00:00.000Z',
          answerer_name: 'marcanthony',
          helpfulness: 18,
          photos: [],
        },
      },
    },
    {
      question_id: 104620,
      question_body: 'Where is this product made?',
      question_date: '2018-08-12T00:00:00.000Z',
      asker_name: 'thegrimreaker',
      question_helpfulness: 9,
      reported: false,
      answers: {
        992166: {
          id: 992166,
          body: 'Taiwan',
          date: '2018-09-12T00:00:00.000Z',
          answerer_name: 'thegrimreaker',
          helpfulness: 2,
          photos: [],
        },
      },
    },
    {
      question_id: 104612,
      question_body: 'Does this product run big or small?',
      question_date: '2018-11-12T00:00:00.000Z',
      asker_name: 'coolkid',
      question_helpfulness: 8,
      reported: false,
      answers: {
        992110: {
          id: 992110,
          body: "Runs small, I'd say",
          date: '2018-01-12T00:00:00.000Z',
          answerer_name: 'warmkid',
          helpfulness: 9,
          photos: [],
        },
        1444139: {
          id: 1444139,
          body: 'Well I say it runs big!',
          date: '2021-03-12T00:00:00.000Z',
          answerer_name: 'smalls',
          helpfulness: 0,
          photos: [],
        },
        1444248: {
          id: 1444248,
          body: "I haven't used it yet, but it seems alright.",
          date: '2021-03-13T00:00:00.000Z',
          answerer_name: 'justInCase',
          helpfulness: 1,
          photos: [],
        },
      },
    },
    {
      question_id: 104618,
      question_body: 'What fabric is the bottom made of?',
      question_date: '2018-02-18T00:00:00.000Z',
      asker_name: 'iluvcatz',
      question_helpfulness: 6,
      reported: false,
      answers: {
        992095: {
          id: 992095,
          body: 'Some kind of recycled rubber, works great!',
          date: '2018-03-18T00:00:00.000Z',
          answerer_name: 'iluvdogz',
          helpfulness: 3,
          photos: [],
        },
        992118: {
          id: 992118,
          body: 'Rubber',
          date: '2018-03-18T00:00:00.000Z',
          answerer_name: 'iluvdogz',
          helpfulness: 8,
          photos: [
            'https://images.unsplash.com/photo-1477823986828-5aff156284aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
          ],
        },
        992121: {
          id: 992121,
          body: 'Its a rubber sole',
          date: '2018-03-18T00:00:00.000Z',
          answerer_name: 'iluvbirds',
          helpfulness: 2,
          photos: [
            'https://images.unsplash.com/photo-1528318269466-69d920af5dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
          ],
        },
        992148: {
          id: 992148,
          body: 'The rubber on the bottom wears thin quickly',
          date: '2018-02-18T00:00:00.000Z',
          answerer_name: 'iluvdogz',
          helpfulness: 46,
          photos: [],
        },
        1444193: {
          id: 1444193,
          body: '10/10 would recomend.',
          date: '2021-03-12T00:00:00.000Z',
          answerer_name: 'namnam',
          helpfulness: 2,
          photos: [],
        },
        1444194: {
          id: 1444194,
          body: "I haven't used it yet, but it seems alright.",
          date: '2021-03-12T00:00:00.000Z',
          answerer_name: 'justInCase',
          helpfulness: 1,
          photos: [],
        },
      },
    },
  ],
};

module.exports.answerList = {
  question: '104619',
  page: 1,
  count: 5,
  results: [
    {
      answer_id: 992165,
      body: 'It ships from the facility in Tulsa',
      date: '2017-11-04T00:00:00.000Z',
      answerer_name: 'toofast',
      helpfulness: 20,
      photos: [],
    },
    {
      answer_id: 992154,
      body: 'Mine was delivered from Oklahoma',
      date: '2017-11-04T00:00:00.000Z',
      answerer_name: 'toofast',
      helpfulness: 14,
      photos: [],
    },
  ],
};
