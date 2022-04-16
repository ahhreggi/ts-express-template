import { db } from "../database";

export const sampleService = {
  findAll: async (): Promise<any[]> => {
    return await db.findAll();
  },

  findById: async (id: string): Promise<any> => {
    return await db.findById(id);
  },

  create: async (name: string, description: string): Promise<any> => {
    return await db.create(name, description);
  },
};
