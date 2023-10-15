# Starting

  - para rodar o projeto: npm run dev
  - para rodar o lint: npm run lint:fix

  # Observação:
    - Até aqui o projeto segue com a aplicação do padrão de projeto SINGLETON

    ## OpenAPI Specification:

    https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md

    ## TypeOrm:

    https://typeorm.io/

    ## SqLite:

    https://www.sqlite.org/index.html

    ## Tsyringe:

    https://github.com/microsoft/tsyringe

    ## BecryptJs:

    https://www.npmjs.com/package/bcryptjs

    ## Class-Transformer:

    https://github.com/typestack/class-transformer

    ## Para rodar a migração

    npm run typeorm -- -d ./src/shared/typeorm/index.ts migration:run

    ## Para executar o seed:
    npm run seed:admin
