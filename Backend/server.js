import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/products',(req,res)=>{
    const product = [ //This is a array of json objects not json string that's why need to convert via stringify then parse to get json object.
      {
        "category": "mens-watches",
        "price": 120,
        "thumbnail": "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/61/1.jpg",
          "https://cdn.dummyjson.com/product-images/61/2.png",
          "https://cdn.dummyjson.com/product-images/61/3.jpg"
        ],
        "title": "Leather Straps Wristwatch",
        "id": 61
      },
      {
        "category": "mens-watches",
        "price": 46,
        "thumbnail": "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/62/1.jpg",
          "https://cdn.dummyjson.com/product-images/62/2.jpg"
        ],
        "title": "Waterproof Leather Brand Watch",
        "id": 62
      },
      {
        "category": "mens-watches",
        "price": 50,
        "thumbnail": "https://cdn.dummyjson.com/product-images/63/thumbnail.webp",
        "images": [
          "https://cdn.dummyjson.com/product-images/63/1.jpg",
          "https://cdn.dummyjson.com/product-images/63/2.jpg",
          "https://cdn.dummyjson.com/product-images/63/3.png",
          "https://cdn.dummyjson.com/product-images/63/4.jpeg"
        ],
        "title": "Royal Blue Premium Watch",
        "id": 63
      },
      {
        "category": "mens-watches",
        "price": 46,
        "thumbnail": "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/64/1.jpg",
          "https://cdn.dummyjson.com/product-images/64/2.webp",
          "https://cdn.dummyjson.com/product-images/64/3.jpg",
          "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg"
        ],
        "title": "Leather Strap Skeleton Watch",
        "id": 64
      },
      {
        "category": "mens-watches",
        "price": 47,
        "thumbnail": "https://cdn.dummyjson.com/product-images/65/thumbnail.webp",
        "images": [
          "https://cdn.dummyjson.com/product-images/65/1.jpg",
          "https://cdn.dummyjson.com/product-images/65/2.webp",
          "https://cdn.dummyjson.com/product-images/65/3.jpg",
          "https://cdn.dummyjson.com/product-images/65/4.webp",
          "https://cdn.dummyjson.com/product-images/65/thumbnail.webp"
        ],
        "title": "Stainless Steel Wrist Watch",
        "id": 65
      },
      {
        "category": "womens-watches",
        "price": 35,
        "thumbnail": "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg",
        "images": [
          "https://cdn.dummyjson.com/product-images/66/1.jpg",
          "https://cdn.dummyjson.com/product-images/66/2.jpg",
          "https://cdn.dummyjson.com/product-images/66/3.jpg",
          "https://cdn.dummyjson.com/product-images/66/4.JPG",
          "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg"
        ],
        "title": "Steel Analog Couple Watches",
        "id": 66
      }
    ]

    const products = [   // Array of JS objects
  {
    category: "mens-watches",
    price: 120,
    thumbnail: "https://cdn.dummyjson.com/product-images/61/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/61/1.jpg",
      "https://cdn.dummyjson.com/product-images/61/2.png",
      "https://cdn.dummyjson.com/product-images/61/3.jpg"
    ],
    title: "Leather Straps Wristwatch",
    id: 61
  },
  {
    category: "mens-watches",
    price: 46,
    thumbnail: "https://cdn.dummyjson.com/product-images/62/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/62/1.jpg",
      "https://cdn.dummyjson.com/product-images/62/2.jpg"
    ],
    title: "Waterproof Leather Brand Watch",
    id: 62
  },
  {
    category: "mens-watches",
    price: 50,
    thumbnail: "https://cdn.dummyjson.com/product-images/63/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/63/1.jpg",
      "https://cdn.dummyjson.com/product-images/63/2.jpg",
      "https://cdn.dummyjson.com/product-images/63/3.png",
      "https://cdn.dummyjson.com/product-images/63/4.jpeg"
    ],
    title: "Royal Blue Premium Watch",
    id: 63
  },
  {
    category: "mens-watches",
    price: 46,
    thumbnail: "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/64/1.jpg",
      "https://cdn.dummyjson.com/product-images/64/2.webp",
      "https://cdn.dummyjson.com/product-images/64/3.jpg",
      "https://cdn.dummyjson.com/product-images/64/thumbnail.jpg"
    ],
    title: "Leather Strap Skeleton Watch",
    id: 64
  },
  {
    category: "mens-watches",
    price: 47,
    thumbnail: "https://cdn.dummyjson.com/product-images/65/thumbnail.webp",
    images: [
      "https://cdn.dummyjson.com/product-images/65/1.jpg",
      "https://cdn.dummyjson.com/product-images/65/2.webp",
      "https://cdn.dummyjson.com/product-images/65/3.jpg",
      "https://cdn.dummyjson.com/product-images/65/4.webp",
      "https://cdn.dummyjson.com/product-images/65/thumbnail.webp"
    ],
    title: "Stainless Steel Wrist Watch",
    id: 65
  },
  {
    category: "womens-watches",
    price: 35,
    thumbnail: "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/66/1.jpg",
      "https://cdn.dummyjson.com/product-images/66/2.jpg",
      "https://cdn.dummyjson.com/product-images/66/3.jpg",
      "https://cdn.dummyjson.com/product-images/66/4.JPG",
      "https://cdn.dummyjson.com/product-images/66/thumbnail.jpg"
    ],
    title: "Steel Analog Couple Watches",
    id: 66
  }
]

// Query params: http://localhost:5000/api/products?search=steel
if(req.query.search){

  // Filtering on basis of title containing search string (case insensitive).s
  const filterProducts = products.filter(product => product.title.toLowerCase().includes(req.query.search));
  console.log(filterProducts)
  res.send(filterProducts);
  return; // to prevent further execution
}

    setTimeout(()=>{

           res.send(products);  // products are array of objects of js. Both JSON and SEND converts the obj to json format. 
           /* Sends any type of data (string, buffer, object, array).
              If you pass an object/array, Express automatically converts it to JSON. */

       //  res.json(products);  // products are array of objects of js. Both JSON and SEND converts the obj to json format. 
           /* Specifically sends a JSON response.
                Sets the Content-Type header to application/json.
                Converts the object/array to JSON before sending. */

       /* For objects/arrays, both behave the same (res.send(obj) and res.json(obj) both send JSON).
          res.json is preferred for API responses because it always sets the correct header. */




       // console.log(product)  // Parsing is done by node js for console as well. It shows as object in console.
        console.log(JSON.parse(JSON.stringify(product[0]))) // JSON is parsed to object again using stringify and parse method. Works same as above.
       // JSON.stringify() converts a JavaScript object or value to a JSON string.
       // JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string.
       
       // const a = JSON.parse(product) // Gives error as product is array of objects not a string.



       const h ='{"name":"sss", "rollno":"123"}'  // JSON String for data exchange btw client and server.
       const obj = JSON.parse(h);  // no need of stringify as h is already a string.
      // console.log(obj)
    },2000)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
