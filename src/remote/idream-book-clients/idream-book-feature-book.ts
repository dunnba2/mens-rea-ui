import { iDreamBookClient } from '.'

export const iDreamLoadFeaturedBook = async () => {
    let response = await iDreamBookClient.get('/recent_recos.json?key=885dc477b452ec9fa82c56a7a0b748e26b664052&slug=mystery-thriller-suspense')
    console.log(response);
    return response   
}