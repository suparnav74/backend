import mysql from "mysql2/promise";
import {Sequelize} from "sequelize";

// const connectToMysql = () => {
//   try {
//     // const connection = mysql.createConnection({
//     //     host : 'localhost',
//     //     user : 'root',
//     //     password : 'suparna',
//     //     database : 'productdetails'
//     // });

//     // (await connection).connect();
//     const sequelize = new Sequelize({
//       dialect: "mysql",
//       host: "localhost",
//       username: "root",
//       password: "suparna",
//       database: "productdetails",
//     });

//     sequelize.authenticate()
//       .then(() => {
//         console.log("Connection has been established successfully.");
//       })
//       .catch((error : any) => {
//         console.error("Unable to connect to the database:", error);
//       });

//   } catch (error) {
//     console.error("Database Connection failed");
//   }
// };

// export default connectToMysql;

const sequelize = new Sequelize({
          dialect: "mysql",
          host: "localhost",
          username: "root",
          password: "suparna",
          database: "productdetails",
        });
        sequelize.authenticate()
      .then(() => {
        console.log("Connection has been established successfully.");
      })
      .catch((error : any) => {
        console.error("Unable to connect to the database:", error);
      });
export default sequelize;