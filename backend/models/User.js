const Sequelize = require("sequelize");
const uuid = require("uuid");
const connectDB = require("../config/db");

// Entender a criação de token e validação no frontend , com um projeto nextjs ou react, ver qual é o melhor com nodejs
// na parada la do umapp em vez de verificar se o usuario existe quando for deletado, deletar ele de vez , pra não precisar verificar se existe na hora de criar uma nova conta... depois ver com o raul se é uma abordagem boa
const User = connectDB.define("users", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Campo obrigatório.",
      },
      len: {
        args: [3, 50],
        msg: "O nome deve ter entre 3 e 50 caracteres",
      },
    },
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Campo obrigatório.",
      },
      isEmail: {
        msg: 'O email precisa ser um endereço de email válido',
      },
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Campo obrigatório.",
      },
    }
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
  },
  updatedAt: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("NOW()"),
  },
});

// ...

module.exports = User;
