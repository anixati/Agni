import { Role,Roles } from '../models/role';

const roles: Roles = {
    1:{
        id:1,
        name:"admin",
        description:"Administrator"
    },
    2:{
        id:2,
        name:"contributer",
        description:"Contributer"
    },
}

//service methods
export const findAll = async (): Promise<Roles> => {
    return roles;
};
  
export const find = async (id: number): Promise<Role> => {
    const record: Role = roles[id];
    if (record) {
      return record;
    }
    throw new Error(`No role found for ${id}`);
  };