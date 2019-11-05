const express = require('express')
const app = express()
const port = 3000
let gallery =[
  {url :  'https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-260nw-668593321.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/autumn-forest-nature-vivid-morning-260nw-766886038.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-landscape-mountain-layer-morning-260nw-753385105.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-floral-spring-abstract-background-260nw-1009843408.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/macro-leaves-background-texture-blue-260nw-728448754.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/wave-boat-on-beach-background-260nw-1074395291.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-pink-flower-anemones-fresh-260nw-1028135845.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/creative-layout-made-flowers-leaves-260nw-547784302.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/closeup-nature-view-green-leaf-260nw-387062149.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/creative-layout-made-flowers-leaves-260nw-602719514.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-nature-sunset-landscape-ears-260nw-493536823.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/abstract-ocean-art-natural-luxury-260nw-1040400583.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/abstract-nature-pebbles-background-blue-260nw-428477185.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/abstract-blur-green-color-backgroundblurred-260nw-749692990.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/agave-cactus-abstract-natural-pattern-260nw-1056037874.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/creative-layout-made-green-leaves-260nw-602721920.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/spring-forest-white-flowers-primroses-260nw-777642277.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/abstract-background-route-journey-amidst-260nw-389344402.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/spring-background-green-tree-leaves-260nw-1009750807.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/closeup-dandelion-on-natural-background-260nw-282705149.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/nature-background-table-wood-product-260nw-285662423.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/high-mountain-morning-time-beautiful-260nw-1384588922.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/kuang-si-waterfall-beauty-nature-260nw-792172873.jpg'},
  {url :  'https://image.shutterstock.com/image-vector/set-web-page-design-templates-260nw-1150708049.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-577160911.jpg'},
  {url :  'https://image.shutterstock.com/image-vector/nature-cute-vector-illustration-landscape-260nw-1377169688.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/white-transparent-leaf-on-mirror-260nw-1029171697.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/nature-background-concept-beautiful-summer-260nw-644007703.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/peaceful-autumn-scene-vorderer-gosausee-260nw-746944825.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/tropical-banana-leaf-texture-large-260nw-749875291.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-night-sky-milky-way-260nw-535318603.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/creative-layout-made-colorful-tropical-260nw-1074927038.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/spring-blossom-background-beautiful-nature-260nw-1033292395.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/red-lotus-water-lily-blooming-260nw-1166657182.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/creative-layout-made-flowers-leaves-260nw-750594220.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/chamomiles-daisies-macro-summer-spring-260nw-1110158195.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/beautiful-pink-flowers-anemones-ladybug-260nw-1020162208.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/into-forest-nature-composition-260nw-292597868.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg'},
  {url :  'https://image.shutterstock.com/image-photo/closeup-nature-view-green-leaf-260nw-1037763571.jpg'}
];
let pageSize = 20;
app.get('/photos/:page/', (req, res) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', '*');
    let page = req.url.split('/')[2]
    let start = (page-1)*pageSize;
    let end = start + pageSize;

    res.send(gallery.slice(start,end));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 