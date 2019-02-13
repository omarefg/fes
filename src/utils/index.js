import * as request from './request'
import * as general from './general'

class Utils {
    getFriendsData () { return request.getFriendsData() }
    getEpisodeData (season, episode) { return request.getEpisodeData(season, episode) }
    getRandomInt (max) { return general.getRandomInt(max) }
}

export default new Utils()
