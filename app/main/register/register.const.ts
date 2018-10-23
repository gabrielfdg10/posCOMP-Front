export const REGISTER_FIELDS = [
  {
    label: 'Nome de usuário*',
    key: 'username',
    type: 'input',
    inputType: 'text'
  },
  {
    label: 'E-mail*',
    key: 'email',
    type: 'input',
    inputType: 'email'
  },
  {
    label: 'Senha*',
    key: 'pw1',
    type: 'input',
    inputType: 'password'
  },
  {
    label: 'Repita sua senha*',
    key: 'pw2',
    type: 'input',
    inputType: 'password'
  },
  {
    label: 'Nome completo*',
    key: 'real_name',
    type: 'input',
    inputType: 'text'
  },
  {
    label: 'Instituição de ensino*',
    key: 'institution',
    type: 'select',
    options: [
      'UFU - Universidade Federal de Uberlândia',
      'FUCAMP - Fundação Carmelitana Mário Palmério',

    ]
  }
]
