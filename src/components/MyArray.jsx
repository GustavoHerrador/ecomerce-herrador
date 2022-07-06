export default function MyArray() {
  const arrayProd = ["hola", "pablo"];
  const newMap = arrayProd.map((item) => {
    return item.toUpperCase();
  });
  console.log(newMap);
}
