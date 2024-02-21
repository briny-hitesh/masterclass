export class Course {
    id!: number;
    courseName!: string;
    author!: string;
    actualPrice!: number;
    discountPercentage!: number;
    currency!: string;
    tags!: Array<string>;

    constructor(properties: Partial<Course> = {}) {
        Object.assign(this, properties);
    }

    get getEffectivePrice(): number {
        return this.actualPrice - (this.actualPrice * this.discountPercentage / 100);
    }
}