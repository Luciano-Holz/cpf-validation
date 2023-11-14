export function isValidCpf(cpf: string): boolean {
    //definição das variáveis
    let sum = 0;
    let rest: number;
  
    //limpa o paramêtro cpf, removendo tudo que não seja número
    var strCpf = String(cpf).replace(/[^\d]/g, "");
  
    //verifica se o cpf contém apenas 11 digitos numéricos
    if (strCpf.length !== 11) return false;
  
    //verifica se os numeros estão repetidos ou em sequencia, caso estiverem retorna false
    if (
      [
        "00000000000",
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999",
        "01234567890",
        "09876543210",
      ].indexOf(strCpf) !== -1
    )
      return false;
  
      //realiza a validação com o primeiro dígito verificador do Cpf
    let i: number;
      // Extrai um dígito de strCpf e converte para inteiro usando parseInt
      // Multiplica o dígito por (11 - i)
      // Adiciona o resultado à variável sum
    for (i = 1; i <= 9; i++) {
      sum = sum + parseInt(strCpf.substring(i - 1, i)) * (11 - i);
    }
    //calcula o resto da divisão de sum * 10 por 11 e o armazena na variável rest
    rest = (sum * 10) % 11;
  
    //Caso o valor de res seja 10 ou 11, então a variável deve ser zerada
    if (rest === 10 || rest == 11) rest = 0;
  
    //O valor da variável rest deve ser igual ao valor do décimo caractere do CPF, senão retornará false na validação
    if (rest !== parseInt(strCpf.substring(9, 10))) return false;
  
    //realiza a validação com o segundo dígito verificador do Cpf
    sum = 0;
    for (i = 1; i <= 10; i++) {
      // Extrai um dígito de strCpf e converte para inteiro usando parseInt
      // Multiplica o dígito por (12 - i)
      // Adiciona o resultado à variável sum
      sum = sum + parseInt(strCpf.substring(i - 1, i)) * (12 - i);
    }
    //calcula o resto da divisão de sum * 10 por 11 e o armazena na variável rest
    rest = (sum * 10) % 11;
  
    //Novamente, o rest não pode ser nem 10, nem 11. Caso contrário, a variável é zerada de novo:
    if (rest === 10 || rest === 11) rest = 0;
  
    //Agora a variável rest deve ser igual ao décimo primeiro dígito do CPF. Caso contrário a validação retornará false
    if (rest !== parseInt(strCpf.substring(10, 11))) return false;
  
    //caso tenha passado por todas essas validações, retornar true
    return true;
  }
  