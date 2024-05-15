export default class product {
  constructor(
    public id: string,
    public name: string,
    public category: string[],
    public price: number,
    public originPrice: number,
    public image: string[],
    public rating: number
  ) {}
}