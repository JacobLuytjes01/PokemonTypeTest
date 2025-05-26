const game = {
    Types: [["FIRE", ["WATER", 0.5], ["GRASS", 2], ["DARK", 1]],
        ["WATER", ["FIRE", 2], ["GRASS", 0.5], ["DARK", 1]],
        ["GRASS", ["FIRE", 0.5], ["WATER", 2], ["DARK", 1]],
        ["DARK", ["FIRE", 1], ["WATER", 1], ["GRASS", 1]]
    ],
    findType: function (attack, defend) {
        if (defend === "") {
            return 1;
        }
        let i = 0
        let j = 1;
        while (i < this.Types.length) {
            if (this.Types[i][0] === attack) {
                if (attack === defend) {
                    return 1;
                }
                while (j < this.Types.length) {
                    if (this.Types[i][j][0] === defend) {
                        break;
                    }
                    ++j;
                }
                break;
            }
            ++i;
        }
        if (i < this.Types.length && j < this.Types[i].length) {
            return this.Types[i][j][1];
        }
        return "Unknown";
    },
    display: function(attack, defend, defend2) {
        let text = "The effectiveness of " + attack + " against ";
        if (defend2 === "") {
            text += defend + " is " + (this.findType(attack.toUpperCase(), defend.toUpperCase()));
        }
        else if (defend === "") {
            text += defend2 + " is " + (this.findType(attack.toUpperCase(), defend2.toUpperCase()));
        }
        else {
            let num = (this.findType(attack.toUpperCase(), defend.toUpperCase()) * this.findType(attack.toUpperCase(), defend2.toUpperCase()));
            if (isNaN(num)) {
                num = "Unknown";
            }
            text += defend + " and " + defend2 + " is " + num;
        }
        document.getElementById("displayValue").innerText = text;
    },
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("displayButton").addEventListener('click', () => {
        game.display(document.getElementById("attackInput").value, document.getElementById("defendInput").value, document.getElementById("defendInput2").value);
    });
});