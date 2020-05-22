import Product from "../model/product.ts";

export default (): Product[] => {
    return [{
        id: 1,
        name: 'test'
    }, {
        id: 2,
        name: 'test 2'
    }];
}