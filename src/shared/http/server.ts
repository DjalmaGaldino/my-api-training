import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { dataSource } from '../typeorm'

// se der ok na ininicialização do banco de dados, chama o app.listen e sobe a aplicação
dataSource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}! :) `)
  })
})


/*
  todo o contexto do express foi migrado para um arquivo chamado app.ts, deixando aqui no server apenas a inicialização do servidor e a inicialização do banco de dados sqlite
*/
