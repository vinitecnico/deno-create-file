import { writeFileStrSync } from "https://deno.land/std/fs/mod.ts"
import ProductData from './data/ProducData.ts';

const products = ProductData();
const data = products.map(x => `${x.id} - ${x.name}`).join("\n")


writeFileStrSync("./product.txt", data)