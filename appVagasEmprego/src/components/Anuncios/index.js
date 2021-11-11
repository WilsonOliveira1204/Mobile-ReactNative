import React, {Component} from 'react'
import { View, FlatList } from 'react-native'

import Vagas from '../Vagas/index'

export default class Anuncios extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vagas:[
                {
                    id: 1, vaga: 'Desenvolvedor Fullstack', salario: 4500.00,
                    dsVaga: 'Desenvolvimento de apps, Requisitos: conhecimento basico em diversas linguagens. ',
                    contato: '(13) 97869-4753  E-mail: softtop@live.com'
                },
                {
                    id: 2, vaga: 'Estagiário T.I.', salario: 900.00,
                    dsVaga: 'Auxiliar no desevolvimento de software para empresas. Conhecimento básico de programação',
                    contato: 'Tel.: (13) 3566-3526  E-mail: brasilcomeco@gmail.com'
                },
                {
                    id: 3, vaga: 'Desenvolvedor front-end', salario: 3200.90,
                    dsVaga: 'Experiência em Angular. Mais detalhes a tratar',
                    contato: 'Tel.: (84) 98251-8356  E-mail.: frontsbr@gmail.com'
                },
                {
                    id: 4, vaga: 'Desenvolvedor BD SQL', salario: 2400.00,
                    dsVaga: "Criar BDs e fazer manutenção nos atuais em operação",
                    contato: 'Tel.: (21) 99482-1917  E-mail: databsent@live.com'
                },
                
            ]
        }

    }

    render() {
        return (
            <View>
                <FlatList
                data={this.state.vagas}
                vertical={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item})=> <Vagas data={item} />}
                />
            </View>
        )
    }
}