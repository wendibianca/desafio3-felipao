class dadosHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const ataqueHeroi = {
            mago: 'usou magia',
            guerreiro: 'usou espada',
            monge: 'usou artes marciais',
            ninja: 'usou shuriken'
        }

        const ataque = ataqueHeroi[this.tipo] || 'fez um ataque padrão';
        console.log(`O ${this.tipo} atacou usando ${ataque.split(" ")[1]}!`);
    }
}

const heroi = new dadosHeroi('Yudi', 3, 'ninja');
const heroi2 = new dadosHeroi('Yumi', 10, 'guerreiro');

heroi.atacar();
heroi2.atacar();