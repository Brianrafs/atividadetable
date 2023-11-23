// usuario.model.ts
export class Usuario {
  constructor(
    public nome = '',
    public idade?: number,
    public cpf: string = '',
    public telefone: string = '', // Adição do atributo telefone
    public id?: number
  ) {}
}
