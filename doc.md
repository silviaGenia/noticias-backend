### Configurando nestjs

```shell
npm i -g yarn
npm i -g @nestjs/cli

nest new noticias-backend

#Which package manager:
npm
*yarn
pnpm

cd noticias-backend
yarn run start:dev

nest generate module cars --no-spec
nest generate controller cars --no-spec
nest generate service cars --no-spec

yarn add class-validator class-transformer # Update main.ts

npm i typeorm dotenv
npm i @nestjs/typeorm -D

nest g module users --no-spec
nest g controller users --no-spec
nest g service users --no-spec

# Configurar eslit con prettier
yarn add eslint-plugin-prettier eslint-config-prettier -D

# Dependencias para conectarnos a la DB
yarn add class-validator class-transformer
yarn add typeorm dotenv
yarn add @nestjs/typeorm -D
```

#### Scripts yarn

```
yarn global add <package...>
yarn add <package...> # Dependencies
yarn add <package...> [--dev/-D] # devDependencies
yarn add <package...> [--tilde/-T] # <package...>@1.2.3 would accept 1.2.9 but not 1.3.0
yarn remove <package>
```
