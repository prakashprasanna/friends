import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';

import {theme} from '../constants';
import {ProductType} from '../types';
import {useAppSelector} from '../hooks';

// export const addedToCartMessage = (item: ProductType) => {
//   showMessage({
//     message: `${item.name} added to cart`,
//     type: 'success',
//     icon: 'success',
//   });
// };

export const homeIndicatorHeight = () => {
  const insets = useSafeAreaInsets();
  const {bottom} = insets;
  return bottom;
};

export const statusBarHeight = () => {
  const insets = useSafeAreaInsets();
  const {top} = insets;
  return top;
};

// export const quantityInCart = (item: ProductType) => {
//   const cart = useSelector((state: {cart: {list: ProductType[]}}) => {
//     return state.cart.list;
//   });
//   const ifItemInCart = cart.find((el) => el.id === item.id);
//   const quantity = ifItemInCart ? ifItemInCart.quantity : 0;
//   return quantity;
// };

export const itemExistsInCart = (item: ProductType) => {
  const cart = useAppSelector((state) => state.cartSlice.list);
  const ifItemInCart = cart.find((el) => el.id === item.id);
  return ifItemInCart;
};

// export const itemExistsInCartMessage = (
//   item: ProductType,
//   dispatch: AppDispatch,
// ) => {
//   const cart = useSelector((state: {wishlist: {list: ProductType[]}}) => {
//     return state.wishlist.list;
//   });
//   const ifItemInCart = cart.find((el) => el.id === item.id);
//   if (ifItemInCart) {
//     Alert.alert(
//       'Item already in cart',
//       'Do you want to add another one?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             dispatch(fullRemoveFromCart(item));
//             dispatch(
//               addToCart({
//                 ...item,
//                 color: selectedColor,
//                 size: selectedSize,
//               }),
//             );
//             addedToCartMessage(item);
//           },
//         },
//       ],
//       {cancelable: false},
//     );
//     return;
//   }
// };

export const getAllColors = (products: ProductType[]): Array<String> => {
  const colors = products?.map((e: any) => {
    return e.colors;
  });
  const allColors = colors?.flat();
  const uniqueColors = [...new Set(allColors)];
  return uniqueColors;
};

export const getAllSizes = (products: ProductType[]): Array<String> => {
  const sizes = products?.map((e: any) => {
    return e.sizes;
  });
  const allSizes = sizes?.flat();
  const uniqueSizes = [...new Set(allSizes)];
  return uniqueSizes;
};

// export const getProductsByColor = () => {
//   const products = useSelector((state: {products: {list: ProductType[]}}) => {
//     return state.products.list;
//   });
//   const color = useSelector((state: {products: {color: string}}) => {
//     return state.products.color;
//   });
//   const filteredProducts = products.filter((e) => e.colors.includes(color));
//   return filteredProducts;
// };

// export const getProductsBySize = () => {
//   const products = useSelector((state: {products: {list: ProductType[]}}) => {
//     return state.products.list;
//   });
//   const size = useSelector((state: {products: {size: string}}) => {
//     return state.products.size;
//   });
//   const filteredProducts = products.filter((e) => e.sizes.includes(size));
//   return filteredProducts;
// };

export const getAllTags = (products: ProductType[]): Array<String> => {
  const tags = products?.map((e: any) => {
    return e.tags;
  });
  const allTags = tags?.flat();
  const uniqueTags = [...new Set(allTags)];
  return uniqueTags;
};

// const productCard = (ProductCard: any) => {
//   const Wrapper = () => {
//     const products = useSelector((state: {products: {list: ProductType[]}}) => {
//       return state.products.list;
//     });
//     const color = useSelector((state: {products: {color: string}}) => {
//       return state.products.color;
//     });
//     const size = useSelector((state: {products: {size: string}}) => {
//       return state.products.size;
//     });
//     const filteredProducts = products.filter(
//       (e) => e.colors.includes(color) && e.sizes.includes(size),
//     );
//     return <ProductCard products={filteredProducts} />;
//   };

//   return Wrapper;
// };

export const updateIndex: any = (e: any, setIndex: any) => {
  const offset = e.nativeEvent.contentOffset.x;
  const index = Math.round(offset / theme.sizes.width);
  setIndex(index);
};

export const quantityInCart = (item: ProductType) => {
  const cart = useAppSelector((state) => state.cartSlice.list);
  const ifItemInCart = cart.find((el) => el.id === item.id);
  const quantity = ifItemInCart ? ifItemInCart.quantity : 0;
  return quantity;
};
