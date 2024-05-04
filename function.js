// Get the sum of all trail miles
//---use Math.ceil to round up to the nearest integer
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total += trail.length
    }

    return Math.ceil(total)
}

// Get the shortest of all trails
const shortestTrail = (trails) => {

    /////call the first trails array obj to be the shortest first///////////
    let shortest = trails[0].length

    for (const trail of trails) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longTrail = (trails) => {
    let longest = trails[0].length
    for (const trail of trails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

//Book1-column 3-Chapter3:Trail Tour Prices
// For the least expensive, only show trails where the number of dollar signs in the price is 1.
// For the most expensive, only show trails where the number of dollar signs in the price is 4, or greater.

// Get the cheapest of all trails--dollar sign=$
const cheapestTrails = (trails) => {
   

    let cheapest=""
    for (const trail of trails) {
        
        if(trail.price === "$") {
            
        // Adding padding and newline character before each trail name----------lb brk: "\n"; padding or tab:"\t"
            //cheapest += `\t${trail.trailName}\n`; 

            //OR:

            cheapest += "\t"+trail.trailName+"\n"; 

            //instead of :
            //cheapest += trail.trailName + "\n"
            //that just splits the lines but no padding infront

        }
    }
    return cheapest
}


// Do the same:most expensive trails--dollar sign>=$$$$
const mostExpensiveTrails = (trails) => {
   

    let mostExpensive=""
    for (const trail of trails) {
        
        if(trail.price >= "$$$$") {
     
            mostExpensive += "\t"+trail.trailName+"\n"; 
    
        }
    }
    return mostExpensive
}

//get trail Details function:
const trailDetails = (trail) => {
    const eachTrailDetail = `${trail.trailName} starts at [${trail.latitude},${trail.longitude}] and is ${trail.length} kilometers long. \nThe highlighted plant for the trip is ${trail.plantHighlight}.\n`
    return eachTrailDetail 
}


// Get the sum of all river miles
//---use Math.ceil to round up to the nearest integer

const totalRiverMiles = (rivers) => {
    let total = 0
    for (const river of rivers) {
        total += river.length
    }

    return Math.ceil(total)
}


// Get the shortest of all rivers
const shortestRiverMiles = (rivers) => {

    /////call the first trails array obj to be the shortest first///////////
    let shortest = rivers[0].length

    for (const river of rivers) {
        if(river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}

// Get the longest of all rivers
const longestRiverMiles = (rivers) => {
    let longest = rivers[0].length
    for (const river of rivers) {
        if(river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

//get river details function:
const riverDetails = (river) => {
    const eachRiverDetail = `${river.river} starts at [${river.latitude},${river.longitude}] and is ${river.length} kilometers long. \nThe unique fish for the trip is ${river.uniqueFish}.\n`
    return eachRiverDetail 
}


module.exports = {
    totalTrailMiles, shortestTrail, longTrail, cheapestTrails, mostExpensiveTrails, trailDetails, totalRiverMiles, shortestRiverMiles, longestRiverMiles, riverDetails
}