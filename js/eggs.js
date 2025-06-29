addLayer("e", {
    name: "egg", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFCEC",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "eggs", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
         if (hasUpgrade('e', 13)) mult = mult.times(upgradeEffect('e', 13))
        if (hasUpgrade('e', 14)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for eggs", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
     upgrades: {
        11: {
           title: "The start of all life",
           description: "Double your point gain.",
           cost: new Decimal(1),

        },
        12: {
           title: "more eggs = more points",
           description: "Eggs boost points ",
           cost: new Decimal(2),
           effect() {
              return player[this.layer].points.add(1).pow(0.5)
           },
           effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13: {
           title: "more points = more egg",
           description: "Points boost Eggs",
           cost: new Decimal(5),
           effect() {
              return player.points.add(1).pow(0.15)
           },
           effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14: {
           title: "Dozen Eggs",
           description: "Double your egg gain.",
           cost: new Decimal(12),

        },
        15: {
           title: "Only 5 Upgrades?!",
           description: "Unlock 1LI",
           cost: new Decimal(48),
        },
    },
})
addLayer("1", {
    name: "1li", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "1", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		eggs: new Decimal(48),
    }},
    color: "#FF0000",
    requires: new Decimal(50), // Can be a function that takes requirement increases into account
    resource: "1st LI", // Name of prestige currency
    baseResource: "eggs", // Name of resource prestige is based on
    baseAmount() {return player.eggs}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "1", description: "1: Reset for 1st LI", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
     upgrades: {
       
    },
})

