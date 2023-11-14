import { isValidCpf } from "../utils/utils";

export interface User {
  name: string;
  cpf: string;
}

export interface UserResponse {
  name?: string;
  cpf?: string;
  message?: string
}

class Service {
  async find() {
    return "Hello World";
  }
  async create(user: User): Promise<UserResponse> {
    const { name, cpf } = user;

    if (!name) {
      return {
        message: "O campo nome está inválido.",
      };
    }

    if (!cpf) {
      return {
        message: "O Campo cpf está inválido.",
      };
    }

    if (!isValidCpf(cpf)) {
      return {
        message: `O cpf ${cpf} está válido!`,
      };
    }

    return user;
  }
}

export const service = new Service();
