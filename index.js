const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// caminho da pasta
const pasta = path.join(__dirname, 'storage');

// caminho do arquivo
const arquivo = path.join(pasta, 'aula05.txt');

// conteúdo exigido
const conteudo = `Aula 05 - Manipulação de arquivos com Node.js.

Arquivo criado com sucesso durante a atividade final.`;

// função principal
const executar = async () => {
    try {
        console.log(chalk.blue('Iniciando aplicação...'));

        if (!fs.existsSync(pasta)) {
            fs.mkdirSync(pasta);
            console.log(chalk.green('Pasta "storage" criada com sucesso!'));
        } else {
            console.log(chalk.yellow('Pasta "storage" já existe.'));
        }

        fs.writeFileSync(arquivo, conteudo);
        console.log(chalk.green('Arquivo aula05.txt criado com sucesso!'));

        const leitura = fs.readFileSync(arquivo, 'utf-8');

        console.log(chalk.cyan('\nConteúdo do arquivo:'));
        console.log(leitura);

        console.log(chalk.green('\nProcesso finalizado com sucesso!'));

    } catch (erro) {
        console.log(chalk.red('Erro: ' + erro));
    }
};

executar();