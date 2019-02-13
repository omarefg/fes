import { API_ROUTE, API_KEY } from '../lib/constants'

export const getFriendsData = async () => {
    try {
        let res = await fetch(`${API_ROUTE}${API_KEY}`)
        res = await res.json()
        return res
    } catch (err) {
        throw err
    }
}

export const getEpisodeData = async (season, episode) => {
    try {
        let res = await fetch(`${API_ROUTE}/season/${season}/episode/${episode}${API_KEY}`)
        res = await res.json()
        return res
    } catch (err) {
        throw err
    }
}
