import { Injectable } from '@angular/core';
import { IMensagem } from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService implements IMensagem {
  info(mensagem: string): void {
    console.log('Info:', mensagem);
  }

  sucesso(mensagem: string): void {
    console.log('Sucesso:', mensagem);
  }

  erro(mensagem: string): void {
    console.log('Erro:', mensagem);
  }

  alerta(mensagem: string): void {
    console.log('Alerta:', mensagem);
  }
}