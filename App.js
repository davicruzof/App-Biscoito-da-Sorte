import React, {Component} from 'react';
import {StyleSheet, Image, Text, TouchableOpacity, View} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '',
      img: require('./assets/biscoito.png'),
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      'Você terá muita sorte nos próximos dias',
      'Você vai encontrar um amor bem próximo',
      'Sua vida irá sofre momentos difieis no proximos dias',
      'Corra atrás de seus objetivos que vai alcança-los',
      'Acredite esse momento vai passar',
      'Cuidado com suas finanças nos proximos dias',
      'Sua sorte estará mais ativa nos proximos dias',
      'Seu coracão vai bater mais forte pro alguem nos proximos dias',
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({texto: `"${this.frases[numeroAleatorio]}"`});
    this.setState({img: require('./assets/biscoitoAberto.png')});
    setTimeout(() => {
      this.setState({texto: ``});
      this.setState({img: require('./assets/biscoito.png')});
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textofrase}>{this.state.texto}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: 250,
    width: 250,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#dd7b22',
  },
});
