export const images = [
    {
      id: '01',
      src: 'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '02',
      src: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '03',
      src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '04',
      src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '05',
      src: 'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
      alt: 'Awesome watch',
    },
    {
      id: '06',
      src: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
      alt: 'Awesome watch',
    },
  ]
  
  export const products = [
    {
      id: '1',
      name: 'Small Arrangement',
      currency: 'USD',
      price: 100,
      flag: 'new',
      imageUrl:
        '/images/Picture1.png?w=164&h=164&fit=crop&auto=format',

      images,
      link: 'https://buy.stripe.com/test_eVa8wS7IReOX8sEbII'

    },
    {
      id: '2',
      name: 'Medium Arrangement',
      currency: 'USD',
      price: 200,
      // salePrice: 179.99,
      // flag: 'on-sale',
      imageUrl:
      "/images/Picture6.png?w=164&h=164&fit=crop&auto=format",
    
      images,
      link: 'https://buy.stripe.com/test_00gcN85AJ8qzgZa001'

    },
    {
      id: '3',
      name: 'Large Arrangement',
      currency: 'USD',
      price: 300,
      imageUrl:
        '/images/Picture7.png?w=164&h=164&fit=crop&auto=format',

      images,
      link: 'https://buy.stripe.com/test_6oEfZkbZ79uD10caEG'
    },
    {
      id: '4',
      name: 'Hand Tied Bouguet',
      currency: 'USD',
      price: 150,
      imageUrl:
        '/images/Picture1.png?w=164&h=164&fit=crop&auto=format',

      images,
      link: 'https://buy.stripe.com/test_5kA7sO0gp22b8sEbIL'

    },
   
  ]
  
  export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never
  
  export type Product = ElementType<typeof products>
  export type ProductImage = ElementType<typeof images>