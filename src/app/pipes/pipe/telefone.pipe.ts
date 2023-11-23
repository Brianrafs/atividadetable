import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    value = value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length === 8) {
      return `${value.substring(0, 4)}-${value.substring(4)}`;
    } else if (value.length === 10 || (value.length === 11 && value.startsWith('0'))) {
      const ddd = value.length === 11 ? value.substring(1, 3) : value.substring(0, 2);
      const numero = value.length === 11 ? value.substring(3) : value.substring(2);
      return `(${ddd}) ${numero.substring(0, 4)}-${numero.substring(4)}`;
    } else {
      return value; // Retorna o mesmo valor se não atender aos critérios
    }
  }
}
