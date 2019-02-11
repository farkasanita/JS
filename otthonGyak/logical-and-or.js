let elsoVendegvegan = false;
let masodikVendegvegan = true;

if (elsoVendegvegan && masodikVendegvegan) {
  console.log('Csak vegán ételt kell felszolgálni');
} else if (elsoVendegvegan || masodikVendegvegan) {
  console.log('Kell legalább egy vegán étel');
} else {
  console.log('Bármit lehet az étlapról felszolgálni');
}