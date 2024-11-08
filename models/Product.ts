import db from "../db";
import { DataTypes,DecimalDataType,Model, NumberDataType, TextDataType } from 'sequelize';
import sequelize from "../db";


// Define the Product model
class Product extends Model {
  public id!: number;
  public name!: string;
  public description!: TextDataType;
  public price!: DecimalDataType;
  public quantity!: NumberDataType;
}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'product', // the table name
    modelName: 'Product',
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
  );

export default Product;
