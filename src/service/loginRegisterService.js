import db from '../models/models';
import bcrypt, { hash } from 'bcryptjs';
import { Op } from 'sequelize';
const salt = bcrypt.genSaltSync(10);
const HashUserPassword = (password) => {
  const HashPassword = bcrypt.hashSync(password, salt);
  const checkPass = bcrypt.compareSync(password, HashPassword);
  console.log('hash pass', HashPassword);
  console.log('check pass', checkPass);
  return HashPassword;
};
const CheckEmailExist = async (userEmail) => {
  let isExist = await db.User.findOne({
    where: { email: userEmail },
  });
  if (isExist) {
    return true;
  }
  return false;
};
const CheckPhoneExist = async (userPhone) => {
  let isExist = await db.User.findOne({
    where: { phone: userPhone },
  });
  if (isExist) {
    return true;
  }
  return false;
};
const registerNewUser = async (rawUserData) => {
  //check email/phoneNumber are exist
  try {
    let isEmailExist = await CheckEmailExist(rawUserData.email);

    if (isEmailExist == true) {
      return {
        EM: 'The email is already exist',
        EC: 1,
      };
    }
    let isPhoneExist = await CheckPhoneExist(rawUserData.phone);
    if (isPhoneExist == true) {
      return {
        EM: 'The phone number is already exist',
        EC: 1,
      };
    }

    //hash user password
    let HashPassword = await HashUserPassword(rawUserData.password);
    //create a new user
    await db.User.create({
      email: rawUserData.email,
      password: HashPassword,
      username: rawUserData.username,
      phone: rawUserData.phone,
    });
    return {
      EM: 'A User is created successfully!!',
      EC: 0,
    };
  } catch (e) {
    console.log('OoO Lỗi =>>', e);
    return {
      EM: 'Something wrongs is service...',
      EC: -2,
    };
  }
};

const checkPassword = async (inputPassword, hashPassword) => {
  console.log('check pass', bcrypt.compareSync(inputPassword, hashPassword));
  return bcrypt.compareSync(inputPassword, hashPassword); //true or false
};
const handleUserLogin = async (rawUserData) => {
  try {
    //Xử lý

    let user = await db.User.findOne({
      where: {
        [Op.or]: [
          { email: rawUserData.valueLogin },
          { phone: rawUserData.valueLogin },
        ],
      },
    });
    // SELECT * FROM user WHERE email = 12 or phone = 'active';
    console.log('Check user javascript =>>', user.get({ plain: true }));
    if (user) {
      let isCorrectPassword = await checkPassword(
        rawUserData.password,
        user.password
      );
      if (isCorrectPassword == true) {
        console.log('Tuyệt vô được rồi! ');
        return {
          EM: 'Tuyệt vô được rồi! ',
          EC: 0,
          DT: '',
        };
      }
    }

    console.log(
      'OoO Lỗi =>>',
      rawUserData.valueLogin,
      'password =>>',
      rawUserData.password
    );
    return {
      EM: 'Your email/phone number or password is incorrect! ',
      EC: 1,
      DT: '',
    };
  } catch (error) {
    //Check error
    return {
      EM: 'Something wrongs is service...',
      EC: -2,
      DT: '',
    };
  }
};
module.exports = {
  registerNewUser,
  handleUserLogin,
};
