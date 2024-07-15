import { pieceMetadataService } from './app/pieces/piece-metadata-service'
import { logger } from '@activepieces/server-shared'

const main = async (): Promise<void> => {

    // const pieces = await pieceMetadataService.list({
    //     release: '0.28.0',
    //     includeHidden: true,
    //     edition: ApEdition.COMMUNITY,
    // })

    // // console.log('pieces', pieces)


    // const slackPieceVersion = await pieceMetadataService.getVersions({
    //     name: '@activepieces/piece-slack',
    //     edition: ApEdition.COMMUNITY,
    //     projectId: undefined,
    //     platformId: undefined,
    //     release: undefined,
    // })

    // console.log('singlePiece', slackPieceVersion)

    const slackPiece = await pieceMetadataService.getOrThrow({
        name: '@activepieces/piece-slack',
        version: undefined,
        projectId: undefined,
    })


    console.log('slackPiece', slackPiece.actions['send_direct_message'])

    const sendDirectAction = slackPiece.actions['send_direct_message']

    // await sendDirectAction.run()



    // setupTimeZone()
    // await databaseConnection.initialize()
    // await databaseConnection.runMigrations()
    // await seedDevData()
    // const app = await setupApp()
    // process.on('SIGINT', () => {
    //     stop(app).catch((e) => logger.error(e, '[Main#stop]'))
    // })

    // process.on('SIGTERM', () => {
    //     stop(app).catch((e) => logger.error(e, '[Main#stop]'))
    // })

    // await start(app)
}

main().catch((e) => {
    logger.error(e, '[Main#main]')
    process.exit(1)
})
