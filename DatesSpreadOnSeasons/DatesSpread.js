function parseScheduledDate(date) {
    let options = {
        month: "2-digit",
        day: "2-digit",
    }

    return date.toLocaleDateString('ru', options)
}

function spreadVacationOnSeasons(beginDate, endDate) {
    let spreadedDates = {}
    let seasons = ["winter", "spring", "summer", "autumn"]

    let beginSeason = getSeasonByDate(beginDate)
    let endSeason = getSeasonByDate(endDate)

//    if (beginSeason <= endSeason) {
    for (let i = beginSeason; i <= endSeason; i++) {
        let seasonBorders = getSeasonBorders(seasons[i], endDate.getFullYear())
        let beginSeasonDate = beginDate > seasonBorders.beginDate
            ? beginDate
            : seasonBorders.beginDate
        let endSeasonDate = endDate < seasonBorders.endDate
            ? endDate
            : seasonBorders.endDate
        spreadedDates[seasons[i]] = parseScheduledDate(beginSeasonDate) + " - " + parseScheduledDate(endSeasonDate)
    }
//    }

    return spreadedDates
}

function getSeasonByDate(date) {
    let month = date.getMonth()
    return month === 11 ? 0 : Math.floor((month+1)/3)
}

function getSeasonBorders(season, year){
    let seasonBorders = {}

    switch(season) {
        case "winter": {
            seasonBorders.beginDate = new Date(year, -1)
            seasonBorders.endDate = new Date(year, 2, 0)
            break
        }
        case "spring": {
            seasonBorders.beginDate = new Date(year, 2)
            seasonBorders.endDate = new Date(year, 5, 0)
            break
        }
        case "summer": {
            seasonBorders.beginDate = new Date(year, 5)
            seasonBorders.endDate = new Date(year, 8, 0)
            break
        }
        case "autumn": {
            seasonBorders.beginDate = new Date(year, 8)
            seasonBorders.endDate = new Date(year, 11, 0)
            break
        }
    }

    return seasonBorders
}

const vacations = [
    [new Date(2022, 11, 30), new Date(2023, 2, 5)],
    [new Date(2023, 4, 4), new Date(2023, 8, 10)],
]
console.log(vacations.map((dates) => spreadVacationOnSeasons(dates[0], dates[1])))