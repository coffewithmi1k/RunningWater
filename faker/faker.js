import { faker } from '@faker-js/faker';
//const { faker } = require('@faker-js/faker'); old import approach;


const randomName = faker.name.fullName(); // Rowan Nikolaus
const randomEmail = faker.internet.email();

console.log(randomEmail, randomName)