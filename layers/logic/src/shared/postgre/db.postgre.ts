import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

export default class DBConnection {
  private static instance: DBConnection;
  private connection: Pool

  private constructor() {
    this.connection = new Pool({
      user: process.env.USER,
      host: process.env.HOST,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      port: parseInt(process.env.PORT || '5432'),
    });
  };

  public static getInstance(): DBConnection {
    if (!this.instance) {
      this.instance = new DBConnection();
    }

    return this.instance;
  }

  public async executeQuery(sql: string): Promise<any> {
    try {
      const result = await this.connection.query(sql);

      return result.rows;
    } catch (error) {
      throw error;
    } finally {
      if (this.connection) {
        try {
          await this.connection.end();
        } catch (error) {
          console.error('Error al cerrar la conexión:', error);
        }
      }
    }
  }
}