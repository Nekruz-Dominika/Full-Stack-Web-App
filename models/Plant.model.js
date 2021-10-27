const { Schema, model } = require("mongoose");

const plantSchema = new Schema(
    {
        name: String,
        description: String,
        sun: String,
        water: String,
        price: String,
        image: String,
        owner: {type: Schema.Types.ObjectId, ref: "User"}

    },
    {
        timestamps: true,
    }
)

const Plant = model("Plant", plantSchema);
module.exports = Plant;