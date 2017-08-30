import Axios from 'axios'

/**
 * Predator 1 achievement is id 2534
 */

const ACHIEVEMENTS = {
  PREDATOR1: 2534
}

export default {
  ACHIEVEMENTS,

  getAchievement (achievement) {
    let url = `https://api.guildwars2.com/v2/achievements/{achievement}`
    return Axios.get(url)
  }
}
