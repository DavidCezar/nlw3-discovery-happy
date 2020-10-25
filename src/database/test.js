const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "98989897898",
        images: [
            "https://images.unsplash.com/photo-1602958169883-016fdb9458dc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9ttps://source.unsplash.com/random?id=1",

            "https://images.unsplash.com/photo-1572248364230-7f412885f2da?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha ver como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 18h às 8h",
        open_on_weekends: "0"
    })

    // consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log (selectedOrphanages)

    // consultar somente um ofornato pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log (orphanage)

    // deletar dado da tabela
    /* console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))
    console.log(await db.run("DELETE FROM orphanages WHERE id = '5'")) */
})

    