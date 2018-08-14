import Axios from 'axios'

/**
 * Predator 1 achievement is id 2534
 */

const BASE_URL = 'https://api.guildwars2.com/v2/'

const ACHIEVEMENTS = {
  PREDATOR1: 2534
}

export default {
  ACHIEVEMENTS,

  getAchievement (achievement) {
    let url = `${BASE_URL}achievements/${achievement}`
    return Axios.get(url)
    .then((response) => {
      let bitRequests = response.data.bits.map((bit) => {
        return Axios.get(`${BASE_URL}items/${bit.id}`)
      })

      return Promise.all(bitRequests)
      .then((bitResponses) => {
        let bits = bitResponses.map((bit) => {
          return bit.data
        })
        return bits
      })
    })
  },

  getPersonalAchievement (achievement, apikey) {
    let url = `${BASE_URL}account/achievements?access_token=${apikey}`
    return Axios.get(url)
    .then((response) => {
      let found = response.data.filter((item) => {
        if (item.id === achievement) {
          return item
        }
      })

      return found[0]
    })
  }
}
