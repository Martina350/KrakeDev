export const getAllPostsService=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}

export const createPostService = (post, fnExito) => {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        title: post.title,
        body: post.body,
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    fetch('https://jsonplaceholder.typicode.com/posts', config)
      .then((response) => response.json())
      .then((json) => {console.log(json); fnExito();});
  };

  export const updatePostService = () => {
    const config = {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: 'mensaje final',
        body: 'hasta la vista baby',
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    fetch('https://jsonplaceholder.typicode.com/posts/1', config)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  export const getPostsByUserIdService = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  export const getJokeService = () => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then((response) => response.json())
      .then((json) => console.log('Chiste:', json.value));
  };

  export const createProductService = () => {
    const config = {
      method: 'POST',
      body: JSON.stringify({
        title: 'Nuevo Producto',
        price: 29.99,
        description: 'Este es un producto de prueba',
        image: 'https://example.com/product.jpg',
        category: 'electronicos',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    fetch('https://fakestoreapi.com/products', config)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  export const updateProductService = () => {
    const config = {
      method: 'PUT',
      body: JSON.stringify({
        title: 'Producto Actualizado',
        price: 49.99,
        description: 'Este es un producto actualizado',
        image: 'https://example.com/updated-product.jpg',
        category: 'home',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    fetch('https://fakestoreapi.com/products/1', config)
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

export const getDocumentTypes=()=>{
    fetch('http://192.168.100.14:8080/inventarios-1.0.0/rest/tiposdocumento/recuperar')
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}

export const createDocumentTypes = (post, fnExito) => {
  const config = {
    method: 'POST',
    body: JSON.stringify({
      codigo: post.title,
      descripcion: post.body,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('http://192.168.100.14:8080/inventarios-1.0.0/rest/tiposdocumento/crear', config)
    .then((response) => response.json())
    .then((json) => {console.log(json); fnExito();});
};





