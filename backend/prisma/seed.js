const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const email = 'sportechltda@gmail.com';
  // A senha informada por você, que será criptografada antes de salvar
  const rawPassword = '01sport02'; 
  
  const hashedPassword = await bcrypt.hash(rawPassword, 10);

  const admin = await prisma.admin.upsert({
    where: { email: email },
    update: {},
    create: {
      email: email,
      password: hashedPassword,
    },
  });

  console.log('Administrador criado com sucesso:', admin.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
