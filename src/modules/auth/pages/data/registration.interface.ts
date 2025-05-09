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
