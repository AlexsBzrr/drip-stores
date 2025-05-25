export interface IRegistration {
  nome: string;
  password: string;
  cpf?: string;
  email: string;
  celular?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  cep?: string;
  complemento?: string;
  aceitaOfertas?: boolean;
}

export interface INewRegistration {
  nome: string;
  email: string;
  cpf: string;
  telefone: string;
  endereco: string;
  bairro: string;
  cidade: string;
  cep: string;
  complemento: string;
  password: string;
  aceitaOfertas?: boolean;
}

export interface ICreateAccount {
  email: string;
}
