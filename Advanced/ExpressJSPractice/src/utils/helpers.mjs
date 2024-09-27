import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(saltRounds); //generate a salt
    console.log(salt);
    return bcrypt.hashSync(password, salt); //return the hashed the password
};

export const comparePassword = (plain, hashed) => { //will compare the plain text password with the hashed password
    return bcrypt.compareSync(plain, hashed);
};

